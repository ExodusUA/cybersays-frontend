import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import LanguageSlide from '../../Components/HomepageSlide';
import slides from '../../Helpers/images.json'
import left from '../../images/landing/left.png'
import right from '../../images/landing/right.png'


function Slider({ onSlideChange }) {
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

    console.log(onSlideChange)

    return (
        <div className='lg:w-[45%] relative se:hidden iphone:block'>

            <Swiper


                className='h-[30vh] md:h-[45vh] lg:h-full'
                onSwiper={(swiper) => {
                    swiperRef = swiper;
                }}
            
                
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 4000 }}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                onSlideChange={(swiper) => onSlideChange(swiper)}
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

            <div className='absolute w-full bottom-10 z-[10]'>
                <div className='mb-6 justify-center flex'>
                    <img className='w-[40px] lg:w-[64px] cursor-pointer buttonPrev' src={left} alt="Left" onClick={e => swiperRef?.slidePrev()} />
                    <img className='w-[40px] lg:w-[64px] cursor-pointer buttonNext' src={right} alt="Right" onClick={e => swiperRef?.slideNext()} />
                </div>
            </div>
        </div>
    )
}

export default Slider