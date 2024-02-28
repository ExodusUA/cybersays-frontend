import React, { useState } from 'react'
import { useDesign } from '../../Helpers/Design/DesignContext'

function PIX({ languageData, setStep }) {
    const { design } = useDesign()
    const [PIX, setPIX] = useState(null)
    const [CPF, setCPF] = useState(null)

    return (
        <div className='max-w-[600px] w-full m-auto'>
            <p className='text-[18px] md:text-[32px] font-semibold text-center mt-2'>We are paying via PIX</p>
            <p className='saira text-[12px] font-medium my-1'>Chave Pix:</p>
            <div className='flex justify-center'>
                <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={PIX} onChange={e => setPIX(e.target.value)} placeholder='' />
            </div>
            <p className='saira text-[12px] font-medium my-1'>CPF</p>
            <div className='flex justify-center'>
                <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={CPF} onChange={e => setCPF(e.target.value)} placeholder='' />
            </div>
            <div className='flex justify-center mt-4'>
                <button className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-3 max-w-[600px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>Continue</button>
            </div>
        </div>
    )
}

export default PIX
