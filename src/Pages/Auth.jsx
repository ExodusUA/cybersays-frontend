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
import { Link } from 'react-router-dom';

function Auth({ languageData }) {

    const params = new URLSearchParams(window.location.search);

    let referralID = params.get('ref');

    const [currentSlide, setCurrentSlide] = useState(0);
    const [checkmark, setCheckmark] = useState(false)

    const slideChange = (swiper) => {
        setCurrentSlide(swiper.realIndex);
        console.log(swiper.realIndex)
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % 4),
        onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + 4) % 4),
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

                    <Slider currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} onSlideChange={slideChange} />
                    <div className='absolute right-0 lg:right-[20px] top-5 flex items-center align-start z-10'>
                        <Language />
                    </div>
                    <div className='w-full text-center bg-dark lg:w-[620px] h-full lg:absolute lg:left-10 top-10'>
                        <div className='w-[90%] lg:w-[640px] m-auto lg:relative z-10'>



                            <div className='pt-[1px] iphone:pt-[10px]  w-full relative z-[10] lg:border-2 lg:px-10 lg:pt-10 lg:pb-5 lg:bg-[#0D0D0D73] bg-opacity-20 rounded-[32px] border-[#DDBBFD]'>
                                <div className=' lg:max-w-[600px] '>
                                    <img className='w-[130px]  lg:w-[250px] m-auto mt-[-30px] lg:mt-0 logoLogin' src={logoCyber} alt="Logotype" />
                                    <p className='w-full lg:w-[100%] text-center lg:text-left text-[24px] leading-7 font-bold lg:text-[32px] text-white lg:leading-9 pb-2 se:mt-[0px] '>
                                        {currentSlide === 0 && (
                                            <>
                                                {languageData?.authSlide1}

                                                <div className=' leading-6 mt-2'>
                                                    <p className='text-[12px] lg:text-[20px] lg:mt-1 font-bold'>{languageData?.authSlide1li1}</p>

                                                    <p className='text-[12px] lg:text-[20px] lg:mt-1 font-bold'>{languageData?.authSlide1li2}</p>

                                                    <p className='text-[12px] lg:text-[20px] lg:mt-1 font-bold'>{languageData?.authSlide1li3}</p>
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

                                <div className='flex items-center lg:items-start justify-center gap-2 mt-2 lg:mt-4'>
                                    <label className='saira text-[12px] lg:text-[14px] max-w-[260px] lg:max-w-[530px] w-full cursor-pointer select-none font-normal leading-4' htmlFor="notification">{languageData?.loginTermsTitle} <Link to={'/contest-terms'} target='_blank'><span className='gradient-TermsLink saira text-[14px] font-semibold'>{languageData?.loginTermsLink}</span></Link> </label>
                                    <div className='w-[23px] h-[22px] border-2 border-white rounded-[4px] flex justify-center items-center align-middle cursor-pointer' onClick={e => setCheckmark(!checkmark)}>
                                        {
                                            checkmark === true && <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                                <path d="M10 3.65088L4.66667 9.65088L2 6.65088" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        }
                                    </div>
                                    <input type="checkbox" name="notification" id="notification" hidden onChange={e => setCheckmark(!checkmark)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>

    )
}

export default Auth