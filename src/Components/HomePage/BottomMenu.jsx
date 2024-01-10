import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import left from '../../images/CyberSaysPage/leftBtnMenu.png'
import right from '../../images/CyberSaysPage/rightBtnMenu.png'
import link1 from '../../images/CyberSaysPage/iconHomepage.png'
import link2 from '../../images/CyberSaysPage/iconRaffle.png'
import link3 from '../../images/CyberSaysPage/iconDouble.png'
import link4 from '../../images/CyberSaysPage/iconRefferals.png'
import link5 from '../../images/CyberSaysPage/iconTicket.png'

function BottomMenu({ setActivePageIndex, activePageIndex }) {

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
        if (activePageIndex === 0) return
        setActivePageIndex(activePageIndex - 1)
    }

    function swipeRight() {
        if (activePageIndex === 4) return
        setActivePageIndex(activePageIndex + 1)
    }

    return (
        <div className='flex justify-center'>
            <div className=' fixed bottom-0 z-50 w-[375px] md:w-[500px]'>
                <div className=' w-full bottom-10 '>
                    <div className='justify-between flex mx-5 mb-[-40px] relative z-40'>
                        <img className='w-[24px] lg:w-[32px] cursor-pointer buttonPrev' src={left} alt="Left" onClick={e => {
                            swiper.slidePrev()
                            swipeLeft()
                        }} />
                        <img className='w-[24px] lg:w-[32px] cursor-pointer buttonNext' src={right} alt="Right" onClick={e => {
                            swiper.slideNext()
                            swipeRight()
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
                            <div className={`text-black relative text-center duration-200 flex justify-center ${currentSlide === 0 ? 'top-0' : 'top-8 md:top-[70px]'}`}>
                                <div>
                                    <img className='w-[32px] h-[32px] md:w-[48px] md:h-[48px] m-auto' src={link1} alt="link1" />
                                    <p className='saira text-[12px] md:text-[16px] font-semibold md:mt-2'>Homepage</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`text-black relative text-center duration-200 flex justify-center  ${currentSlide === 1 ? 'top-0' : 'top-8 md:top-[70px]'}`}>
                                <div>
                                    <img className='w-[32px] h-[32px] md:w-[48px] md:h-[42px] m-auto' src={link5} alt="link5" />
                                    <p className='saira text-[12px] md:text-[16px] font-semibold md:mt-2'>Raffle tickets</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`text-black relative text-center duration-200 flex justify-center  m-auto  ${currentSlide === 2 ? 'top-0' : 'top-8 md:top-[70px]'}`}>
                                <div>
                                    <img className='w-[32px] h-[32px] md:w-[48px] md:h-[48px] m-auto' src={link3} alt="link3" />
                                    <p className='saira text-[12px] md:text-[16px] font-semibold md:mt-2 '>Double your money</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`text-black relative text-center duration-200 flex justify-center ${currentSlide === 3 ? 'top-0' : 'top-8 md:top-[70px]'}`}>
                                <div>
                                    <img className='w-[32px] h-[32px] md:w-[48px] md:h-[48px] m-auto' src={link4} alt="link4" />
                                    <p className='saira text-[12px] md:text-[16px] font-semibold md:mt-2'>My referrals</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={`text-black relative text-center duration-200 flex justify-center  ${currentSlide === 4 ? 'top-0' : 'top-8 md:top-[70px]'}`}>
                                <div>
                                    <img className='w-[32px] h-[32px] md:w-[48px] md:h-[48px] m-auto' src={link2} alt="link2" />
                                    <p className='saira text-[12px] md:text-[16px] font-semibold md:mt-2'>Competition</p>
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

export default BottomMenu