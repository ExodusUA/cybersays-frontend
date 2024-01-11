import React from 'react'

<<<<<<< Updated upstream
function Tooltip1({ setOpenTooltip }) {
    return (
        <div onClick={e => setOpenTooltip(false)} className='w-screen h-screen fixed flex justify-center items-center top-0 z-[60]  p-4 '>
            <div onClick={e => e.stopPropagation()} className='flex justify-center w-full  max-w-[1140px] h-[300px] mt-5 m-auto md:my-4 bg-white'>
                22
=======
function Tooltip1({ setOpenTooltip, languageData }) {
    return (
        <div onClick={e => setOpenTooltip(false)} className='fixed flex justify-center items-center top-0 z-[60]  p-4 '>
            <div onClick={e => e.stopPropagation()} className=' justify-center w-full top-[250px]  max-w-[1140px] p-6 mt-5 m-auto md:my-4 bg-white rounded-[22px]'>
                <div>
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
>>>>>>> Stashed changes
            </div>
        </div>
    )
}

export default Tooltip1
