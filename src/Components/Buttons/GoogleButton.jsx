import React from 'react'
import google from '../../images/landing/icons/google.png'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function GoogleButton({ loginViaGoogle, languageData }) {


    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            console.log(tokenResponse);
            const userInfo = await axios.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
            );

            loginViaGoogle(userInfo.data.email)
        },
        onError: errorResponse => console.log(errorResponse),
    });


    return (
        <>

            <button onClick={() => googleLogin()} type="button" className='w-[50%] lg:w-full gap-2 lg:gap-4  flex bg-[#1E1E1E] px-2 lg:px-3 py-3  rounded-[8px] lg:rounded-[12px] items-center justify-center'>
                <img className='w-4 lg:w-6 h-4 lg:h-6' src={google} alt="Google" />
                <p className='text-[12px] lg:text-[14px] text-[#888888] font-semibold text-left saira' dangerouslySetInnerHTML={{ __html: languageData?.authGoogle + ' <span class="saira" style="color:#FFFFFF">Google</span>' }} />
            </button>

            {
                /*
                <LoginSocialGoogle  className='w-full' scope='https://www.googleapis.com/auth/userinfo.email' client_id={process.env.REACT_APP_GOOGLE_CLIENT_ID} onResolve={(response) => {
                    console.log(response)
                    loginViaGoogle(response.data.email)
                }}
                
                   
                    onReject={(response) => {
                        console.log(response)
                    }}
                >
                    <button type="button" className='w-full flex gap-4 bg-white py-3 rounded-[12px] items-center justify-center'>
                        <img className='w-6 h-6' src={google} alt="Google" />
                        <p className='text-[14px] lg:text-[16px] text-[#8E8E8E] font-semibold text-left saira' dangerouslySetInnerHTML={{ __html: 'Continue with <span class="saira" style="color:#282B54">Google</span>' }} />
                    </button>
                </LoginSocialGoogle>
                */
            }

        </>

    )
}

export default GoogleButton