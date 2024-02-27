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


function Homepage({ user, imLiveURL, languageData,scrollToPage }) {

    const dataTitle = [
        {
            desc: languageData?.homepageTitle1,
        },
        {
            desc: languageData?.homepageTitle2,
        },
        {
            desc: languageData?.homepageTitle3,
        },
        {
            desc: languageData?.homepageTitle4,
        },
        {
            desc: languageData?.homepageTitle5,
        },
    ]

    const { design } = useDesign()

    const [lastTask, setLastTask] = useState(0)

    const getButtonMarkup = (task) => {
        switch (task) {
            case 0: return <button onClick={e => scrollToPage(2)} className={`w-full sm:w-[350px]   border-[#FFED63]  text-black text-[16px] mod:text-[18px] saira font-semibold  ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn1}</button>
            case 1: return <button onClick={e => scrollToPage(2)} className={`w-full sm:w-[350px]  bg-white   border-[#FFED63]  text-black text-[16px] mod:text-[18px] saira font-semibold  ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn2}</button>
            case 2: return <button onClick={e => scrollToPage(2)} className={`w-full  sm:w-[350px] bg-white   border-[#FFED63]  text-black text-[16px] mod:text-[18px] saira font-semibold  ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn3}</button>
            case 3: return <button onClick={e => scrollToPage(2)} className={`w-full sm:w-[350px] bg-white   border-[#FFED63]  text-black text-[16px] mod:text-[18px] saira font-semibold ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn4}</button>
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
        <div className={` w-screen h-screen ${design === '0' ? 'bg-[url(./images/CyberSaysPage/mobile-bg-homepage.jpg)] md:bg-[url(./images/CyberSaysPage/bg-homepage.jpg)]' : ' bg-[url(./images/NewDesign/Bg/homepage_des.png)]'}  bg-cover bg-no-repeat bg-center relative z-10 mac-center:flex`}>
            <div className='pt-[97px] md:pt-[135px] mac-center:!pt-0 px-4 pb-12 max-w-[1170px] m-auto'>
                <div className='max-w-[300px] m-auto'>

                    <p className=' text-[18px] md:text-[32px] font-semibold'></p>
                </div>
                <img className='se:w-[170px] se:mb-[-5px] w-[170px] iphone:w-[170px] md:w-[320px] m-auto' src={design === '0' ? logoCyber : newlogoCyber} alt="logoCyber" />
                <div className='flex justify-between items-end md:items-center '>
                    <div>
                        <img className='w-[180px] sm:w-[200px] md:w-[320px]' src={design === '0' ? girlOK : require('../../images/NewDesign/Homepage/hero_image.png')} alt="girlOK" />
                        <div className='md:block hidden relative left-3'>
                            {
                                getButtonMarkup(lastTask)
                            }
                        </div>
                    </div>
                    <div className='ml-1 md:ml-10 w-[200px] sm:w-[unset] mb-4 md:mb-[unset]'>
                        <div className='max-w-[300px] md:max-w-[750px]'>
                            <Swiper
                                modules={[Autoplay]}
                                autoplay={{ delay: 4000 }}
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
                                            <p className='text-[18px] md:text-[32px] font-semibold'>{item.desc}</p>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>
                        </div>
                        <img className='w-[160px] md:w-[200px] md:mt-5 mac:!mt-0' src={imLiveLogo} alt="imLiveLogo" />
                        <div className='md:block hidden mt-[100px] mac:mt-[50px]'>
                            <TimeCounter title={languageData?.timeCounterTitle2} languageData={languageData} />
                        </div>
                    </div>
                </div>
                <div className='block md:hidden'>
                    {
                        getButtonMarkup(lastTask)
                    }
                </div>
            </div>
            <div className='flex md:hidden absolute se:bottom-[160px] iphone:bottom-[156px] justify-center w-full max-w-[760px] m-auto'>
                <TimeCounter title={languageData?.timeCounterTitle2} languageData={languageData} />
            </div>
        </div>
    )
}

export default Homepage
