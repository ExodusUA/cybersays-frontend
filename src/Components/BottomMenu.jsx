import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import left from '../images/CyberSaysPage/leftBtnMenu.png'
import right from '../images/CyberSaysPage/rightBtnMenu.png'
import link1 from '../images/CyberSaysPage/iconHomepage.png'
import link2 from '../images/CyberSaysPage/iconRaffle.png'
import link3 from '../images/CyberSaysPage/iconDouble.png'
import link4 from '../images/CyberSaysPage/iconRefferals.png'

function BottomMenu() {

    let swiperRef;

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

    const slideChange = (swiper) => {
        console.log(swiper)
        setCurrentSlide(swiper.realIndex);
    };

    return (
        <div className='flex justify-center'>
            <div className=' fixed bottom-0 z-50 w-[375px]'>
                <div className=' w-full bottom-10 '>
                    <div className='justify-between flex mx-5 mb-[-40px] relative z-40'>
                        <img className='w-[24px] lg:w-[64px] cursor-pointer buttonPrev' src={left} alt="Left" onClick={e => swiperRef?.slidePrev()} />
                        <img className='w-[24px] lg:w-[64px] cursor-pointer buttonNext' src={right} alt="Right" onClick={e => swiperRef?.slideNext()} />
                    </div>
                </div>
                <Swiper
                    className='w-[335px] relative z-10 '
                    onSwiper={(swiper) => {
                        swiperRef = swiper;
                    }}
                    modules={[Navigation]}
                    spaceBetween={0}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    onSlideChange={(swiper) => slideChange(swiper)}
                    navigation={{
                        prevEl: '.buttonPrev',
                        nextEl: '.buttonNext',
                    }}
                >
                    <SwiperSlide>
                        <div className={`text-black relative text-center duration-200 flex justify-center ${currentSlide === 0 ? 'top-0' : 'top-8'}`}>
                            <div>
                                <img className='w-[32px] h-[32px] m-auto' src={link1} alt="link1" />
                                <p className='saira text-[12px] font-semibold'>Homepage</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`text-black relative text-center duration-200 flex justify-center  ${currentSlide === 1 ? 'top-0' : 'top-8'}`}>
                            <div>
                                <img className='w-[32px] h-[32px] m-auto' src={link2} alt="link2" />
                                <p className='saira text-[12px] font-semibold'>Raffle tickets</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`text-black relative text-center duration-200 flex justify-center  ${currentSlide === 2 ? 'top-0' : 'top-8'}`}>
                            <div>
                                <img className='w-[32px] h-[32px] m-auto' src={link3} alt="link3" />
                                <p className='saira text-[12px] font-semibold'>Double your money</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`text-black relative text-center duration-200 flex justify-center ${currentSlide === 3 ? 'top-0' : 'top-8'}`}>
                            <div>
                                <img className='w-[32px] h-[32px] m-auto' src={link4} alt="link4" />
                                <p className='saira text-[12px] font-semibold'>My referrals</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>



            </div>
        </div>
    )
}

export default BottomMenu