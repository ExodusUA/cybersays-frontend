import React from 'react'

function ToolTip1({ languageData, setToolTip }) {
    return (
        <div className=' w-full  fixed right-0'>
            <div className=' bg-white mt-[30px] rounded-[12px] lg:rounded-[22px] p-2 lg:p-4 lg:pb-6'>
                <div className='flex justify-end'>
                    <svg className='cursor-pointer' width="24" height="24" onClick={e => setToolTip(false)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 20L4 4M20 4L4 20" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <p className='text-black text-left saira text-[12px] md:text-[14px] font-medium leading-[15px]'>
                    {languageData?.raffleInfoTitle1}
                </p>
                <p className='text-black text-left saira text-[12px] md:text-[14px] font-medium leading-[15px] mt-3 ml-2'>
                    1. <span className='saira font-bold text-black'>{languageData?.raffleInfoTitle2} </span>{languageData?.raffleInfoTitle2Span}
                </p>
                <p className='text-black text-left saira text-[12px] md:text-[14px] font-medium leading-[15px] mt-3 ml-2'>
                    2. <span className='saira font-bold text-black'>{languageData?.raffleInfoTitle3} </span>{languageData?.raffleInfoTitle3Span}
                </p>
                <p className='text-black text-left saira text-[12px] md:text-[14px] font-medium leading-[15px] mt-3'>
                    {languageData?.raffleInfoTitle4} <span className='saira underline text-black cursor-pointer'>{languageData?.raffleInfoTitle4Span}</span>
                </p>

            </div>
        </div>
    )
}

export default ToolTip1
