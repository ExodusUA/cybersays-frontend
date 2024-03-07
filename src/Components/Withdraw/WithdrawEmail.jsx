import React, { useState } from 'react'
import { useDesign } from '../../Helpers/Design/DesignContext'
import userAPI from '../../Requests/user'

function WithdrawEmail({ languageData, selectedPayment, setError }) {
    const { design } = useDesign()

    const [email, setEmail] = useState('')

    async function generateOTP() {
        if (email === null || email === undefined || email.length === '') return alert('Please enter a valid email address')

        try {
            const res = await userAPI.generateOTP(email)
        } catch (error) {
            setError(true)
        }
    }

    return (
        <div>
            <p className='text-[18px] md:text-[24px] font-semibold text-center my-2'>{
                selectedPayment === 'pix' ? languageData?.PIXTitle : languageData?.withdrawTitle3
            }</p>
            <div className='flex justify-center mt-4'>
                <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder={languageData?.withdrawInputEmail} />
            </div>
            <div className='flex justify-center mt-4'>
                <button onClick={e => generateOTP()} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 max-w-[600px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawContinue}</button>
            </div>
            <div className='bg-[#EAEAEA] bg-opacity-40 backdrop-blur-md rounded-[14px] lg:rounded-[24px] p-2 mt-4 max-w-[600px] w-full m-auto py-3'>
                <p className='text-[12px] font-medium saira'>{languageData?.withdrawLi1}</p>
                <p className='text-[12px] font-medium saira mt-1'>{languageData?.withdrawLi2}</p>
                <p className='text-[12px] font-medium saira mt-1'>{languageData?.withdrawLi3}</p>
                <p className='text-[12px] font-medium saira mt-1'>{languageData?.withdrawLi4}</p>
                <p className='text-[12px] font-medium saira mt-1'>{languageData?.withdrawLi5}</p>
                <p className='text-[12px] font-medium saira mt-1'>{languageData?.withdrawLi6} <span className='saira text-[12px] underline cursor-pointer'>{languageData?.withdrawLi6Span}</span></p>
            </div>
        </div>
    )
}

export default WithdrawEmail


