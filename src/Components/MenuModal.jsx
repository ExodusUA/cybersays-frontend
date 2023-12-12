import React, { useState } from 'react';
import myAccount from '../images/myAccount.png'
import logout from '../images/logout.png'
import deleteAccount from '../images/deleteAccount.png'
import close from '../images/closeBtn.png'
import { Link } from 'react-router-dom'
import DeleteConfirm from './DeleteConfirm'

function MenuModal({ setModalOpen, setDeleteOpen }) {

    

    return (
        <div className=' fixed right-0 w-screen h-screen top-0 z-30 bg-[#1b1f3f] backdrop-blur-sm bg-opacity-70 flex justify-center items-center'>
            <div className=' items-center gap-2 px-[25px] py-[15px] w-[300px]'>
                <div className=' flex justify-end mb-14 mr-[-50px]'>
                    <img onClick={() => setModalOpen(false)} className='w-[34px] cursor-pointer' src={close} alt="close" />
                </div>
                <div className='w-full'>
                    {/*
                    <Link to='/profile' onClick={() => setModalOpen(false)} className='text-white font-semibold text-[24px] saira flex items-center cursor-pointer justify-center'>
                        <img className='w-[24px] mr-2' src={myAccount} alt="myAccount" />My account
                    </Link>
                    */}
                    <Link to='/login' onClick={() => {
                        localStorage.removeItem('token')
                        setModalOpen(false)
                    }} className='text-white font-semibold text-[24px] saira flex items-center cursor-pointer justify-center my-8'>
                        <img className='w-[24px] mr-2' src={logout} alt="logout" />Logout
                    </Link>
                    <p onClick={e => {
                        setDeleteOpen(true)
                        setModalOpen(false)
                    }} className='text-[#FF4B60] font-semibold text-[24px] saira flex items-center cursor-pointer justify-center'>
                        <img className='w-[24px] mr-2' src={deleteAccount} alt="deleteAccount" />Delete account
                    </p>
                    <div className='h-[1px] bg-white my-8' ></div>
                    <Link to='/privacy' onClick={() => setModalOpen(false)} className='text-white font-semibold text-[24px] saira flex items-center cursor-pointer justify-center'>
                        Privacy policy
                    </Link>
                    <Link to='/terms' onClick={() => setModalOpen(false)} className='text-white font-semibold text-[24px] saira flex items-center cursor-pointer justify-center mt-8'>
                        Terms of use
                    </Link>

                </div>
            </div>
            
        </div>
    )
}

export default MenuModal
