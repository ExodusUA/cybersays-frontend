import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import 'swiper/css';
import 'swiper/css/navigation';
import Language from '../Components/Language/Language';
import logotype from '../images/logotype.svg';
import 'swiper/css';
import 'swiper/css/navigation';
import Slider from './Auth/Slider copy';
import LoginForm from './Auth/LoginForm';
import logoCyber from '../images/CyberSaysPage/logoMain.png';
import left from '../images/landing/left.png';
import right from '../images/landing/right.png';

function Auth({ languageData }) {
    const swiperRef = useRef(null);
    const params = new URLSearchParams(window.location.search);
    let referralID = params.get('ref');
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex);
        console.log(swiper.realIndex);
    };

    return (
        <>
            <Helmet>
                <title>{languageData?.siteTitle}</title>
                <meta name="description" content={languageData?.metaDescription} />
                <meta property="og:title" content={languageData?.siteTitle} />
                <meta property="og:description" content={languageData?.metaDescription} />
            </Helmet>

            <section className='w-screen h-screen relative overflow-hidden'>
                <div className='w-[600px] h-[400px] absolute right-[50px] bottom-[-280px] bg-[#0A4A48] blur-[100px]'></div>

                <div className='lg:flex h-full'>
                    <div className='w-full text-center bg-[#161F34] h-full'>
                        <div className='w-[90%] lg:w-[1170px] m-auto lg:relative z-10'>
                            <div className='pt-[3vh] lg:pt-[5vh] w-full relative z-[10]'>
                                <div className='flex justify-between items-center'>
                                    <div className=' lg:max-w-[590px] m-auto'>
                                        <img className='w-[300px]  lg:w-[500px] iphone:m-auto lg:m-0' src={logoCyber} alt="Logotype" />
                                        <p className='w-full lg:w-[95%] text-center lg:text-left text-[24px] leading-7 font-bold lg:text-[30px] text-white lg:leading-9  py-4 lg:py-8 lg:pt-6'>
                                            {currentSlide === 0 && (
                                                <>
                                                    {languageData?.authSlide1}
                                                    
                                                    <div className=' leading-6 mt-2'>
                                                        <p className='text-[16px] font-bold'>{languageData?.authSlide1li1}</p>

                                                        <p className='text-[16px] font-bold'>{languageData?.authSlide1li2}</p>

                                                        <p className='text-[16px] font-bold'>{languageData?.authSlide1li3}</p>
                                                    </div>
                                                </>
                                            )}
                                            {currentSlide === 1 && (
                                                <>
                                                    {languageData?.authSlide2}
                                                    
                                                    <div className=' leading-6 mt-2'>
                                                        <p className='text-[16px] font-bold'>{languageData?.authSlide2li1}</p>
                                                    </div>
                                                </>
                                            )}
                                            {currentSlide === 2 && (
                                                <>
                                                    {languageData?.authSlide3}
                                                    
                                                    <div className=' leading-6 mt-2'>
                                                        <p className='text-[16px] font-bold'>{languageData?.authSlide3li1}</p>
                                                    </div>
                                                </>
                                            )}
                                            {currentSlide === 3 && (
                                                <>
                                                    {languageData?.authSlide4}
                                                    
                                                    <div className=' leading-6 mt-2'>
                                                        <p className='text-[16px] font-bold'>{languageData?.authSlide4li1}</p>
                                                    </div>
                                                </>
                                            )}
                                        
                                        </p>
                                        <div className=' w-full bottom-10 z-[10] flex justify-center lg:block'>
                                            <div className='mb-6 ml-[-20px] flex'>
                                                <img className='w-[40px] lg:w-[76px] cursor-pointer buttonPrev' src={left} alt="Left" />
                                                <img className='w-[40px] lg:w-[76px] cursor-pointer buttonNext' src={right} alt="Right"  />
                                            </div>
                                        </div>
                                    </div>
                                    <Slider swiperRef={swiperRef} onSlideChange={slideChange} />
                                </div>
                                <LoginForm languageData={languageData} referralID={referralID} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[1000px] h-[1000px] absolute left-[-300px] top-[-700px] bg-[#530A59] blur-[100px] z-1 rounded-[1000px]'></div>
            </section>
        </>
    )
}

export default Auth;
