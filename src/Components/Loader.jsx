import React from 'react'
import loading from '../images/loading.svg'

function Loader() {
    return (
        <div className='fixed z-[999999] top-0 left-0 w-screen h-screen bg-black/60 flex justify-center items-center'>

            <div className={`rounded-[12px] bg-[#9D3EFD] w-[50px] h-[50px] flex justify-center items-center`}>
                <img className='w-8 h-8' src={loading} alt="Loading" />
            </div>

        </div>
    )
}

export default Loader