import React from 'react'
import myAccount from '../images/myAccount.png'
import logout from '../images/logout.png'
import deleteAccount from '../images/deleteAccount.png'
import { Link } from 'react-router-dom'

function UserMenu({ setUserMenuOpen }) {
    
    return (
        <div  className=' absolute right-0 top-[100px] z-30'>
            <div className='bg-[#83869b] bg-opacity-25 items-center gap-2 px-[25px] py-[15px] border-[1px] border-[#FF1CBB] rounded-[12px]'>
                <p className='text-white font-semibold text-[14px] saira flex items-center cursor-pointer'><img className='w-[20px] mr-2' src={myAccount} alt="myAccount" />My account</p>
                <div className='h-[2px] gradient-line my-4' ></div>
                <Link to='/login' onClick={() => {
                    localStorage.removeItem('token')
                    setUserMenuOpen(false)
                }} className='text-white font-semibold text-[14px] saira flex items-center cursor-pointer'><img className='w-[20px] mr-2' src={logout} alt="logout" />Logout</Link>
                <div className='h-[2px] gradient-line my-4' ></div>
                <p className='text-[#FF4B60] font-semibold text-[14px] saira flex items-center cursor-pointer'><img className='w-[20px] mr-2' src={deleteAccount} alt="deleteAccount" />Delete account</p>

            </div>
        </div>
    )
}

export default UserMenu
