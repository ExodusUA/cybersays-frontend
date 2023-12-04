import React from 'react'
import logotype from '../images/logotype.svg'
import { useState } from 'react'
import LoginButton from './Buttons/LoginButton'
import UserMenuButton from './UserMenuButton'

function SiteMenu({ userData }) {
    return (
        <div className='fixed top-0 left-0 flex md:justify-center py-2 z-[99] w-screen'>
            <img src={logotype} className='w-[128px]' alt="Logotype" />
            <div className='absolute right-20 top-0 flex items-center align-middle h-full z-20'>
                {
                    localStorage.getItem('token') === null
                        ? <LoginButton />
                        : <UserMenuButton user={userData} />
                }
            </div>
        </div>
    )
}

export default SiteMenu