import React from 'react'
import { Link } from 'react-router-dom'

function AuthError() {
    return (
        <div className='w-screen h-screen bg-modal fixed left-0 top-0 z-[99] bg-cover flex items-center justify-center'>
            <div className='p-10 rounded-[12px] bg-[#83869b] bg-opacity-25   border-[1px] border-[#FF1CBB] max-w-[400px] w-full'>
                <p className='py-8 text-[24px] font-bold max-w-[500px] w-full text-center'>Auth Error</p>
                <Link to='/'>
                    <button className='continue_button w-full h-[52px] rounded-[12px] saira mt-5 duration-200 disabled:opacity-80 cursor-pointer'>Back to the main</button>
                </Link>
            </div>
        </div>
    )
}

export default AuthError
