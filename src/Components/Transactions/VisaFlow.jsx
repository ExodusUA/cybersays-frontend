import React, { useState } from 'react'
import { useDesign } from '../../Helpers/Design/DesignContext'

function VisaFlow({ languageData }) {
    const { design } = useDesign()

    const [transfer, setTransfer] = useState('');
    const [email, setEmail] = useState('');
    const [card, setCard] = useState('');
    const [valueCard, setValueCard] = useState('');

    return (

        <div className={` w-full m-auto relative  px-2 rounded-[12px] lg:px-4 mt-2`}>
            <p className='text-[18px] md:text-[32px] font-semibold text-center my-2 lg:leading-[40px]'>{languageData?.visaFlowTitle}</p>
            <div className={`bg-[#EAEAEA] bg-opacity-30 backdrop-blur-lg ${design === '0' ? 'rounded-[30px]' : ' rounded-[12px]'} px-8`}>
                <p className={`text-[14px]  ${design === '0' ? 'text-[#FFED63]' : 'gradient-linkDouble font-semibold'} font-bold text-center saira  mt-1 py-1`}>
                {languageData?.visaFlowSubTitle}
                </p>
            </div>
            <p className='text-[12px] saira mb-1 mt-3'>{languageData?.visaFlowSelectName1}</p>
            <select
                value={transfer}
                onChange={e => setTransfer(e.target.value)}
                className='custom-select bg-white text-[#1E1E1E] w-full h-[45px] rounded-[12px] px-2  focus:ring-0 outline-none saira' >
                <option className='text-black saira' >{languageData?.visaFlowSelect1}</option>
            </select>
            <p className='text-[12px] saira mb-1 mt-3'>{languageData?.visaFlowInput}</p>
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='bg-white text-[#1E1E1E] w-full h-[45px] rounded-[12px] px-3  focus:ring-0 outline-none saira' placeholder={languageData?.visaFlowPlaceholder} type="text" />
            <p className='text-[12px] saira mb-1 mt-3'>{languageData?.visaFlowSelectName2}</p>
            <select
                value={card}
                onChange={e => setCard(e.target.value)}
                className='custom-select bg-white text-[#1E1E1E] w-full h-[45px] rounded-[12px] px-2  focus:ring-0 outline-none saira' >
                <option className='text-black saira' >{languageData?.visaFlowSelect2}</option>
            </select>
            <p className='text-[12px] saira mb-1 mt-3'>{languageData?.visaFlowSelectName3}</p>
            <select
                value={valueCard}
                onChange={e => setValueCard(e.target.value)}
                className='custom-select bg-white text-[#1E1E1E] w-full h-[45px] rounded-[12px] px-2  focus:ring-0 outline-none saira' >
                <option className='text-black saira' >{languageData?.visaFlowSelect3}</option>
            </select>
            <div className='flex justify-center mt-2 lg:mt-4'>
                <button className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 outline-none  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.visaFlowBtn}</button>
            </div>
        </div>

    )
}

export default VisaFlow


