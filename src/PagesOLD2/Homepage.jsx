import React, { useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import 'swiper/css';
import 'swiper/css/navigation';
import Language from '../Components/Language/Language'
import logotype from '../images/logotype.svg'
import 'swiper/css';
import 'swiper/css/navigation';
import Slider from './Homepage/Slider';
import LoginForm from './Homepage/LoginForm';
import UserMenuModal from '../Components/UserMenuModal';
import UserMenuButton from '../Components/UserMenuButton';
import InviteFriends from '../Components/InviteFriends';

function Homepage({ languageData }) {



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
                    <Slider />

                    <div className='w-full text-center bg-dark lg:w-[55%] h-full'>
                        <div className='w-[90%] lg:w-[80%] m-auto lg:relative z-10'>

                            <div className='absolute right-0 top-5 flex items-center align-start z-20'>
                                <Language />
                            </div>

                            <div className='pt-[3vh] lg:pt-[15vh] w-full relative z-[10]'>
                                <img className='w-[125px] md:w-[200px] lg:w-[250px] m-auto lg:m-0' src={logotype} alt="Logotype" />
                                <p className='w-[100%] text-center lg:text-left text-[24px] leading-7 font-bold lg:text-[30px] text-white lg:leading-9 lg:border-b-2 border-[#A8AFF2] py-4 lg:py-8 lg:pt-6'>CyberSays: Double Your Money, Double Your Gains!</p>
                                <LoginForm />
                            </div>

                           

                        </div>
                    </div>
                </div>

                <div className='w-[1000px] h-[1000px] absolute right-[-100px] bottom-[-700px] bg-[#530A59] blur-[100px] z-1 rounded-[1000px]'></div>
            </section>
        </>

    )
}

export default Homepage