import React from 'react'
import { LoginSocialFacebook } from 'reactjs-social-login';
import facebook from '../../images/landing/icons/facebook.png'

function FacebookButton({ loginViaFacebook, setLoading, languageData }) {

    function getFacebookEmail(data) {
        loginViaFacebook(data.data.email)
    }

    return (
        <LoginSocialFacebook className=' lg:mt-0 w-[33%] lg:w-full' scope='email' fields='email' appId={process.env.REACT_APP_FACEBOOK_APP_ID} onResolve={(response) => {
            console.log(response)
            getFacebookEmail(response)
        }}
            onReject={(response) => {
                console.log(response)
            }}
            fieldsProfile={
                'email'
            }>
            <button type="button" className='w-full gap-2 lg:gap-4 lg:max-w-[160px] flex bg-[#1E1E1E] px-1.5 lg:px-3 py-2 lg:py-1 rounded-[8px] lg:rounded-[12px] items-center justify-center'>
                <img className='w-4 lg:w-6 h-4 lg:h-6' src={facebook} alt="Google" />
                <p className='text-[10px] lg:text-[14px] text-[#888888] poppins font-semibold text-left saira' dangerouslySetInnerHTML={{ __html: languageData?.authFacebook + ' <span class="saira" style="color:#FFFFFF">Facebook</span>' }} />
            </button>
        </LoginSocialFacebook>
    )
}

export default FacebookButton
