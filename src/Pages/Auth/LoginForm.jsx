import React, { useRef } from 'react'
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { otpSending, socialUserAuth } from '../../Requests/auth';
import GoogleAuth from '../../ComponentsOLD/Buttons/GoogleButton';
import FacebookButton from '../../ComponentsOLD/Buttons/FacebookButton';
import OTPModal from './OTPModal';
import { useNavigate } from 'react-router-dom';
import AuthEmailNotification from './AuthEmailNotification';
import Loader from '../../ComponentsOLD/Loader';

function LoginForm() {

    const recaptchaRef = useRef();
    const navigate = useNavigate();

    const [activeModal, setActiveModal] = useState(null);
    const queryParams = new URLSearchParams(window.location.search);
    let refferalCode = queryParams.get('ref') || window.localStorage.getItem('ref');
    let special = queryParams.get('special');

    if (special === undefined || special === null) special = null
    if (refferalCode === undefined || refferalCode === null) refferalCode = null

    const [email, setEmail] = useState('');

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (email === '') return alert('Please enter your email')
        if (!email.includes('@')) return alert('Please enter a valid email')

        const token = await recaptchaRef.current.executeAsync();

        try {
            const res = await otpSending(token, email, refferalCode)

            if (res.data === "Auth link sended") {
                setActiveModal('notification')
            } else {
                setActiveModal('otp')
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            alert('Error: ', error.message)
        }

    };

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
            const res = await socialUserAuth(email, token, refferalCode, special);
            localStorage.setItem('token', res.token);
            navigate('/')
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const getCurrentModal = () => {
        switch (activeModal) {
            case 'otp':
                return <OTPModal recaptchaRef={recaptchaRef} email={email} refferalCode={refferalCode} special={special} />
            case 'notification':
                return <AuthEmailNotification />
            default:
                return null
        }
    }

    return (
        <>
            <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY} size="invisible">
                <form onSubmit={e => handleSubmit(e)}>
                    <div className='grid grid-cols-1 lg:block mt-4 lg:mt-[20vh]  lg:max-w-full m-auto lg:m-left p-5 bg-[#83869b] bg-opacity-20 border-[1px] border-[#FF1CBB] backdrop-blur-lg rounded-[24px]'>
                        <div className='text-left mt-4 relative'>
                            <input onChange={e => setEmail(e.target.value)} value={email} type="email" className='w-full h-[52px] rounded-[12px] px-4 text-gray saira' placeholder='Enter your e-mail' />
                            <button type='submit' onClick={e => handleSubmit(e)} className='w-full absolute right-1 top-1 continue_button h-[44px] rounded-[12px] saira font-bold max-w-[155px]'>Continue</button>
                        </div>
                        <div className='lg:flex items-center w-full mt-4 gap-4'>
                            <GoogleAuth loginViaGoogle={loginViaGoogle} />
                            <FacebookButton loginViaFacebook={loginViaFacebook} />
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
        </>
    )
}

export default LoginForm