import React from 'react'
import { useDesign } from '../Helpers/Design/DesignContext'

function ToolTip2({ languageData, setToolTip }) {
    const { design } = useDesign()

    return (
        <div className=' w-full  fixed right-0 z-[999999999999] '>
            <div className=' bg-white mt-[20px] rounded-[12px] lg:rounded-[22px] p-2 lg:p-4 lg:pb-6'>
                <div className='flex justify-end'>
                    <svg className='cursor-pointer' width="24" height="24" onClick={e => setToolTip(false)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 20L4 4M20 4L4 20" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <p className='text-[14px] md:text-[32px] font-semibold text-center text-black mb-2'>{languageData?.refferalsInfoTitle}</p>
                <div className='flex justify-around'>
                    <div className='flex items-start max-w-[270px] w-full leading-[16px]'>
                        <p className='text-black  text-[14px] saira font-medium '>1.</p>
                        <p className='text-black text-[14px] saira font-medium'>{languageData?.refferalsInfo1}</p>
                    </div>
                    <div className={`w-[2px] ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'} mx-1`}></div>
                    <div className='flex items-start max-w-[270px] w-full leading-[16px]'>
                        <p className='text-black  text-[14px] saira font-medium '>2.</p>
                        <p className='text-black text-[14px] saira font-medium'>{languageData?.refferalsInfo2}</p>
                    </div>
                    <div className={`w-[2px] ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'} mx-1`}></div>
                    <div className='flex items-start max-w-[270px] w-full leading-[15px] '>
                        <p className='text-black  text-[14px] saira font-medium'>3.</p>
                        <p className='text-black text-[14px] saira font-medium'>{languageData?.refferalsInfo3}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ToolTip2
