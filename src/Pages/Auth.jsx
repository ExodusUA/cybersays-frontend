import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import 'swiper/css';
import 'swiper/css/navigation';
import Language from '../Components/Language/Language';
import 'swiper/css';
import 'swiper/css/navigation';
import Slider from './Auth/Slider';
import LoginForm from './Auth/LoginForm';
import logoCyber from '../images/logoLogin.png';


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
                

                <div className='lg:flex h-full'>

                    <Slider onSlideChange={slideChange} />
                    <div className='absolute right-0 lg:right-[20px] top-5 flex items-center align-start z-20'>
                                <Language />
                            </div>
                    <div className='w-full text-center bg-dark lg:w-[620px] h-full lg:absolute lg:left-10 top-10'>
                        <div className='w-[90%] lg:w-[640px] m-auto lg:relative z-10'>

                            

                            <div className='pt-[1px] iphone:pt-[10px]  w-full relative z-[10] lg:border-2 lg:p-10 lg:bg-[#0D0D0D73] bg-opacity-20 rounded-[32px] border-[#DDBBFD]'>
                                <div className=' lg:max-w-[600px] '>
                                    <img className='w-[130px]  lg:w-[250px] m-auto mt-[-30px] lg:mt-0' src={logoCyber} alt="Logotype" />
                                    <p className='w-full lg:w-[100%] text-center lg:text-left text-[24px] leading-7 font-bold lg:text-[30px] text-white lg:leading-9 pb-2 se:mt-[0px] '>
                                        {currentSlide === 0 && (
                                            <>
                                                {languageData?.authSlide1}

                                                <div className=' leading-6 mt-2'>
                                                    <p className='text-[12px] font-bold'>{languageData?.authSlide1li1}</p>

                                                    <p className='text-[12px] font-bold'>{languageData?.authSlide1li2}</p>

                                                    <p className='text-[12px] font-bold'>{languageData?.authSlide1li3}</p>
                                                </div>
                                            </>
                                        )}
                                        {currentSlide === 1 && (
                                            <>
                                                {languageData?.authSlide2}

                                                <div className=' leading-6 mt-2'>
                                                    <p className='text-[12px] font-bold'>{languageData?.authSlide2li1}</p>
                                                </div>
                                            </>
                                        )}
                                        {currentSlide === 2 && (
                                            <>
                                                {languageData?.authSlide3}

                                                <div className=' leading-6 mt-2'>
                                                    <p className='text-[12px] font-bold'>{languageData?.authSlide3li1}</p>
                                                </div>
                                            </>
                                        )}
                                        {currentSlide === 3 && (
                                            <>
                                                {languageData?.authSlide4}

                                                <div className=' leading-6 mt-2'>
                                                    <p className='text-[12px] font-bold'>{languageData?.authSlide4li1}</p>
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

               
            </section>
        </>

    )
}

export default Auth