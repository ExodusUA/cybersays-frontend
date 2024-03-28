import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import LanguageSlide from "../../Components/HomepageSlide";
import slides from "../../Helpers/images.json";
import left from "../../images/landing/left.png";
import right from "../../images/landing/right.png";

function Slider({ onSlideChange, setCurrentSlide, currentSlide, setSwiperRef, swiperRef }) {
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

  return (
    <div className="relative lg:w-[100%] ">
      <Swiper
        className="h-[30vh] md:h-[45vh] lg:h-full"
        onSwiper={(swiper) => setSwiperRef(swiper)}
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        onSlideChange={onSlideChange}
        navigation={{
          prevEl: ".buttonPrev",
          nextEl: ".buttonNext",
        }}
      >
        <SwiperSlide>
          <LanguageSlide data={slides.slide1} screenWidth={screenWidth} />
        </SwiperSlide>
        <SwiperSlide>
          <LanguageSlide data={slides.slide2} screenWidth={screenWidth} />
        </SwiperSlide>
        <SwiperSlide>
          <LanguageSlide data={slides.slide4} screenWidth={screenWidth} />
        </SwiperSlide>
        <SwiperSlide>
          <LanguageSlide data={slides.slide3} screenWidth={screenWidth} />
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-8 z-[10] hidden w-full lg:bottom-2 lg:block">
        <div className="mb-[40px] flex justify-between lg:mb-2 lg:justify-center">
          <img className="buttonPrev w-[60px] cursor-pointer lg:w-[84px] " src={left} alt="Left" onClick={(e) => swiperRef?.slidePrev()} />
          <img className="buttonNext w-[60px] cursor-pointer lg:w-[84px] " src={right} alt="Right" onClick={(e) => swiperRef?.slideNext()} />
        </div>
      </div>
      <img className="buttonPrev absolute left-0 top-[100px] z-10 block w-[60px] cursor-pointer lg:hidden lg:w-[84px]" src={left} alt="Left" onClick={(e) => swiperRef?.slidePrev()} />
      <img className="buttonNext absolute right-0 top-[100px] z-10 block w-[60px] cursor-pointer lg:hidden lg:w-[84px]" src={right} alt="Right" onClick={(e) => swiperRef?.slideNext()} />
    </div>
  );
}

export default Slider;
