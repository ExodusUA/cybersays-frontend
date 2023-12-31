import React, { useEffect } from 'react'
import btnMenu from '../../images/CyberSaysPage/openMenu.png'
import weekendCoin from '../../images/CyberSaysPage/weekendCoin.png'

function HeaderMenu({ setMenuOpen, user }) {
    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <div className='flex justify-center' >
        <div className=' fixed top-0 z-50 p-2 px-4 w-full max-w-[1170px] m-auto'>
            <div className=' flex items-center justify-between'>
                <img onClick={() => setMenuOpen(true)} className='w-[24px] h-[24px] cursor-pointer' src={btnMenu} alt="btnMenu" />
                <div className='bg-[#EAEAEA] bg-opacity-20 border-[2px] border-[#FFED63] backdrop-blur-lg rounded-[50px]'>
                    <div >
                        <div className=' flex px-2 py-[2px]'>
                            <div className=' leading-4 mx-1'>
                                <p className='text-[12px] text-[#1E1E1E] font-medium saira text-center '>USD Earned:</p>
                                <p className='text-[12px] text-[#1E1E1E] font-medium saira text-center '>💵 {user?.earned || 0}</p>
                            </div>
                            <div className=' leading-4 mx-1'>
                                <p className='text-[12px] text-[#1E1E1E] font-medium saira text-center '>Refferals:</p>
                                <p className='text-[12px] text-[#1E1E1E] font-medium saira text-center '>
                                    👬 {user && user.refferals ? JSON.parse(user.refferals).length : 0}
                                </p>

                            </div>
                            <div className=' leading-4 mx-1'>
                                <p className='text-[12px] text-[#1E1E1E] font-medium saira text-center '>Raffle Tickets:</p>
                                <p className='text-[12px] text-[#1E1E1E] font-medium saira text-center '>🃏 {user?.raffle_tickets || 0}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='w-[44px] h-[44px]' src={weekendCoin} alt="weekendCoin" />
            </div>
        </div>
        </div>
    )
}

export default HeaderMenu
