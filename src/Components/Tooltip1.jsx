import React from 'react'

function Tooltip1({ setOpenTooltip }) {
    return (
        <div onClick={e => setOpenTooltip(false)} className='w-screen h-screen fixed flex justify-center items-center top-0 z-[60]  p-4 '>
            <div onClick={e => e.stopPropagation()} className='flex justify-center w-full  max-w-[1140px] h-[300px] mt-5 m-auto md:my-4 bg-white'>
                22
            </div>
        </div>
    )
}

export default Tooltip1
