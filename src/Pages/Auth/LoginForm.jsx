import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { createUser, socialUserAuth } from '../../Requests/auth';
import GoogleAuth from '../../Components/Buttons/GoogleButton';
import OTPModal from './OTPModal';
import { useNavigate } from 'react-router-dom';
import AuthEmailNotification from './AuthEmailNotification';
import Loader from '../../Components/Loader';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { getUserCountry } from '../../Requests/utills';
import DiscordButton from '../../Components/Buttons/DiscordButton';
import mixpanel from 'mixpanel-browser';
import { useLanguage } from '../../Helpers/Languages/LanguageContext';
import moengage from '@moengage/web-sdk';

function LoginForm({ languageData, referralID }) {

    const {language} = useLanguage();

    const recaptchaRef = useRef();
    const navigate = useNavigate();

    const [activeModal, setActiveModal] = useState(null);
    const queryParams = new URLSearchParams(window.location.search);
    let refferalCode = referralID;
    let special = queryParams.get('special');

    if (special === undefined || special === null) special = null
    if (refferalCode === undefined || refferalCode === null) refferalCode = null

    const [email, setEmail] = useState('');

    const [loading, setLoading] = useState(false);


    const loginViaFacebook = async (email) => {
        setLoading(true)
        console.log('Facebook Email: ', email)
        const token = await recaptchaRef.current.executeAsync();
        socialAuth(email, token)
    }

    const loginViaGoogle = async (email) => {
        setLoading(true)
        console.log('Google Email: ', email)
        const token = await recaptchaRef.current.executeAsync();
        socialAuth(email, token)
    }

    async function socialAuth(email, token) {
        try {
            let userCountry = await getUserData();
            const res = await socialUserAuth(email, token, refferalCode, special, userCountry.country, language);
            await handleMixpanelEvent(true, 'social')
            localStorage.setItem('token', res.token);
            navigate('/')
        } catch (error) {
            await handleMixpanelEvent(false, 'social')
            console.log(error)
            setLoading(false)
        }
    }

    const getCurrentModal = () => {
        switch (activeModal) {
            case 'otp':
                return <OTPModal languageData={languageData} recaptchaRef={recaptchaRef} email={email} refferalCode={refferalCode} special={special} />
            case 'notification':
                return <AuthEmailNotification languageData={languageData} email={email} />
            default:
                return null
        }
    }

    const getUserData = async () => {
        try {
            const res = await getUserCountry();
            return res.data.Data
        } catch (error) {
            console.log(error)
        }
    }

    const params = new URLSearchParams(window.location.search);

    const emailParam = params.get('email');
    const [showButtons, setShowButtons] = useState(true);

    useEffect(() => {
        //delete email params from url
        if (emailParam === '1') {
            setShowButtons(false);
        } else {
            setShowButtons(true);
        }


    }, [emailParam]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (email === '') return alert('Please enter your email')
        if (!email.includes('@')) return alert('Please enter a valid email')
        let userCountry = await getUserData();
        const token = await recaptchaRef.current.executeAsync();

        try {
            const res = await createUser(token, email, refferalCode, userCountry.country, language)

            await handleMixpanelEvent(true, 'email')

            setActiveModal('notification')
            setLoading(false)

        } catch (error) {
            handleMixpanelEvent(false, 'email')
            setLoading(false)
            alert('Error: ', error.message)
        }

    };

    const handleMixpanelEvent = async (success, provider) => {
        mixpanel.track('login', {
            registered_width: provider,
            success: success
        });
        moengage.track_event('login', {
            registered_width: provider,
            success: success
        });
    }


    return (
        <>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
                <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} size="invisible">
                    <form onSubmit={e => handleSubmit(e)}>
                        <div className='grid grid-cols-1 lg:block mt-2  w-full lg:m-left p-1 lg:p-5 bg-[#83869b] bg-opacity-20 backdrop-blur-lg border-[1px] border-[#DDBBFD]  rounded-[14px] lg:rounded-[24px]'>
                            <div className='text-left  relative'>
                                <input onChange={e => setEmail(e.target.value)} value={email} type="email" className='w-full h-[52px] rounded-[12px] px-4 text-gray saira' placeholder={languageData?.authEnterEmail} />
                                <button type='submit' onClick={e => handleSubmit(e)} className='w-full absolute right-1 top-1 continue_button h-[44px] text-[14px] md:text-[16px] rounded-[12px] saira font-bold max-w-[125px] md:max-w-[155px]'>{languageData?.authContinue}</button>
                            </div>
                            <div className={`${showButtons ? '' : 'hidden'}`}>
                                <div className='flex items-center justify-between w-full mt-2 lg:mt-4 gap-1 lg:gap-4'>
                                    <GoogleAuth loginViaGoogle={loginViaGoogle} languageData={languageData} />
                                    {/*<FacebookButton loginViaFacebook={loginViaFacebook} languageData={languageData} />*/}
                                    <DiscordButton languageData={languageData} />
                                </div>
                                
                            </div>
                        </div>
                    </form>
                </ReCAPTCHA>

                {
                    getCurrentModal()
                }
                {
                    loading && <Loader />
                }
            </GoogleOAuthProvider>
        </>
    )
}

export default LoginForm