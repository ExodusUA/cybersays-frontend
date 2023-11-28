import React from 'react'
import google from '../../images/landing/icons/google.png'
import { LoginSocialGoogle } from 'reactjs-social-login';

function GoogleButton({ loginViaGoogle }) {

    return (
        <>
            <LoginSocialGoogle className='w-full' scope='https://www.googleapis.com/auth/userinfo.email' client_id='539052354588-6lpssquossom75ju3kudcm1hn2e88udq.apps.googleusercontent.com' onResolve={(response) => {
                console.log(response.data)
                console.log('Google Email: ', response.data.email)
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
        </>

    )
}

export default GoogleButton