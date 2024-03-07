import React, { useState } from 'react'
import { useDesign } from '../../Helpers/Design/DesignContext'
import { Link } from 'react-router-dom';

function PaxumFlow({ languageData, setConfirm, setSelectedPayment}) {
    const { design } = useDesign()

    const [email, setEmail] = useState('');

    const handlePaxumFlow = () => {
        console.log('Paxum Flow')
        setSelectedPayment(null)
        setConfirm(true)
    }

    return (

        <div className={` w-full relative  px-2 rounded-[12px] lg:px-4 mt-2 max-w-[600px] m-auto`}>
            <p className='text-[18px] md:text-[32px] font-semibold text-center my-2 lg:leading-[40px]'>{languageData?.paxumFlowTitle}</p>
            <p className='text-[12px] saira mb-1 mt-3'>{languageData?.paxumFlowInput}</p>
            <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                className='bg-white text-[#1E1E1E] w-full h-[45px] rounded-[12px] px-3  focus:ring-0 outline-none saira' placeholder={languageData?.paxumFlowPlaceholder} type="text" />
            <div className='flex justify-center mt-2 lg:mt-4'>
                <button onClick={e => handlePaxumFlow()} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 outline-none  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.paxumFlowBtn}</button>
            </div>
            <div className={`bg-[#EAEAEA] bg-opacity-30 backdrop-blur-lg ${design === '0' ? 'rounded-[30px]' : ' rounded-[12px]'} py-1 px-8 mt-4`}>
                <p className={`text-[14px] font-normal text-center saira leading-3`}>
                    {languageData?.paxumFlowLink1}
                </p>
                <div className='flex justify-center'>
                    <Link to={'https://portal.paxum.com/register/personal'} target="_blank">
                        <p className={`text-[14px] font-normal text-center saira gradient-link cursor-pointer `}>
                            {languageData?.paxumFlowLink2}
                        </p>
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default PaxumFlow


