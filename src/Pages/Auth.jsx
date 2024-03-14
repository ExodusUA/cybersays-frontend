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
import { useSwipeable } from 'react-swipeable';
import SocialLink from '../Components/SocialLink';
import { Link } from 'react-router-dom';


function Auth({ languageData }) {

    const params = new URLSearchParams(window.location.search);

    window.localStorage.removeItem('double');


    let referralID = window.localStorage.getItem('ref') === 'login' ? null : window.localStorage.getItem('ref');

    const [currentSlide, setCurrentSlide] = useState(0);
    const [socialLink, setSocialLink] = useState(false)
    const [swiperRef, setSwiperRef] = useState(null);

    const slideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex);
        console.log(swiper.realIndex)
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => swiperRef?.slideNext(),
        onSwipedRight: () => swiperRef?.slidePrev(),
    });

    
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


            <section  {...handlers} className='w-screen h-screen relative overflow-hidden'>


                <div className='lg:flex h-full'>

                    <Slider swiperRef={swiperRef} setSwiperRef={setSwiperRef} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} onSlideChange={slideChange} />
                    <div className='absolute right-0 lg:right-[20px] top-5 flex items-center align-start z-10'>
                        <Language />
                    </div>
                    <div className='w-full text-center bg-dark lg:w-[620px] h-full lg:absolute lg:left-10 top-10'>
                        <div className='w-[90%] lg:w-[640px] m-auto lg:relative z-10'>



                            <div className='pt-[1px] iphone:pt-[10px]  w-full relative z-[10] lg:border-2 lg:px-10 lg:pt-10 lg:pb-5 lg:bg-[#0D0D0D73] bg-opacity-20 rounded-[32px] border-[#DDBBFD]'>
                                <div className=' lg:max-w-[600px] '>
                                    <img className='w-[130px]  lg:w-[250px] m-auto mt-[-30px] lg:mt-0 logoLogin' src={logoCyber} alt="Logotype" />
                                    <p className='w-full lg:w-[100%] text-center lg:text-left text-[24px] leading-7 font-bold lg:text-[32px] text-white lg:leading-9 pb-2 se:mt-[0px] h-[144px] md:h-[170px]'>
                                        {currentSlide === 0 && (
                                            <>
                                                {languageData?.authSlide1}

                                                <div className=' leading-6 mt-2'>
                                                    <p className='text-[14px] lg:text-[20px] lg:mt-1 font-bold'>{languageData?.authSlide1li1}</p>

                                                    <p className='text-[14px] lg:text-[20px] lg:mt-1 font-bold'>{languageData?.authSlide1li2}</p>

                                                    <p className='text-[14px] lg:text-[20px] lg:mt-1 font-bold'>{languageData?.authSlide1li3}</p>
                                                </div>
                                            </>
                                        )}
                                        {currentSlide === 1 && (
                                            <>
                                                {languageData?.authSlide2}

                                                <div className=' leading-6 mt-2'>
                                                    <p className='text-[12px] lg:text-[20px] font-bold'>{languageData?.authSlide2li1}</p>
                                                </div>
                                            </>
                                        )}
                                        {currentSlide === 2 && (
                                            <>
                                                {languageData?.authSlide3}

                                                <div className=' leading-6 mt-2'>
                                                    <p className='text-[12px] lg:text-[20px] font-bold'>{languageData?.authSlide3li1}</p>
                                                </div>
                                            </>
                                        )}
                                        {currentSlide === 3 && (
                                            <>
                                                {languageData?.authSlide4}

                                                <div className=' leading-6 mt-2'>
                                                    <p className='text-[12px] lg:text-[20px] font-bold'>{languageData?.authSlide4li1}</p>
                                                </div>
                                            </>
                                        )}

                                    </p>

                                </div>
                                <LoginForm languageData={languageData} referralID={referralID} />

                        
                                <div className='hidden sm:flex text-left items-center lg:items-start justify-center gap-2 mt-2 lg:mt-4'>
                                    <p className='saira text-[8px] text-[#CACACA]  w-full cursor-pointer select-none font-normal leading-4'>
                                        {languageData?.loginTermsTitle}

                                        <Link target='_blank' to='/terms' className='saira text-[8px] font-semibold ml-1 '>
                                            <span className=' saira text-[8px] font-normal underline'>Terms of Use</span> & 
                                        </Link>
                                        
                                        <Link target='_blank' to={'/privacy'} className='saira text-[8px] font-semibold underline'>
                                            <span className=' saira text-[8px] font-normal underline'> Privacy Policy</span>,
                                        </Link>
                                        {/*
                                        <Link target='_blank' to={'/terms'} className='saira text-[12px] font-semibold underline'>
                                            <span className=' saira text-[12px] font-normal underline'>Terms of Use</span>,
                                        </Link>
                                        <Link target='_blank' to={'/contest-terms'} className='saira text-[12px] font-semibold underline'>
                                            <span className=' saira text-[12px] font-normal underline'>Contest Terms</span>,
                                        </Link>
                                        <Link  className='saira text-[12px] font-semiboldunderline'>
                                            <span className=' saira text-[12px] font-normal underline'></span>,
                                        </Link>
                                        <Link target='_blank' to={'/promotion-terms'} className='saira text-[12px] font-semibold underline'>
                                            <span className=' saira text-[12px] font-normal underline'>Promotion Terms</span>,
                                        </Link>
                                        <Link target='_blank' to={'/affiliation-terms'} className='saira text-[12px] font-semibold underline'>
                                            <span className=' saira text-[12px] font-normal underline'>Affliation Terms</span>
                                        </Link>
                                        */}
                                    </p>

                                </div>

                                <div className=' fixed bottom-6 left-2 max-w-[60vw] sm:block md:bottom-0 md:left-0 md:hidden md:max-w-none text-left flex items-center lg:items-start justify-center gap-2 mt-2 lg:mt-4'>
                                    <p className='saira text-[8px] text-[#a9a9a9]  w-full cursor-pointer select-none font-normal leading-4'>
                                        {languageData?.loginTermsTitle}

                                        <Link target='_blank' to='/terms' className='saira text-[8px] font-semibold ml-1 '>
                                            <span className=' saira text-[8px] font-normal underline'>Terms of Use</span> & 
                                        </Link>
                                        
                                        <Link target='_blank' to={'/privacy'} className='saira text-[8px] font-semibold underline'>
                                            <span className=' saira text-[8px] font-normal underline'> Privacy Policy</span>,
                                        </Link>
                            
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {
                    socialLink && <SocialLink setOpen={setSocialLink} />
                }
            </section>
        </>

    )
}

export default Auth