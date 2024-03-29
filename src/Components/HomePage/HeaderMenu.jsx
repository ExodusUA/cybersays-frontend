import React, { useEffect, useState } from 'react'
import btnMenu from '../../images/CyberSaysPage/openMenu.png'
import money from '../../images/CyberSaysPage/headerMoney.png'
import refferals from '../../images/CyberSaysPage/headerRefferals.png'
import joker from '../../images/CyberSaysPage/headerJoker.png'
import { useDesign } from '../../Helpers/Design/DesignContext'
import mixpanel from 'mixpanel-browser'
import { useLanguage } from '../../Helpers/Languages/LanguageContext'
import moengage from '@moengage/web-sdk';

function HeaderMenu({ setMenuOpen, user, setTourModal, languageData, userCountry, setEarnedModal, setTicketShortModal, setPointsModal }) {

    const { design } = useDesign()
    const { language } = useLanguage()

    useEffect(() => {
        console.log(user)
    }, [user])


    const [visitedTour, setVisitedTour] = useState(localStorage.getItem('visitedTour') || false)

    const handleEvents = (event) => {
        mixpanel.track(event, {
            distinct_id: user?.id,
            is_referred: user?.referral_id ? 'Yes' : 'No',
            language: language,
            vegas_tickets: user?.raffle_tickets,
            points: user?.points,
            user_id: user?.id,
            USD_earned: user?.allTimeEarned,
          
            number_referrals: user?.referral_id ? user?.referral_id.length : 0,
        })
        moengage.track_event(event, {
            distinct_id: user?.id,
            is_referred: user?.referral_id ? 'Yes' : 'No',
            language: language,
            vegas_tickets: user?.raffle_tickets,
            points: user?.points,
            user_id: user?.id,
            USD_earned: user?.allTimeEarned,
            number_referrals: user?.referral_id ? user?.referral_id.length : 0,
        })

    }

    return (
        <div className='flex justify-center' >
            <div className=' fixed top-0 md:top-3 z-50 p-2  px-4 w-full max-w-[1170px] m-auto'>
                <div className=' flex items-center justify-between'>
                    <img onClick={() => setMenuOpen(true)} className='w-[24px] sm:w-[32px] h-[24px] sm:h-[32px] cursor-pointer' src={design === '0' ? btnMenu : require('../../images/NewDesign/Homepage/menuToggle.png')} alt="btnMenu" />
                    <div className={`bg-[#EAEAEA] w-[85%] lg:w-[unset]  border-[2px]  backdrop-blur-lg rounded-[50px] mr-4 lg:mr-0 ${design === '0' ? 'bg-opacity-20  border-[#FFED63]' : 'bg-opacity-30 border-[#A2DBF0]'}`}>
                        <div className=''>
                            <div className='xl:gap-4 flex px-2 sm:px-4 py-[4px] sm:py-[5px] justify-between '>
                                <div onClick={e => {
                                    setEarnedModal(true)
                                    handleEvents('usd_earned_click')
                                }} className=' leading-4 md:leading-5 mx-1 cursor-pointer'>
                                    <p className={`text-[11px] sm:text-[16px] ${language !== "en" && "text-[9px]"}  ${design === '0' ? 'text-[#1E1E1E]' : 'text-white'} font-medium saira text-center `}>{userCountry === 'BR' || userCountry === 'UA' ? 'R$' : 'USD'} {languageData?.header1}</p>
                                    <p className={`text-[11px] sm:text-[16px] ${language !== "en" && "text-[10px]"} ${design === '0' ? 'text-[#1E1E1E]' : 'text-white'} font-bold saira text-center flex justify-center items-center`}><img className='w-[16px] h-[16px] mr-[5px]' src={design === '0' ? money : require('../../images/NewDesign/header/dollar.png')} alt="money" />
                                        {
                                            userCountry === 'BR' || userCountry === 'UA'
                                                ? user?.earned.toFixed(0) * 5 || 0
                                                : user?.earned.toFixed(0) || 0
                                        }
                                    </p>
                                </div>
                                <div onClick={e => {
                                    setTicketShortModal(true)
                                    handleEvents('vegas_tickets')
                                }} className=' leading-4 md:leading-5 mx-1 cursor-pointer'>
                                    <p className={`text-[11px] sm:text-[16px] ${language !== "en" && "text-[9px]"} ${design === '0' ? 'text-[#1E1E1E]' : 'text-white'} font-medium saira text-center `}>{languageData?.header3}</p>
                                    <p className={`text-[11px] sm:text-[16px] ${language !== "en" && "text-[10px]"} ${design === '0' ? 'text-[#1E1E1E]' : 'text-white'} font-bold saira text-center flex justify-center items-center`}><img className='w-[16px] h-[16px] mr-[5px]' src={design === '0' ? joker : require('../../images/NewDesign/header/ticket.png')} alt="joker" /> {user?.raffle_tickets || 0}</p>
                                </div>
                                <div onClick={e => {
                                    setPointsModal(true)
                                    handleEvents('competition_points')
                                }} className='leading-4 md:leading-5 mx-1 cursor-pointer'>
                                    <p className={`text-[11px] sm:text-[16px] ${language !== "en" && "text-[9px]"} ${design === '0' ? 'text-[#1E1E1E]' : 'text-white'} font-medium saira text-center `}>{languageData?.header2}</p>
                                    <p className={`text-[11px] sm:text-[16px] ${language !== "en" && "text-[10px]"} ${design === '0' ? 'text-[#1E1E1E]' : 'text-white'} font-bold saira text-center flex justify-center items-center`}>
                                        <img className='w-[16px] h-[16px] mr-[5px]' src={design === '0' ? refferals : require('../../images/NewDesign/header/points.png')} alt="refferals" /> {user && user.points ? user.points === '0.0' ? 0 : Number(user?.points).toFixed(1) : 0}
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='w-[44px] sm:w-[50px] h-[44px] sm:h-[50px] hidden lg:block'></div>
                    {/*
                    <img onClick={e => {
                        setTourModal(true)
                        setVisitedTour(true)
                    }} className={`w-[44px] sm:w-[50px] h-[44px] sm:h-[50px] cursor-pointer ${!visitedTour && 'animated-image'}`} src={design === '0' ? weekendCoin : require('../../images/NewDesign/header/cup.png')} alt="weekendCoin" />
                    */}
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu
