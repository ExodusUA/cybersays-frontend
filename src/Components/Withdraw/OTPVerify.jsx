import React, { useState } from 'react'
import { useDesign } from '../../Helpers/Design/DesignContext'
import CodeInput from '../Transactions/CodeInput'
import userAPI from '../../Requests/user'
import { withdrawXoxoday } from '../../Requests/withdraw'

function OTPVerify({ languageData, isVerified, email }) {
    const { design } = useDesign()
    const [code, setCode] = useState(['', '', '', '', '', ''])

    async function verifyOTP() {

        let codeNumber = code.join('')

        try {
            const res = await userAPI.verifyOTP(codeNumber, email)
            if (res.data.isValid === true) {
                try {
                    const res = await withdrawXoxoday(email)
                    if (res.data?.isWithdrawCreated === true) {
                        isVerified(true)
                    } else {
                        alert('Error! Maybe we don`t have a suitable campaign for you, please try again later')
                        isVerified(false)
                    }
                } catch (error) {
                    
                    isVerified(true)
                }
            }
        } catch (error) {
           
        }
    }

    return (
        <div>
            <p className='text-[18px] md:text-[32px] font-semibold text-center mt-2'>{languageData?.verificationTitle}</p>
            <p className='text-[14px] font-semibold text-center saira'>{languageData?.verificationSubTitle}</p>
            <p className='text-[14px] saira font-medium text-center mt-4 gradient-linkDouble'>0:45</p>
            <CodeInput setCode={setCode} code={code} />
            <div className='flex justify-center mt-4'>
                <button onClick={e => verifyOTP()} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 max-w-[600px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawContinue}</button>
            </div>
        </div>
    )
}

export default OTPVerify
