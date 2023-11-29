import React from 'react'
import myAccount from '../images/myAccount.png'
import logout from '../images/logout.png'
import deleteAccount from '../images/deleteAccount.png'

function UserMenuModal({ setUserMenuOpen }) {
    return (
        <div  className=' absolute right-0 top-[100px] z-30'>
            <div onClick={e => setUserMenuOpen(false)} className='bg-[#83869b] bg-opacity-25 items-center gap-2 px-[25px] py-[20px] border-[1px] border-[#FF1CBB] rounded-[12px]'>
                <p className='text-white font-semibold text-[16px] saira flex items-center cursor-pointer'><img className='w-[24px] mr-2' src={myAccount} alt="myAccount" />My account</p>
                <div className='h-[2px] gradient-line my-4' ></div>
                <p className='text-white font-semibold text-[16px] saira flex items-center cursor-pointer'><img className='w-[24px] mr-2' src={logout} alt="logout" />Log out</p>
                <div className='h-[2px] gradient-line my-4' ></div>
                <p className='text-[#FF4B60] font-semibold text-[16px] saira flex items-center cursor-pointer'><img className='w-[24px] mr-2' src={deleteAccount} alt="deleteAccount" />Delete account</p>

            </div>
        </div>
    )
}

export default UserMenuModal
