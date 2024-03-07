import React, { useState } from 'react'
import { useDesign } from '../../Helpers/Design/DesignContext'
import userAPI from '../../Requests/user'

function PixFlow({ languageData, setConfirm, setError, email }) {
    const { design } = useDesign()
    const [PIX, setPIX] = useState(null)
    const [CPF, setCPF] = useState(null)


    async function creteWithdraw() {
        if (PIX === null || PIX === undefined || PIX.length === '') return alert('Please enter a valid PIX')
        if (CPF === null || CPF === undefined || CPF.length === '') return alert('Please enter a valid CPF')
        try {
            await userAPI.createPixWithdraw(PIX, CPF, email)
            setConfirm(true)
        } catch (error) {
            setError(true)
        }

    }

    return (
        <div className='max-w-[600px] w-full m-auto'>
            <p className='text-[18px] md:text-[32px] font-semibold text-center mt-2'>{languageData?.PIXTitle}</p>
            <p className='saira text-[12px] font-medium my-1'>{languageData?.PIXInpu1}</p>
            <div className='flex justify-center'>
                <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={PIX} onChange={e => setPIX(e.target.value)} placeholder='' />
            </div>
            <p className='saira text-[12px] font-medium my-1'>{languageData?.PIXInpu2}</p>
            <div className='flex justify-center'>
                <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={CPF} onChange={e => setCPF(e.target.value)} placeholder='' />
            </div>
            <div className='flex justify-center mt-4'>
                <button onClick={e => creteWithdraw()} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-3 max-w-[600px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawContinue}</button>
            </div>
        </div>
    )
}

export default PixFlow
