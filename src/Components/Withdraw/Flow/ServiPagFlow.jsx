import React, { useState } from 'react'
import { useDesign } from '../../../Helpers/Design/DesignContext'
import userAPI from '../../../Requests/user'

function ServiPagFlow({ languageData }) {
    const { design } = useDesign()

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [RUT, setRUT] = useState(null)



    return (
        <div className='max-w-[600px] w-full m-auto'>
            <p className='text-[18px] md:text-[32px] font-semibold text-center mt-2'>{languageData?.ServiPagTitle}</p>
            <p className='saira text-[12px] font-medium my-1'>{languageData?.ServiPagInput1}</p>
            <div className='flex justify-center'>
                <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder={languageData?.ServiPagInput1} />
            </div>
            <p className='saira text-[12px] font-medium my-1'>{languageData?.ServiPagInput2}</p>
            <div className='flex justify-center'>
                <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={name} onChange={e => setName(e.target.value)} placeholder={languageData?.ServiPagInput2} />
            </div>
            <p className='saira text-[12px] font-medium my-1'>{languageData?.ServiPagInput3}</p>
            <div className='flex justify-center'>
                <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={RUT} onChange={e => setRUT(e.target.value)} placeholder={languageData?.ServiPagInput3} />
            </div>

            <div className='flex justify-center mt-4'>
                <button className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-3 max-w-[600px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawContinue}</button>
            </div>
        </div>
    )
}

export default ServiPagFlow
