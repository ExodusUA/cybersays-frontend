import React from 'react'
import { useDesign } from '../../Helpers/Design/DesignContext'
import CodeInput from './CodeInput'

function Verification({languageData, setStep}) {
    const { design } = useDesign()
    return (
        <div>
            <p className='text-[18px] md:text-[32px] font-semibold text-center mt-2'>OTP Verification</p>
            <p className='text-[14px] font-semibold text-center saira'>We have send you an One Time Password(OTP) to your email address</p>
            <p className='text-[14px] saira font-medium text-center mt-4 gradient-linkDouble'>0:45</p>
            <CodeInput />
            <div className='flex justify-center mt-4'>
                <button className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 max-w-[600px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>Continue</button>
            </div>
        </div>
    )
}

export default Verification
