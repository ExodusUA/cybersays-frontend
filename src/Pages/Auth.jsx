import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import 'swiper/css';
import 'swiper/css/navigation';
import Language from '../Components/Language/Language'
import logotype from '../images/logotype.svg'
import 'swiper/css';
import 'swiper/css/navigation';
import Slider from './Auth/Slider';
import LoginForm from './Auth/LoginForm';
import logoCyber from '../images/CyberSaysPage/logoMain.png';


function Auth({ languageData }) {

    const params = new URLSearchParams(window.location.search);

    let referralID = params.get('ref');

    const [currentSlide, setCurrentSlide] = useState(0);

    const slideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex);
        console.log(swiper.realIndex)
    };


    return (
        <>
            <Helmet>
                <title>{languageData?.siteTitle}</title>
                <meta name="description"
                    content={languageData?.metaDescription} />
                <meta property="og:title" content={languageData?.siteTitle} />
                <meta property="og:description"
                    content={languageData?.metaDescription} />
            </Helmet>


            <section className='w-screen h-screen relative overflow-hidden'>
                <div className='w-[400px] h-[400px] absolute right-12 top-12 bg-[#0A4A48] blur-[100px]'></div>

                <div className='lg:flex h-full'>

                    <Slider onSlideChange={slideChange} />

                    <div className='w-full text-center bg-dark lg:w-[65%] 2xl:w-[65%] h-full'>
                        <div className='w-[90%] lg:w-[80%] m-auto lg:relative z-10'>

                            <div className='absolute right-0 top-5 flex items-center align-start z-20'>
                                <Language />
                            </div>

                            <div className='pt-[1px] iphone:pt-[10px] lg:pt-[15vh] w-full relative z-[10]'>
                                <div className=' lg:max-w-[800px] lg:mt-[60px]'>
                                    <img className='w-[180px]  lg:w-[500px]  lg:m-0 se:mt-[10px] iphone:mt-0' src={logoCyber} alt="Logotype" />
                                    <p className='w-full lg:w-[90%] text-left text-[24px] leading-7 font-bold lg:text-[30px] text-white lg:leading-9 pb-2  lg:py-8 lg:pt-6 se:mt-[0px] iphone:mt-2'>
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
                                    
                                </div>
                                <LoginForm languageData={languageData} referralID={referralID} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-[1000px] h-[1000px] absolute right-[-100px] bottom-[-700px] bg-[#530A59] blur-[100px] z-1 rounded-[1000px]'></div>
            </section>
        </>

    )
}

export default Auth