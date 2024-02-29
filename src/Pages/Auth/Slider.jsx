import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import LanguageSlide from '../../Components/HomepageSlide';
import slides from '../../Helpers/images.json';
import left from '../../images/landing/left.png';
import right from '../../images/landing/right.png';

function Slider({ onSlideChange, swiperRef }) {


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className='lg:w-[550px] h-[550px] lg:block hidden relative'>
            <Swiper
                className='h-[30vh] md:h-[550px] lg:h-full'
                ref={swiperRef}
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

        </div>
    );
}

export default Slider;
