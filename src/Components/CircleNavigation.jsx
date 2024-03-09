import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import left from '../images/CyberSaysPage/leftBtnMenu.png'
import right from '../images/CyberSaysPage/rightBtnMenu.png'
import link1 from '../images/CyberSaysPage/iconHomepage.png'
import link2 from '../images/CyberSaysPage/iconRaffle.png'
import link3 from '../images/CyberSaysPage/iconDouble.png'
import link4 from '../images/CyberSaysPage/iconRefferals.png'
import link5 from '../images/CyberSaysPage/iconTicket.png'
import { useDesign } from '../Helpers/Design/DesignContext'
import mixpanel from 'mixpanel-browser'
import { useLanguage } from '../Helpers/Languages/LanguageContext';
import moengage from '@moengage/web-sdk';

function CircleNavigation({ setActivePageIndex, activePageIndex, languageData, user }) {

    const { design } = useDesign()
    const {language} = useLanguage()

    let [swiper, setSwiper] = useState(null);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [screenWidth]);

    const [currentSlide, setCurrentSlide] = useState(0);

    function slideChange(swiper) {
        setCurrentSlide(swiper.realIndex)
        // setActivePageIndex(swiper.realIndex)
    }

    useEffect(() => {
        if (swiper) {
            swiper.slideTo(activePageIndex);
        }
    }, [activePageIndex])

    function swipeLeft() {
        if (activePageIndex === 0) return setActivePageIndex(4)
        setActivePageIndex(activePageIndex - 1)
    }

    function swipeRight() {
        if (activePageIndex === 4) return setActivePageIndex(0)
        setActivePageIndex(activePageIndex + 1)
    }

    const handleEvents = () => {
        mixpanel.track('arrow_Page_click', {
            distinct_id: user?.id,
            is_referred: user?.referral_id ? 'Yes' : 'No',
            language: language,
            vegas_tickets: user?.raffle_tickets,
            points: user?.points,
            user_id: user?.id,
            USD_earned: user?.allTimeEarned,
            number_referrals: user?.referral_id ? user?.referral_id.length : 0,
        })

        moengage.track_event('arrow_Page_click', {
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
        <div className='flex justify-center'>
            <div className=' fixed bottom-0 z-50 w-[375px] md:w-[500px]'>
                <div className=' w-full bottom-10 '>
                    <div className='justify-between flex mx-9 mb-[-30px] relative z-40'>
                        <img className='w-[16px] h-[16px] md:w-[32px] md:h-[32px] cursor-pointer buttonPrev' src={left} alt="Left" onClick={e => {
                            swiper.slidePrev()
                            swipeLeft()
                            handleEvents()
                        }} />
                        <img className='w-[16px] h-[16px] md:w-[32px] md:h-[32px] cursor-pointer buttonNext' src={right} alt="Right" onClick={e => {
                            swiper.slideNext()
                            swipeRight()
                            handleEvents()
                        }} />
                    </div>
                </div>

                <Swiper
                    className='w-[335px] md:w-[500px] md:!pb-[20px] relative z-10 '
                    initialSlide={activePageIndex}
                    onSwiper={(swiper) => {
                        setSwiper(swiper)
                    }}
                    modules={[Navigation]}
                    spaceBetween={0}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={false}
                    onSlideChange={(swiper) => slideChange(swiper)}
                    navigation={{
                        prevEl: '.buttonPrev',
                        nextEl: '.buttonNext',
                    }}
                >
                    <SwiperSlide>
                        <div className={`text-black relative text-center duration-200 flex justify-center ${currentSlide === 0 ? 'top-0' : 'top-8 md:top-[60px]'}`}>
                            <div>
                                <img className={`w-[32px] h-[32px] md:w-[48px] md:h-[48px] m-auto ${design === '0' ? '' : currentSlide === 0 ? 'border-[2px] border-[#FDA52F] rounded-full' : 'border-[2px] border-[#A2DBF0] rounded-full'}  `} src={design === '0' ? link1 : require('../images/NewDesign/circleMenu/page1.png')} alt="link1" />
                                <p className='saira text-[12px] md:text-[16px] font-semibold md:mt-2'>{languageData?.NamePage1}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`text-black relative text-center duration-200 flex justify-center  m-auto  ${currentSlide === 1 ? 'top-0' : 'top-8 md:top-[60px]'}`}>
                            <div>
                                <img className={`w-[32px] h-[32px] md:w-[48px] md:h-[48px] m-auto ${design === '0' ? '' : currentSlide === 1 ? 'border-[2px] border-[#FDA52F] rounded-full' : 'border-[2px] border-[#A2DBF0] rounded-full'}`} src={design === '0' ? link3 : require('../images/NewDesign/circleMenu/page3.png')} alt="link3" />
                                <p className='saira text-[12px] md:text-[16px] font-semibold md:mt-2 '>{languageData?.NamePage2}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`text-black relative text-center duration-200 flex justify-center  ${currentSlide === 2 ? 'top-0' : 'top-8 md:top-[60px]'}`}>
                            <div>
                                <img className={`w-[32px] h-[32px] md:w-[48px] ${design === '0' ? 'md:h-[42px]' : 'md:h-[48px]'}  m-auto ${design === '0' ? '' : currentSlide === 2 ? 'border-[2px] border-[#FDA52F] rounded-full' : 'border-[2px] border-[#A2DBF0] rounded-full'}`} src={design === '0' ? link5 : require('../images/NewDesign/circleMenu/page2.png')} alt="link5" />
                                <p className='saira text-[12px] md:text-[16px] font-semibold md:mt-2'>{languageData?.NamePage3}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`text-black relative text-center duration-200 flex justify-center  ${currentSlide === 3 ? 'top-0' : 'top-8 md:top-[60px]'}`}>
                            <div>
                                <img className={`w-[32px] h-[32px] md:w-[48px] md:h-[48px] m-auto ${design === '0' ? '' : currentSlide === 3 ? 'border-[2px] border-[#FDA52F] rounded-full' : 'border-[2px] border-[#A2DBF0] rounded-full'}`} src={design === '0' ? link2 : require('../images/NewDesign/circleMenu/page2.png')} alt="link2" />
                                <p className='saira text-[12px] md:text-[16px] font-semibold md:mt-2'>{languageData?.NamePage4}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`text-black relative text-center duration-200 flex justify-center ${currentSlide === 4 ? 'top-0' : 'top-8 md:top-[60px]'}`}>
                            <div>
                                <img className={`w-[32px] h-[32px] md:w-[48px]  md:h-[48px] m-auto ${design === '0' ? '' : currentSlide === 4 ? 'border-[2px] border-[#FDA52F] rounded-full' : 'border-[2px] border-[#A2DBF0] rounded-full'}`} src={design === '0' ? link4 : require('../images/NewDesign/circleMenu/page4.png')} alt="link4" />
                                <p className='saira text-[12px] md:text-[16px] font-semibold md:mt-2'>{languageData?.NamePage5}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
                <div className='w-[380px] h-[380px] md:w-[500px] md:h-[500px] rounded-full border-[2px] border-white absolute bottom-[-345px] md:bottom-[-425px]'>

                </div>
            </div>
        </div>
    )
}

export default CircleNavigation