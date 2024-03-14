import React, { useEffect, useState } from 'react';
import newlogoCyber from '../../images/NewDesign/newLogo_main.png';
import logoCyber from '../../images/CyberSaysPage/logoMain.png';
import hero from '../../images/CyberSaysPage/heroRaffle.png';
import TimeCounter from '../../Components/TimeCounter';
import notReady from '../../images/CyberSaysPage/offerFalse.png';
import { Link } from 'react-router-dom';
import { useDesign } from '../../Helpers/Design/DesignContext';
import doubleIcon from '../../images/NewDesign/doubleIcon.svg';
import mixpanel from 'mixpanel-browser';
import weekendCoin from '../../images/CyberSaysPage/weekendCoin.png';
import moengage from '@moengage/web-sdk';

function RaffleTickets({ setTourModal, user, imLiveURL, languageData, setWinModal, scrollToPage, setWinTicketModal }) {

    const { design } = useDesign()

    const [isOpen, setIsOpen] = useState(false)

    const [isTaskCompleted, setIsTaskCompleted] = useState(false)
    const [lastTask, setLastTask] = useState(0)

    useEffect(() => {
        if (user === null) return
        let tasks = JSON.parse(user?.completed_tasks)
        if (tasks === null) {
            setLastTask(0)
            return
        } else {
            let sortedTasks = tasks.sort((a, b) => a - b)
            let lastTask = sortedTasks[sortedTasks.length - 1]
            setLastTask(lastTask)

            if (tasks.includes(4)) {
                setIsTaskCompleted(true)
            }
        }
    }, [user])

    const [isLinkCopied, setIsLinkCopied] = useState(false)

    const shareRefferalLink = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: document.title,
                    url: '/' + user?.referral_code,
                })
                .then(() => console.log('Successful share! 🎉'))

        } else {
            window.navigator.clipboard.writeText(window.location.host + '/' + user?.referral_code)
            setIsLinkCopied(true)

            setTimeout(() => {
                setIsLinkCopied(false)
            }, 3000)
        }
    }

    const getButtonMarkup = (task) => {
        switch (task) {
            case 0: return <button onClick={e => scrollToPage(1)} className={`w-full md:w-[380px] bg-white  border-[2px] border-[#FFED63] text-black text-[18px] saira font-semibold flex justify-center items-center ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn1}<img className='ml-1' src={doubleIcon} alt="doubleIcon" /></button>
            case 1: return <button onClick={e => scrollToPage(1)} className={`w-full md:w-[380px] bg-white  border-[2px] border-[#FFED63] text-black mobMax:text-[16px] text-[18px] saira font-semibold ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn2}</button>
            case 2: return <button onClick={e => scrollToPage(1)} className={`w-full md:w-[380px] bg-white  border-[2px] border-[#FFED63] text-black mobMax:text-[16px] text-[18px] saira font-semibold ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn3}</button>
            case 3: return <button onClick={e => scrollToPage(1)} className={`w-full md:w-[380px] bg-white  border-[2px] border-[#FFED63]  text-black text-[18px] saira font-semibold ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.homepageBtn4}</button>
        }
    }

    const handleImLiveRedirect = () => {
        window.location.replace(imLiveURL)
        window.open(window.location.href + '#vegas', '_blank')
    }

    return (
        <div className={` w-screen h-screen ${design === '0' ? 'bg-[url(./images/CyberSaysPage/mobile-bg-raffle.jpg)] md:bg-[url(./images/CyberSaysPage/bg-raffle.jpg)]' : 'bg-[#200527]'}  bg-cover bg-no-repeat bg-center relative z-10 mac-center:flex`} onClick={() => setIsOpen(false)}>
            <div className='pt-[57px]  md:pt-[80px] mac-center:!pt-0 px-4 max-w-[970px] m-auto' >
                <img className='se:w-[170px]  w-[170px] iphone:w-[240px] mac2:w-[170px] md:w-[320px] m-auto se:mb-[3%] iphone:mb-[1%]  lg:mb-[-10px] mac-img-bottom relative z-50' src={design === '0' ? logoCyber : newlogoCyber} alt="logoCyber" />

                <div className='flex flex-col-reverse competitionSE iphone:mt-[40px]  md:mt-[0px]'>

                    <div className='iphone:mt-[50px] md:mt-0'>
                        <img className={`se:w-[280px] iphone:w-[385px]  ${design === '0' ? 'md:w-[770px] raffleTicketsSE2 mac-img-width2 mt-[-110px] mac2:mt-[-110px] iphone:mt-[-30px] mb-6' : 'md:w-[990px] raffleTicketsSE mac-img-width mt-[-110px] mac2:mt-[-110px] iphone:mt-[-30px]'} iphone:mt-[-90px] mob:mt-0 m-auto md:mt-[-90px] mt-[0px] mac2:mt-[-50px] se:mt-[-30px]  `} src={design === '0' ? hero : require('../../images/NewDesign/RaffleTicket/hero_image.png')} alt="heroRaffle" />

                        <div className={`bg-[#EAEAEA] bg-opacity-20 backdrop-blur-md rounded-[14px] lg:rounded-[30px] text-center flex py-1 md:py-3   px-2  ${isTaskCompleted === false && ' md:mt-[-125px] iphone:mt-[-20px] se:mt-[-80px] mac-overflow-fix'} justify-center relative z-1`} >
                            {

                                isTaskCompleted === false
                                    ? <div className='w-full'>
                                        <p className='text-[18px] md:text-[24px] font-medium saira text-center se:mb-0 iphone:mb-2 mac:!mb-1  md:text-center iphone:px-4'>{languageData?.raffleUnderBtn} </p>
                                        <div className='flex justify-between items-start w-full '>
                                            <div className='text-center w-full'>
                                                <Link onClick={e => {
                                                    // e.preventDefault()
                                                    // handleImLiveRedirect()
                                                }} target='_blank' to={imLiveURL}><button className={` bg-white  border-[2px] border-[#FFED63]  text-black text-[14px] lg:text-[18px] saira font-semibold p-0 md:py-2 w-[97%] md:w-[95%] ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.raffleLeftBtn}</button></Link>
                                                <p className='saira text-[12px] md:text-[14px] font-medium mt-1'>{languageData?.raffleLeftSection1} {languageData?.raffleLeftSection2}</p>


                                            </div>
                                            <div className='text-center w-full'>
                                                <button onClick={e => shareRefferalLink()} className={` bg-white  border-[2px] border-[#FFED63]  text-black text-[14px] lg:text-[18px] saira font-semibold p-0 md:py-2 w-[97%] md:w-[95%] ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{
                                                    isLinkCopied === false
                                                        ? languageData?.raffleRightBtn
                                                        : languageData?.raffleRightBtn2
                                                }</button>
                                                <p className='saira text-[12px] md:text-[14px] font-medium mt-1'>{languageData?.raffleRightSection1} {languageData?.raffleRightSection2}</p>


                                            </div>

                                        </div>
                                        <p className='text-[10px] md:text-[12px] saira text-center cursor-pointer pt-1'>
                                            {languageData?.raffleRulesDesc} - <span onClick={e => {
                                                setWinModal(true)
                                                mixpanel.track("raffle_rules", {
                                                    distinct_id: 'not_set',
                                                    is_referred: user?.referral_id ? 'Yes' : 'No',
                                                    vegas_tickets: user?.raffle_tickets,
                                                    points: user?.points,
                                                    user_id: user?.id,
                                                    USD_earned: user?.allTimeEarned,
                                                    user_email: user?.email,
                                                    page_name: 'Vegas Weekend'
                                                });
                                                moengage.track_event('raffle_rules', {
                                                    distinct_id: 'not_set',
                                                    is_referred: user?.referral_id ? 'Yes' : 'No',
                                                    vegas_tickets: user?.raffle_tickets,
                                                    points: user?.points,
                                                    user_id: user?.id,
                                                    USD_earned: user?.allTimeEarned,
                                                    user_email: user?.email,
                                                    page_name: 'Vegas Weekend'
                                                });
                                            }} className='text-[10px] md:text-[12px] saira text-center underline cursor-pointer'>{languageData?.raffleRulesDescSpan}</span>
                                        </p>
                                    </div>
                                    : <div className='flex justify-center'>
                                        <div>
                                            <p className='text-[18px] md:text-[24px] font-medium saira text-center mx-4 se:mb-0 iphone:mb-2 mac:!mb-1  md:text-center'>{languageData?.raffleUnderBtn} </p>

                                            <div className='flex justify-center'>
                                                {
                                                    getButtonMarkup(lastTask)
                                                }

                                            </div>

                                        </div>

                                    </div>
                            }

                        </div>
                    </div>

                    {

                        isTaskCompleted === false
                            ? <div className=' text-center  md:mx-0 md:py-2 relative z-1 mac2:!mt-[-20px] '>
                                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-md rounded-[14px] lg:rounded-[24px] py-2 px-1 lg:px-[60px] mt-[10px] md:mt-0'>
                                    <p className='  text-[18px] md:text-[32px] raffleTicketsTitle font-semibold leading-5 lg:leading-9'>
                                        {languageData?.raffleTitle1}
                                    </p>
                                    <div className='flex justify-around sm:justify-center'>
                                        <p onClick={e => setTourModal(true)} className={`${design === '0' ? 'bg-[#FFED63]' : 'gradient-tourToggle'} px-2 py-[2px] lg:px-4 rounded-[14px] text-[#1E1E1E] saira text-[12px] lg:text-[14px] font-semibold cursor-pointer mt-2 `}>{languageData?.raffleSubTitleLink2}</p>
                                        <p onClick={e => setWinModal(true)} className={`${design === '0' ? 'bg-[#FFED63]' : 'gradient-tourToggle'} px-2 py-[2px] lg:px-4 rounded-[14px] text-[#1E1E1E] saira text-[12px] lg:text-[14px] font-semibold cursor-pointer mt-2 sm:mr-6`}>{languageData?.raffleSubTitleLink}</p>
                                    </div>
                                </div>
                                {/*
                                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-md rounded-[14px] lg:rounded-[30px] text-center flex  mt-1 justify-center items-center'>
                                    <p className='text-[16px] lg:text-[32px] font-semibold mr-2'>Vegas weekend</p>
                                    <img className={`w-[32px] sm:w-[50px] h-[32px] sm:h-[50px] cursor-pointer `} src={design === '0' ? weekendCoin : require('../../images/NewDesign/header/cup.png')} alt="weekendCoin" />
                                </div>
*/}
                                {/* 
                               <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-md rounded-[14px] lg:rounded-[24px] mt-2 py-1 lg:py-3'>
                                    
                                    <p className='text-[12px] md:text-[14px] font-medium saira flex justify-center items-center mx-4 iphone:leading-4 se:leading-[14px]'>
                                        {languageData?.raffleSubTitle1}
                                        <img className='w-[12px] md:w-[24px] h-[12px] md:h-[24px] mr-[2px]' src={ready} alt="ready" />


                                        <div className='relative'>
                                            
                                            <svg onClick={e => setToolTip(true)} className=' cursor-pointer relative' width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1_55928)">
                                                    <path d="M5.9 9H7.1V5.4H5.9V9ZM6.5 4.2C6.67 4.2 6.8126 4.1424 6.9278 4.0272C7.043 3.912 7.1004 3.7696 7.1 3.6C7.1 3.43 7.0424 3.2876 6.9272 3.1728C6.812 3.058 6.6696 3.0004 6.5 3C6.33 3 6.1876 3.0576 6.0728 3.1728C5.958 3.288 5.9004 3.4304 5.9 3.6C5.9 3.77 5.9576 3.9126 6.0728 4.0278C6.188 4.143 6.3304 4.2004 6.5 4.2ZM6.5 12C5.67 12 4.89 11.8424 4.16 11.5272C3.43 11.212 2.795 10.7846 2.255 10.245C1.715 9.705 1.2876 9.07 0.9728 8.34C0.658 7.61 0.5004 6.83 0.5 6C0.5 5.17 0.6576 4.39 0.9728 3.66C1.288 2.93 1.7154 2.295 2.255 1.755C2.795 1.215 3.43 0.7876 4.16 0.4728C4.89 0.158 5.67 0.0004 6.5 0C7.33 0 8.11 0.1576 8.84 0.4728C9.57 0.788 10.205 1.2154 10.745 1.755C11.285 2.295 11.7126 2.93 12.0278 3.66C12.343 4.39 12.5004 5.17 12.5 6C12.5 6.83 12.3424 7.61 12.0272 8.34C11.712 9.07 11.2846 9.705 10.745 10.245C10.205 10.785 9.57 11.2126 8.84 11.5278C8.11 11.843 7.33 12.0004 6.5 12ZM6.5 10.8C7.84 10.8 8.975 10.335 9.905 9.405C10.835 8.475 11.3 7.34 11.3 6C11.3 4.66 10.835 3.525 9.905 2.595C8.975 1.665 7.84 1.2 6.5 1.2C5.16 1.2 4.025 1.665 3.095 2.595C2.165 3.525 1.7 4.66 1.7 6C1.7 7.34 2.165 8.475 3.095 9.405C4.025 10.335 5.16 10.8 6.5 10.8Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_55928">
                                                        <rect width="12" height="12" fill="white" transform="translate(0.5)" />
                                                    </clipPath>
                                                </defs>

                                            </svg>
                                            {
                                                toolTip && <svg className=" absolute top-[10px] right-[-14px]" width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 0L37.3205 36L2.67949 36L20 0Z" fill="#F5F5F5" />
                                                </svg>
                                            }

                                            {
                                                toolTip && <ToolTip1 languageData={languageData} setToolTip={setToolTip} />
                                            }


                                        </div>

                                    </p>
                                    
                                </div>
                                */}
                                {/*<p  className={`text-[14px] font-medium underline cursor-pointer saira  ${design === '0' ? 'text-[#FFED63]' : 'gradient-link'}`}>{languageData?.raffleLink1}</p>*/}
                                {/*
                                <a
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Hello world!"
                                    data-tooltip-place="top"
                                >
                                    ◕‿‿◕
                                </a>
                                <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello to you too!">
                                    ◕‿‿◕
                                </a>
                                <Tooltip id="my-tooltip" className='!rounded-full' />
                                */}
                            </div>
                            : <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-sm rounded-[14px] md:rounded-[100px] text-center md:mx-0 md:py-2'>
                                <p className='se:text-[14px] iphone:text-[18px] md:text-[32px] mac2:!text-[24px] font-semibold'>{languageData?.raffleTitle2}</p>
                                <p className='text-[12px] md:text-[14px] font-medium saira flex justify-center items-center md:my-1 se:leading-[14px]'>
                                    {languageData?.raffleSubTitle2}
                                    <img className='w-[12px] md:w-[24px] h-[12px] md:h-[24px] mx-[2px] md:ml-1' src={notReady} alt="notReady" />
                                    <a
                                        data-tooltip-id="my-tooltip-inline"

                                    >
                                        <svg className=' cursor-pointer md:w-[24px] md:h-[24px]' width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_55928)">
                                                <path d="M5.9 9H7.1V5.4H5.9V9ZM6.5 4.2C6.67 4.2 6.8126 4.1424 6.9278 4.0272C7.043 3.912 7.1004 3.7696 7.1 3.6C7.1 3.43 7.0424 3.2876 6.9272 3.1728C6.812 3.058 6.6696 3.0004 6.5 3C6.33 3 6.1876 3.0576 6.0728 3.1728C5.958 3.288 5.9004 3.4304 5.9 3.6C5.9 3.77 5.9576 3.9126 6.0728 4.0278C6.188 4.143 6.3304 4.2004 6.5 4.2ZM6.5 12C5.67 12 4.89 11.8424 4.16 11.5272C3.43 11.212 2.795 10.7846 2.255 10.245C1.715 9.705 1.2876 9.07 0.9728 8.34C0.658 7.61 0.5004 6.83 0.5 6C0.5 5.17 0.6576 4.39 0.9728 3.66C1.288 2.93 1.7154 2.295 2.255 1.755C2.795 1.215 3.43 0.7876 4.16 0.4728C4.89 0.158 5.67 0.0004 6.5 0C7.33 0 8.11 0.1576 8.84 0.4728C9.57 0.788 10.205 1.2154 10.745 1.755C11.285 2.295 11.7126 2.93 12.0278 3.66C12.343 4.39 12.5004 5.17 12.5 6C12.5 6.83 12.3424 7.61 12.0272 8.34C11.712 9.07 11.2846 9.705 10.745 10.245C10.205 10.785 9.57 11.2126 8.84 11.5278C8.11 11.843 7.33 12.0004 6.5 12ZM6.5 10.8C7.84 10.8 8.975 10.335 9.905 9.405C10.835 8.475 11.3 7.34 11.3 6C11.3 4.66 10.835 3.525 9.905 2.595C8.975 1.665 7.84 1.2 6.5 1.2C5.16 1.2 4.025 1.665 3.095 2.595C2.165 3.525 1.7 4.66 1.7 6C1.7 7.34 2.165 8.475 3.095 9.405C4.025 10.335 5.16 10.8 6.5 10.8Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_55928">
                                                    <rect width="12" height="12" fill="white" transform="translate(0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>

                                </p>
                                <p className={`text-[14px] font-medium underline cursor-pointer saira  ${design === '0' ? 'text-[#FFED63]' : 'gradient-link'}`}>{languageData?.raffleLink2}</p>
                            </div>
                    }
                </div>
                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-md rounded-[14px] lg:rounded-[24px] py-1 contentForCompetitions mt-1 '>
                    <p className='  text-[12px] md:text-[14px] font-semibold saira text-center text-[#FBC215]'>
                        {languageData?.raffleBotLink1}
                    </p>

                    <p onClick={e => {
                        setWinTicketModal(true)
                        mixpanel.track("how_vegas_weekend", {
                            distinct_id: 'not_set',
                            is_referred: user?.referral_id ? 'Yes' : 'No',
                            vegas_tickets: user?.raffle_tickets,
                            points: user?.points,
                            user_id: user?.id,
                            USD_earned: user?.allTimeEarned,
                            user_email: user?.email,
                            page_name: 'Vegas Weekend'
                        });
                        moengage.track_event('how_vegas_weekend', {
                            distinct_id: 'not_set',
                            is_referred: user?.referral_id ? 'Yes' : 'No',
                            vegas_tickets: user?.raffle_tickets,
                            points: user?.points,
                            user_id: user?.id,
                            USD_earned: user?.allTimeEarned,
                            user_email: user?.email,
                            page_name: 'Vegas Weekend'
                        });
                    }} className={`saira text-[12px] md:text-[14px] font-semibold cursor-pointer text-center  text-[#FD9C36]`}>🤑<span className='underline text-[#FD9C36] saira text-[12px] md:text-[14px]'>{languageData?.raffleBotLink2}</span> 🤑 </p>

                </div>
                {/*
                <p className='text-[14px] md:text-[16px] saira text-center cursor-pointer py-1'>
                    {languageData?.raffleRulesDesc}
                    <span onClick={e => setWinModal(true)} className={`saira  underline ml-2 ${design === '0' ? 'text-[#FFED63]' : 'gradient-link'}`}>{languageData?.raffleRulesLink}</span>
                </p>
                */}
                <div className='flex absolute se:bottom-[140px] iphone:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] justify-center w-full  m-auto left-1/2 transform -translate-x-1/2 '>
                    <TimeCounter left={'m-auto'} leftTitle={'text-center'} title={languageData?.timeCounterTitle} languageData={languageData} block={'hidden'} />
                </div>
            </div>


        </div>
    )
}

export default RaffleTickets
