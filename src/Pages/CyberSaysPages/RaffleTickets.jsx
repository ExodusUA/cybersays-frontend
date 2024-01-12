import React, { useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip'
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import hero from '../../images/CyberSaysPage/heroRaffle.png'
import TimeCounter from '../../Components/TimeCounter'
import ready from '../../images/CyberSaysPage/offerTrue.png'
import notReady from '../../images/CyberSaysPage/offerFalse.png'
import { Link } from 'react-router-dom';
import CustomTooltip from '../../Components/CustomTooltip';
import Popup from 'reactjs-popup';

function RaffleTickets({ setTourModal, user, imLiveURL, languageData }) {

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
                    text: 'Sharing',
                    url: '?uid=' + user?.refferal_code,
                })
                .then(() => console.log('Successful share! 🎉'))
                .catch(err => console.error(err));
        } else {
            window.navigator.clipboard.writeText(window.location.hostname + '?uid=' + user?.refferal_code)
            setIsLinkCopied(true)

            setTimeout(() => {
                setIsLinkCopied(false)
            }, 3000)
        }
    }

    const getButtonMarkup = (task) => {
        switch (task) {
            case 0: return <Link to={imLiveURL}><button className='w-full md:w-[380px] bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold se:py-[6px] py-2 md:py-3'>{languageData?.homepageBtn1}</button></Link>
            case 1: return <button className='w-full md:w-[380px] bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black mobMax:text-[16px] text-[18px] saira font-semibold se:py-[6px] py-2 md:py-3'>{languageData?.homepageBtn2}</button>
            case 2: return <button className='w-full md:w-[380px] bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black mobMax:text-[16px] text-[18px] saira font-semibold se:py-[6px] py-2 md:py-3'>{languageData?.homepageBtn3}</button>
            case 3: return <button className='w-full md:w-[380px] bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold se:py-[6px] py-2 md:py-3'>{languageData?.homepageBtn4}</button>
        }
    }

    const [infoTooltip, setInfoTooltip] = useState(false)
   



    return (
        <div className=' w-screen h-screen bg-[url(./images/CyberSaysPage/mobile-bg-raffle.jpg)] md:bg-[url(./images/CyberSaysPage/bg-raffle.jpg)] bg-cover bg-no-repeat bg-center relative z-10' onClick={() => setIsOpen(false)}>
            <div className='pt-[60px]  md:pt-[90px] px-4 max-w-[1170px] m-auto' >
                <img className='se:w-[230px] se:mb-[-5px] iphone:w-[310px]  md:w-[500px] m-auto md:mb-[-20px] mac:!w-[400px]' src={logoCyber} alt="logoCyber" />

                <div className='flex flex-col-reverse'>

                    <div>
                        <img className='se:w-[280px] iphone:w-[345px] md:w-[770px] iphone:mt-[-40px] mob:mt-0 m-auto md:mt-[-100px] mac2:!mt-[-50px] se:mt-[-30px] mac:!w-[500px] mac2:!w-[500px]' src={hero} alt="heroRaffle" />
                        <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-sm rounded-[30px] text-center flex py-3 md:py-5 mac:!py-2  px-2 mt-[-20px] md:mt-[-80px] justify-center relative z-1' >
                            {

                                isTaskCompleted === true
                                    ? <div className='flex justify-between items-start w-full'>
                                        <div className='text-center w-full'>
                                            <Link to={imLiveURL}><button className=' bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold p-2 md:py-3 md:w-full'>Enjoy ImLive 💃</button></Link>
                                            <p className='saira text-[12px] md:text-[14px] font-medium mt-2'>1 credit bought = </p>
                                            <p className='saira text-[12px] md:text-[14px] font-medium'>1  raffle ticket</p>
                                        </div>
                                        <div className='text-center w-full'>
                                            <button onClick={e => shareRefferalLink()} className=' bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold p-2 md:py-3 md:w-full'>{
                                                isLinkCopied === false
                                                    ? 'Refer friends 🤑'
                                                    : 'Link copied!'
                                            }</button>
                                            <p className='saira text-[12px] md:text-[14px] font-medium mt-2'>Friend doubled money = </p>
                                            <p className='saira text-[12px] md:text-[14px] font-medium'>30 raffle tickets</p>
                                        </div>
                                    </div>
                                    : <div className='flex justify-center'>
                                        <div>
                                            <p className='text-[18px] md:text-[24px] font-medium saira text-center mx-4 se:mb-0 iphone:mb-4 mac:!mb-1  md:text-center'>Complete double the money offer to take part in raffle </p>
                                            {
                                                getButtonMarkup(lastTask)
                                            }
                                        </div>
                                    </div>
                            }

                        </div>
                    </div>

                    {

                        isTaskCompleted === false
                            ? <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-sm rounded-[50px] text-center mx-1 md:mx-0 md:py-2 relative z-1'>
                                <p className='text-[18px] md:text-[32px] mac2:!text-[24px] font-semibold'>Win the Vegas weekend!</p>
                                <p className='text-[12px] md:text-[14px] font-medium saira flex justify-center items-center mx-8 iphone:leading-4 se:leading-[14px]'>
                                    If you took ImLive's double-your-money offer, you can be picked by your referral or referrer to go to Vegas if they win.
                                    <img className='w-[12px] md:w-[24px] h-[12px] md:h-[24px] mr-[2px]' src={ready} alt="ready" />


                                    <div className=''>
                                        <CustomTooltip setOpen={setInfoTooltip} open={infoTooltip} >
                                            <div>
                                                <p className='text-black text-left saira text-[12px] md:text-[14px] font-medium leading-[15px]'>
                                                    {languageData?.raffleInfoTitle1}
                                                </p>
                                                <p className='text-black text-left saira text-[12px] md:text-[14px] font-medium leading-[15px] mt-3 ml-2'>
                                                    1. <span className='saira font-bold text-black'>{languageData?.raffleInfoTitle2} </span>{languageData?.raffleInfoTitle2Span}
                                                </p>
                                                <p className='text-black text-left saira text-[12px] md:text-[14px] font-medium leading-[15px] mt-3 ml-2'>
                                                    2. <span className='saira font-bold text-black'>{languageData?.raffleInfoTitle3} </span>{languageData?.raffleInfoTitle3Span}
                                                </p>
                                                <p className='text-black text-left saira text-[12px] md:text-[14px] font-medium leading-[15px] mt-3'>
                                                    {languageData?.raffleInfoTitle4} <span className='saira underline text-black cursor-pointer'>{languageData?.raffleInfoTitle4Span}</span>
                                                </p>
                                            </div>
                                        </CustomTooltip>

                                        <svg onClick={e => setInfoTooltip(true)} className=' cursor-pointer' width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_55928)">
                                                <path d="M5.9 9H7.1V5.4H5.9V9ZM6.5 4.2C6.67 4.2 6.8126 4.1424 6.9278 4.0272C7.043 3.912 7.1004 3.7696 7.1 3.6C7.1 3.43 7.0424 3.2876 6.9272 3.1728C6.812 3.058 6.6696 3.0004 6.5 3C6.33 3 6.1876 3.0576 6.0728 3.1728C5.958 3.288 5.9004 3.4304 5.9 3.6C5.9 3.77 5.9576 3.9126 6.0728 4.0278C6.188 4.143 6.3304 4.2004 6.5 4.2ZM6.5 12C5.67 12 4.89 11.8424 4.16 11.5272C3.43 11.212 2.795 10.7846 2.255 10.245C1.715 9.705 1.2876 9.07 0.9728 8.34C0.658 7.61 0.5004 6.83 0.5 6C0.5 5.17 0.6576 4.39 0.9728 3.66C1.288 2.93 1.7154 2.295 2.255 1.755C2.795 1.215 3.43 0.7876 4.16 0.4728C4.89 0.158 5.67 0.0004 6.5 0C7.33 0 8.11 0.1576 8.84 0.4728C9.57 0.788 10.205 1.2154 10.745 1.755C11.285 2.295 11.7126 2.93 12.0278 3.66C12.343 4.39 12.5004 5.17 12.5 6C12.5 6.83 12.3424 7.61 12.0272 8.34C11.712 9.07 11.2846 9.705 10.745 10.245C10.205 10.785 9.57 11.2126 8.84 11.5278C8.11 11.843 7.33 12.0004 6.5 12ZM6.5 10.8C7.84 10.8 8.975 10.335 9.905 9.405C10.835 8.475 11.3 7.34 11.3 6C11.3 4.66 10.835 3.525 9.905 2.595C8.975 1.665 7.84 1.2 6.5 1.2C5.16 1.2 4.025 1.665 3.095 2.595C2.165 3.525 1.7 4.66 1.7 6C1.7 7.34 2.165 8.475 3.095 9.405C4.025 10.335 5.16 10.8 6.5 10.8Z" fill="white" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_55928">
                                                    <rect width="12" height="12" fill="white" transform="translate(0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </div>

                                </p>
                                <p className='text-[12px] font-medium underline cursor-pointer saira'>How do I win the vegas weekend?</p>
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
                            : <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-sm rounded-[50px] md:rounded-[100px] text-center mx-5 md:mx-0 md:py-2'>
                                <p className='se:text-[14px] iphone:text-[18px] md:text-[32px] mac2:!text-[24px] font-semibold'>Win the Vegas weekend!</p>
                                <p className='text-[12px] md:text-[14px] font-medium saira flex justify-center items-center md:my-1 se:leading-[14px]'>
                                    Eligible to go to vegas
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
                                <p className='text-[12px] md:text-[14px] font-medium underline cursor-pointer saira'>How do I win the vegas weekend raffle?</p>
                            </div>
                    }
                </div>

                <p className='text-[12px] md:text-[14px] saira text-center cursor-pointer se:py-1 iphone:py-3'>
                    *No purchase needed to participate in the raffle.
                    <span onClick={e => setTourModal(true)} className='saira text-[#FFED63] underline ml-2'>Raffle rules</span>
                </p>
                <div className='flex absolute se:bottom-[130px] iphone:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] justify-center w-full  m-auto left-1/2 transform -translate-x-1/2 '>
                    <TimeCounter languageData={languageData} />
                </div>
            </div>

            
        </div>
    )
}

export default RaffleTickets
