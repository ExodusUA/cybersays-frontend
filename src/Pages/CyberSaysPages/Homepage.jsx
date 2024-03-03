import React, { useEffect, useState } from 'react'
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import newlogoCyber from '../../images/NewDesign/newLogo_main.png'
import girlOK from '../../images/CyberSaysPage/girl_OK.png'
import imLiveLogo from '../../images/CyberSaysPage/imLiveLogo.png'
import TimeCounter from '../../Components/TimeCounter'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useDesign } from '../../Helpers/Design/DesignContext'
import doubleIcon from '../../images/NewDesign/doubleIcon.svg'


function Homepage({ user, imLiveURL, languageData, scrollToPage }) {

    const dataTitle = [
        {
            desc: languageData?.homepageTitle1,
        },
        {
            desc: languageData?.homepageTitle2,
        },
        {
            desc: languageData?.homepageTitle3,
        }
    ]

    const { design } = useDesign()

    const [lastTask, setLastTask] = useState(0)

    const getButtonMarkup = (task) => {
        switch (task) {
            case 0:
            case null:
            case undefined:
                return <button onClick={e => scrollToPage(1)} className={`w-full md:w-[480px]   border-[#FFED63]  text-black text-[18px] saira font-semibold flex justify-center items-center ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn1}<img className='ml-1' src={doubleIcon} alt="doubleIcon" /></button>
            case 1: return <button onClick={e => scrollToPage(1)} className={`w-full md:w-[480px]  bg-white   border-[#FFED63]  text-black text-[18px] saira font-semibold flex justify-center items-center  ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-2 py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn2}<img className='ml-1' src={doubleIcon} alt="doubleIcon" /></button>
            case 2: return <button onClick={e => scrollToPage(1)} className={`w-full  md:w-[480px] bg-white   border-[#FFED63]  text-black text-[18px] saira font-semibold flex justify-center items-center  ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-2 py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn3}<img className='ml-1' src={doubleIcon} alt="doubleIcon" /></button>
            case 3: return <button onClick={e => scrollToPage(1)} className={`w-full md:w-[480px] bg-white   border-[#FFED63]  text-black text-[18px] saira font-semibold flex justify-center items-center ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-2 py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn4}<img className='ml-1' src={doubleIcon} alt="doubleIcon" /></button>
        }
    }

    useEffect(() => {
        if (user === null) return setLastTask(0)

        let tasks = JSON.parse(user?.completed_tasks)
        if (tasks === null) return setLastTask(0)
        let lastTask = tasks[tasks.length - 1]
        setLastTask(lastTask)
    }, [user])


    return (
        <div className={` w-screen h-screen ${design === '0' ? 'bg-[url(./images/CyberSaysPage/mobile-bg-homepage.jpg)] md:bg-[url(./images/CyberSaysPage/bg-homepage.jpg)]' : ' bg-[#200527]'}  bg-cover bg-no-repeat bg-center relative z-10 mac-center:flex`}>
            <div className='pt-[57px]  md:pt-[90px] mac-center:!pt-0 px-4 pb-12 max-w-[1170px] m-auto'>
                <div className='max-w-[300px] m-auto'>

                    <p className=' text-[18px] md:text-[32px] font-semibold'></p>
                </div>
                <img className='se:w-[170px]  w-[170px] iphone:w-[240px] mac2:w-[170px] md:w-[320px] m-auto se:mb-[0px] iphone:mb-[-10px]  relative z-50' src={design === '0' ? logoCyber : newlogoCyber} alt="logoCyber" />
                <div className='lg:flex justify-between items-end md:items-center '>
                    <div className='w-full lg:hidden block mb-2'>
                        <Swiper
                            modules={[Autoplay]}

                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                }
                            }}
                        >
                            {
                                dataTitle.map((item, index) => (
                                    <SwiperSlide key={item}>
                                        <p className='se:text-[16px] iphone:text-[18px] iphone:my-3 font-semibold'>{item.desc}</p>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>
                    </div>
                    <div className={`${design === '0' ? ' border-[#FFD700]' : '  border-[#A2DBF0]'} rounded-[16px] border-2 px-1 pb-1 pt-8 m-auto lg:m-[unset]`}>
                        <div className='flex items-center'>
                        <img className={`w-[180px] sm:w-[200px] md:w-[240px]  ${design === '0' ? 'mt-[-30px]' : 'mt-[-65px]'}`} src={design === '0' ? girlOK : require('../../images/NewDesign/Homepage/hero_image.png')} alt="girlOK" />
                            <Link to={imLiveURL} target='_blank'><img className='w-[160px] md:w-[240px] md:mt-5 mac:!mt-6 mb-10' src={imLiveLogo} alt="imLiveLogo" /></Link>
                        </div>
                        <div className=' relative '>
                            {
                                getButtonMarkup(lastTask)
                            }
                        </div>
                    </div>
                    <div className='ml-1 md:ml-10 w-[200px] sm:w-[unset] mb-4 md:mb-[unset]'>
                        <div className='max-w-[300px] md:max-w-[580px] w-full hidden lg:block'>
                            <Swiper
                                modules={[Autoplay]}

                                loop={true}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    }
                                }}
                            >
                                {
                                    dataTitle.map((item, index) => (
                                        <SwiperSlide key={item}>
                                            <p className='text-[16px] md:text-[32px] font-semibold'>{item.desc}</p>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>

                        {/*
                        <div className='md:block hidden mt-[100px] mac:mt-[150px]'>
                            <TimeCounter title={languageData?.timeCounterTitle2} languageData={languageData} block={'hidden'}  />
                        </div>
                        */}
                    </div>
                </div>
                
            </div>
            <div className='flex absolute se:bottom-[130px] iphone:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] justify-center w-full  m-auto left-1/2 transform -translate-x-1/2 '>
                <TimeCounter title={languageData?.timeCounterTitle} left={'m-auto'} leftTitle={'text-center'} languageData={languageData} block={'hidden'} />
            </div>
        </div>
    )
}

export default Homepage
