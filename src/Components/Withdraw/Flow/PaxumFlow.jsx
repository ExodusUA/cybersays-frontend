import React, { useState } from 'react'
import { useDesign } from '../../../Helpers/Design/DesignContext'
import { Link } from 'react-router-dom';
import { withdrawPaxum } from '../../../Requests/withdraw';
import { useQueryClient } from '@tanstack/react-query';


function PaxumFlow({ languageData, setConfirm, setError }) {
    const { design } = useDesign()
    const queryClient = useQueryClient()

    const [paxumID, setPaxumID] = useState('');
    const [checkmark, setCheckmark] = useState(false)

    const handlePaxumFlow = async () => {
        if (!checkmark) return
        if (paxumID === '') return alert('Please enter your Paxum ID')

        try {
            const res = await withdrawPaxum({ paxumID })
            setConfirm(true)
        } catch (error) {
            console.log(error)
            setError(true)
        }

        queryClient.invalidateQueries('userData')

    }

    return (

        <div className={` w-full relative  px-2 rounded-[12px] lg:px-4 mt-2 max-w-[600px] m-auto`}>
            <p className='text-[18px] md:text-[32px] font-semibold text-center my-2 lg:leading-[40px]'>{languageData?.paxumFlowTitle}</p>
            <p className='text-[12px] saira mb-1 mt-3'>{languageData?.paxumFlowInput}</p>
            <input
                value={paxumID}
                onChange={e => setPaxumID(e.target.value)}
                className='bg-white text-[#1E1E1E] w-full h-[45px] rounded-[12px] px-3  focus:ring-0 outline-none saira' placeholder={languageData?.paxumFlowPlaceholder} type="text" />
            <div className='flex items-center justify-center gap-2 mt-2 lg:mt-4'>
                <div className='w-[23px] h-[22px] border-2 border-white rounded-[4px] flex justify-center items-center align-middle cursor-pointer' onClick={e => setCheckmark(!checkmark)}>
                    {
                        checkmark === true && <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                            <path d="M10 3.65088L4.66667 9.65088L2 6.65088" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    }
                </div>
                <label className='saira text-[12px] lg:text-[14px] max-w-[260px] lg:max-w-[530px] w-full cursor-pointer select-none font-normal leading-4' htmlFor="notification">{languageData?.paxumFlowCheckbox} </label>
                <input type="checkbox" name="notification" id="notification" hidden onChange={e => setCheckmark(!checkmark)} />
            </div>
            <div className='flex justify-center mt-2 lg:mt-4'>
                <button disabled={!checkmark} onClick={e => handlePaxumFlow()} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 outline-none ${checkmark ? 'opacity-[1]' : 'opacity-[0.5]'} ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.paxumFlowBtn}</button>
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


