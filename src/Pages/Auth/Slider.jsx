import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import LanguageSlide from '../../Components/HomepageSlide';
import slides from '../../Helpers/images.json'
import left from '../../images/landing/left.png'
import right from '../../images/landing/right.png'

function Slider({ onSlideChange, setCurrentSlide,currentSlide }) {
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
    console.log(currentSlide)
    return (
        <div className='lg:w-[100%] relative '>

            <Swiper
                className='h-[30vh] md:h-[45vh] lg:h-full'
                onSwiper={(swiper) => {
                    swiperRef = swiper;
                }}
                modules={[Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                onSlideChange={onSlideChange}
                navigation={{
                    prevEl: '.buttonPrev',
                    nextEl: '.buttonNext',
                }}
            >
                <SwiperSlide>
                    <LanguageSlide data={slides.slide1} screenWidth={screenWidth} />
                </SwiperSlide>
                <SwiperSlide>
                    <LanguageSlide data={slides.slide2} screenWidth={screenWidth} />
                </SwiperSlide>
                <SwiperSlide>
                    <LanguageSlide data={slides.slide3} screenWidth={screenWidth} />
                </SwiperSlide>
                <SwiperSlide>
                    <LanguageSlide data={slides.slide4} screenWidth={screenWidth} />
                </SwiperSlide>

            </Swiper>

            <div className='absolute w-full bottom-8 lg:bottom-2 z-[10] hidden lg:block'>
                <div className='mb-[40px] lg:mb-2 justify-between lg:justify-center flex'>
                    <img className='w-[60px] lg:w-[84px] cursor-pointer buttonPrev ' src={left} alt="Left" onClick={e => swiperRef?.slidePrev()} />
                    <img className='w-[60px] lg:w-[84px] cursor-pointer buttonNext ' src={right} alt="Right" onClick={e => swiperRef?.slideNext()} />
                </div>
            </div>
            <img className='w-[60px] lg:w-[84px] cursor-pointer buttonPrev absolute lg:hidden block left-0 top-[100px] z-10' src={left} alt="Left" onClick={e => swiperRef?.slidePrev()} />
            <img className='w-[60px] lg:w-[84px] cursor-pointer buttonNext absolute lg:hidden block right-0 top-[100px] z-10' src={right} alt="Right" onClick={e => swiperRef?.slideNext()} />
        </div>
    )
}

export default Slider