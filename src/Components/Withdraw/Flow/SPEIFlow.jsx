import React, { useState } from 'react'
import { useDesign } from '../../../Helpers/Design/DesignContext'
import userAPI from '../../../Requests/user'

function SPEIFlow({ languageData }) {
    const { design } = useDesign()
    
    const [name, setName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [documentType, setDocumentType] = useState(null)
    const [document, setDocument] = useState(null)
    const [email, setEmail] = useState(null)




    return (
        <div className='max-w-[600px] w-full m-auto'>
            <p className='text-[18px] md:text-[32px] font-semibold text-center mt-2'>{languageData?.SPEITitle}</p>
            <p className='saira text-[12px] font-medium my-1'>{languageData?.SPEIInput1}</p>
            <div className='flex justify-center'>
                <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={name} onChange={e => setName(e.target.value)} placeholder={languageData?.SPEIInput1} />
            </div>
            <p className='saira text-[12px] font-medium my-1'>{languageData?.SPEIInput2}</p>
            <div className='flex justify-center'>
                <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder={languageData?.SPEIInput2} />
            </div>
            <p className='text-[12px] saira mb-1 mt-3'>{languageData?.SPEISelect1}</p>
            <select
                value={documentType}
                onChange={e => setDocumentType(e.target.value)}
                className='custom-select bg-white text-[#1E1E1E] w-full h-[45px] rounded-[12px] px-2  focus:ring-0 outline-none saira' >
                <option className='text-black saira' >CURP</option>
            </select>
            <p className='saira text-[12px] font-medium my-1'>{languageData?.SPEIInput3}</p>
            <div className='flex justify-center'>
                <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={document} onChange={e => setDocument(e.target.value)} placeholder={languageData?.SPEIInput3} />
            </div>
            <p className='saira text-[12px] font-medium my-1'>{languageData?.SPEIInput4}</p>
            <div className='flex justify-center'>
                <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder={languageData?.SPEIInput4} />
            </div>
            <div className='flex justify-center mt-4'>
                <button className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-3 max-w-[600px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawContinue}</button>
            </div>
        </div>
    )
}

export default SPEIFlow
