import React, { useEffect, useState } from 'react'
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import newlogoCyber from '../../images/NewDesign/newLogo_main.png'
import girlOK from '../../images/CyberSaysPage/girl_OK.png'
import imLiveLogo from '../../images/CyberSaysPage/imLiveLogo.png'
import TimeCounter from '../../Components/TimeCounter'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useDesign } from '../../Helpers/Design/DesignContext'
import doubleIcon from '../../images/NewDesign/doubleIcon.svg'
import arrowTextLeft from '../../images/NewDesign/arrowTextLeft.png'
import arrowTextRight from '../../images/NewDesign/arrowTextRight.png'
import { useLanguage } from '../../Helpers/Languages/LanguageContext'
import mixpanel from 'mixpanel-browser'
import moengage from '@moengage/web-sdk';


function Homepage({ user, imLiveURL, languageData, scrollToPage }) {
    let swiperRef;
    const dataTitle = [
        {
            desc: languageData?.homepageTitle1,
        },
        {
            desc: languageData?.homepageTitle2,
        },
        {
            desc: languageData?.homepageTitle3,
        }
    ]

    const { language } = useLanguage()

    const { design } = useDesign()

    const [lastTask, setLastTask] = useState(0)

    const getButtonMarkup = (task) => {
        switch (task) {
            case 0:
            case null:
            case undefined:
                return <button onClick={e => scrollToPage(1)} className={`w-full md:w-[480px]   border-[#FFED63]  text-black text-[18px] saira font-semibold flex justify-center items-center ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn1}<img className='ml-1' src={doubleIcon} alt="doubleIcon" /></button>
            case 1: return <button onClick={e => scrollToPage(1)} className={`w-full md:w-[480px]  bg-white   border-[#FFED63]  text-black text-[18px] saira font-semibold flex justify-center items-center  ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-2 py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn2}<img className='ml-1' src={doubleIcon} alt="doubleIcon" /></button>
            case 2: return <button onClick={e => scrollToPage(1)} className={`w-full  md:w-[480px] bg-white   border-[#FFED63]  text-black text-[14px] lg:text-[18px] saira font-semibold flex justify-center items-center  ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-2 py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn3}</button>
            case 3: return <button onClick={e => scrollToPage(1)} className={`w-full md:w-[480px] bg-white   border-[#FFED63]  text-black text-[18px] saira font-semibold flex justify-center items-center ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-2 py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn4}<img className='ml-1' src={doubleIcon} alt="doubleIcon" /></button>
        }
    }

    useEffect(() => {
        if (user === null) return setLastTask(0)

        let tasks = JSON.parse(user?.completed_tasks)
        if (tasks === null) return setLastTask(0)
        let lastTask = tasks[tasks.length - 1]
        setLastTask(lastTask)
    }, [user])


    return (
        <div className={` w-screen h-screen ${design === '0' ? 'bg-[url(./images/CyberSaysPage/mobile-bg-homepage.jpg)] md:bg-[url(./images/CyberSaysPage/bg-homepage.jpg)]' : ' bg-[#200527]'}  bg-cover bg-no-repeat bg-center relative z-10 mac-center:flex`}>
            <div className='pt-[57px]  md:pt-[80px] mac-center:!pt-0 px-4 pb-12 max-w-[1170px] m-auto'>
                <div className='max-w-[300px] m-auto'>

                    <p className=' text-[18px] md:text-[32px] font-semibold'></p>
                </div>
                <img className='se:w-[170px]  w-[170px] iphone:w-[240px] mac2:w-[170px] md:w-[320px] m-auto se:mb-[0px] iphone:mb-[-10px]  relative z-50' src={design === '0' ? logoCyber : newlogoCyber} alt="logoCyber" />
                <div>
                    <div className='lg:flex justify-between items-end md:items-center mt-0 homepageSE iphone:mt-[30px] contentHomepage md:mt-[70px]'>
                        <div className='w-full lg:hidden flex mb-2 items-center'>
                            <div className='buttonPrevText w-[60px]' onClick={e => {
                                mixpanel.track('arrow_text_click', {
                                    distinct_id: user?.id,
                                    is_referred: user?.referral_id ? 'Yes' : 'No',
                                    language: language,
                                    vegas_tickets: user?.raffle_tickets,
                                    points: user?.points,
                                    user_id: user?.id,
                                    USD_earned: user?.allTimeEarned,
                                    
                                    number_referrals: user?.referral_id ? user?.referral_id.length : 0,
                                })
                                moengage.track_event('arrow_text_click', {
                                    distinct_id: user?.id,
                                    is_referred: user?.referral_id ? 'Yes' : 'No',
                                    language: language,
                                    vegas_tickets: user?.raffle_tickets,
                                    points: user?.points,
                                    user_id: user?.id,
                                    USD_earned: user?.allTimeEarned,
                                    language: language,
                                    number_referrals: user?.referral_id ? user?.referral_id.length : 0,
                                })
                            }}>
                                <svg className=' w-[20px] cursor-pointer  mr-[10px]' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M22.6665 29.3333L9.33326 16L22.6665 2.66676" stroke="url(#paint0_linear_518_191)" stroke-width="2.66665" stroke-linecap="round" stroke-linejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_518_191" x1="15.9999" y1="29.3333" x2="15.9999" y2="2.66676" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FAD604" />
                                            <stop offset="1" stop-color="#FE804D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                navigation={{
                                    prevEl: '.buttonPrevText',
                                    nextEl: '.buttonNextText',
                                }}
                                loop={true}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    }
                                }}
                            >
                                {
                                    dataTitle.map((item, index) => (
                                        <SwiperSlide key={item}>
                                            <p className='se:text-[16px] iphone:text-[18px] iphone:my-3 font-semibold'>{item.desc}</p>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                            <div className='buttonNextText w-[60px]' onClick={e => {
                                mixpanel.track('arrow_text_click', {
                                    distinct_id: user?.id,
                                    is_referred: user?.referral_id ? 'Yes' : 'No',
                                    language: language,
                                    vegas_tickets: user?.raffle_tickets,
                                    points: user?.points,
                                    user_id: user?.id,
                                    USD_earned: user?.allTimeEarned,
                                
                                    number_referrals: user?.referral_id ? user?.referral_id.length : 0,
                                })
                                moengage.track_event('arrow_text_click', {
                                    distinct_id: user?.id,
                                    is_referred: user?.referral_id ? 'Yes' : 'No',
                                    language: language,
                                    vegas_tickets: user?.raffle_tickets,
                                    points: user?.points,
                                    user_id: user?.id,
                                    USD_earned: user?.allTimeEarned,
                                    language: language,
                                    number_referrals: user?.referral_id ? user?.referral_id.length : 0,
                                })
                            }}>
                                <svg className=' w-[20px] cursor-pointer ml-[20px]' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M9.3335 2.66675L22.6667 16L9.33349 29.3332" stroke="url(#paint0_linear_518_196)" stroke-width="2.66665" stroke-linecap="round" stroke-linejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_518_196" x1="16.0001" y1="2.66675" x2="16.0001" y2="29.3332" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FAD604" />
                                            <stop offset="1" stop-color="#FE804D" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className={`relative ${design === '0' ? ' border-[#FFD700]' : '  border-[#A2DBF0] homepageMainBlock'} rounded-[16px] border-2 px-1 pb-1 pt-8  m-auto lg:m-[unset]`}>
                            <div className='flex items-center '>
                                <img className={`  ${design === '0' ? 'mt-[-30px] w-[180px] sm:w-[200px] md:w-[240px]' : 'mt-[-30px] md:mt-0 w-[380px] md:w-[470px]'}`} src={design === '0' ? girlOK : require('../../images/NewDesign/Homepage//message.png')} alt="girlOK" />
                                <Link to={imLiveURL} target='_blank'><img className={`w-[160px] md:w-[240px] md:mt-5 mac:!mt-6 mb-10 ${design === '0' ? 'block' : 'hidden'}`} src={imLiveLogo} alt="imLiveLogo" /></Link>
                                <p className={`text-[22px] lg:text-[34px] saira font-medium w-[165px] lg:w-[240px] leading-6 lg:leading-10 absolute right-[30px] lg:right-[40px] lg:mt-6 gradient-linkDouble ${design === '0' ? 'hidden' : 'block'}`}>{languageData?.homepageMessageTitle}</p>
                            </div>
                            <div className=' relative '>
                                {
                                    getButtonMarkup(lastTask)
                                }
                            </div>
                        </div>
                        <div className='ml-1 md:ml-10 w-[200px] sm:w-[unset] mb-4 md:mb-[unset]'>
                            <div className='max-w-[300px] md:max-w-[580px] w-full hidden lg:flex items-center'>
                                <div className='buttonPrev2 cursor-pointer mr-[20px]'>
                                    <img className='w-[100px] h-[32px]' src={arrowTextLeft} alt="arrowTextLeft" />
                                </div>

                                <Swiper
                                    modules={[Navigation, Autoplay]}

                                    navigation={{
                                        prevEl: '.buttonPrev2',
                                        nextEl: '.buttonNext2',
                                    }}
                                    loop={true}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                        }
                                    }}
                                >
                                    {
                                        dataTitle.map((item, index) => (
                                            <SwiperSlide key={item}>
                                                <p className='text-[16px] md:text-[32px] font-semibold lg:leading-9'>{item.desc}</p>
                                            </SwiperSlide>
                                        ))
                                    }

                                </Swiper>
                                <div className='buttonNext2 cursor-pointer ml-[20px]'>
                                    <img className='w-[100px] h-[32px]' src={arrowTextRight} alt="arrowTextRight" />
                                </div>


                            </div>

                            {/*
                        <div className='md:block hidden mt-[100px] mac:mt-[150px]'>
                            <TimeCounter title={languageData?.timeCounterTitle2} languageData={languageData} block={'hidden'}  />
                        </div>
                        */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex absolute se:bottom-[130px] iphone:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] justify-center w-full  m-auto left-1/2 transform -translate-x-1/2 '>
                <TimeCounter title={languageData?.timeCounterTitle} left={'m-auto'} leftTitle={'text-center'} languageData={languageData} block={'hidden'} />
            </div>
        </div>
    )
}

export default Homepage
