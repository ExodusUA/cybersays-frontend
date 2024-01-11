import React, { useEffect, useState } from 'react'
import btnMenu from '../../images/CyberSaysPage/openMenu.png'
import weekendCoin from '../../images/CyberSaysPage/weekendCoin.png'
import money from '../../images/CyberSaysPage/headerMoney.png'
import refferals from '../../images/CyberSaysPage/headerRefferals.png'
import joker from '../../images/CyberSaysPage/headerJoker.png'

function HeaderMenu({ setMenuOpen, user, setTourModal }) {
    useEffect(() => {
        console.log(user)
    }, [user])


    const [visitedTour, setVisitedTour] = useState(localStorage.getItem('visitedTour') || false)

    return (
        <div className='flex justify-center' >
            <div className=' fixed top-0 md:top-3 z-50 p-2  px-4 w-full max-w-[1170px] m-auto'>
                <div className=' flex items-center justify-between'>
                    <img onClick={() => setMenuOpen(true)} className='w-[24px] sm:w-[32px] h-[24px] sm:h-[32px] cursor-pointer' src={btnMenu} alt="btnMenu" />
                    <div className='bg-[#EAEAEA] bg-opacity-20 border-[2px] border-[#FFED63] backdrop-blur-lg rounded-[50px]'>
                        <div>
                            <div className='xl:gap-4 flex px-2 sm:px-4 py-[2px] sm:py-[6px]'>
                                <div className=' leading-4 md:leading-5 mx-1'>
                                    <p className='text-[12px] sm:text-[16px] text-[#1E1E1E] font-medium saira text-center '>{user?.currency} Earned:</p>
                                    <p className='text-[12px] sm:text-[16px] text-[#1E1E1E] font-bold saira text-center flex justify-center'><img className='w-[21px] h-[21px] mr-[5px]' src={money} alt="money" /> {user?.earned.toFixed(0) || 0}</p>
                                </div>
                                <div className='leading-4 md:leading-5 mx-1'>
                                    <p className='text-[12px] sm:text-[16px] text-[#1E1E1E] font-medium saira text-center '>Points:</p>
                                    <p className='text-[12px] sm:text-[16px] text-[#1E1E1E] font-bold saira text-center flex justify-center'>
                                        <img className='w-[21px] h-[21px] mr-[5px]' src={refferals} alt="refferals" /> {user && user.points ? user?.points : 0}
                                    </p>

                                </div>
                                <div className=' leading-4 md:leading-5 mx-1'>
                                    <p className='text-[12px] sm:text-[16px] text-[#1E1E1E] font-medium saira text-center '>Vegas Tickets:</p>
                                    <p className='text-[12px] sm:text-[16px] text-[#1E1E1E] font-bold saira text-center flex justify-center'><img className='w-[21px] h-[21px] mr-[5px]' src={joker} alt="joker" /> {user?.raffle_tickets || 0}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img onClick={e => {
                        setTourModal(true)
                        setVisitedTour(true)
                    }} className={`w-[44px] sm:w-[50px] h-[44px] sm:h-[50px] cursor-pointer ${!visitedTour && 'animated-image'}`} src={weekendCoin} alt="weekendCoin" />
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu
