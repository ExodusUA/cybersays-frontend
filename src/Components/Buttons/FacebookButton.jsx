import React from 'react'
import { LoginSocialFacebook } from 'reactjs-social-login';
import facebook from '../../images/landing/icons/facebook.png'

function FacebookButton({ loginViaFacebook, setLoading, languageData }) {

    function getFacebookEmail(data) {
        loginViaFacebook(data.data.email)
    }

    return (
        <LoginSocialFacebook className='mt-2 lg:mt-0 w-full' scope='email' fields='email' appId={process.env.REACT_APP_FACEBOOK_APP_ID} onResolve={(response) => {
            console.log(response)
            getFacebookEmail(response)
        }}
            onReject={(response) => {
                console.log(response)
            }}
            fieldsProfile={
                'email'
            }>
            <button type="button" className='w-full flex gap-4 bg-white py-3 rounded-[12px] items-center justify-center'>
                <img className='w-6 h-6' src={facebook} alt="Google" />
                <p className='text-[16px] poppins text-[#8E8E8E] font-semibold text-left saira' dangerouslySetInnerHTML={{ __html: languageData?.authFacebook + ' <span class="saira" style="color:#282B54">Facebook</span>' }} />
            </button>
        </LoginSocialFacebook>
    )
}

export default FacebookButton
