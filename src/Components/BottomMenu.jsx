import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import left from '../images/landing/left.png'
import right from '../images/landing/right.png'

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
        <div className='relative'>

            <Swiper
                className='h-[40vh] md:h-[45vh] lg:h-full'
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
                    <p className={`text-black relative text-center duration-200 ${currentSlide === 0 ? 'top-0' : 'top-4'}`}>Меню 1</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className={`text-black relative text-center duration-200 ${currentSlide === 1 ? 'top-0' : 'top-4'}`}>Меню 2</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className={`text-black relative text-center duration-200 ${currentSlide === 2 ? 'top-0' : 'top-4'}`}>Меню 3</p>
                </SwiperSlide>
                <SwiperSlide>
                    <p className={`text-black relative text-center duration-200 ${currentSlide === 3 ? 'top-0' : 'top-4'}`}>Меню 4</p>
                </SwiperSlide>

            </Swiper>

            <div className='absolute w-full bottom-10 z-[10]'>
                <div className='mb-6 justify-center flex'>
                    <img className='w-[40px] lg:w-[64px] cursor-pointer buttonPrev' src={left} alt="Left" onClick={e => swiperRef?.slidePrev()} />
                    <img className='w-[40px] lg:w-[64px] cursor-pointer buttonNext' src={right} alt="Right" onClick={e => swiperRef?.slideNext()} />
                </div>
            </div>

        </div>
    )
}

export default BottomMenu