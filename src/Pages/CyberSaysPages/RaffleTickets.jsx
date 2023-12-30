import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip'
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import moreInfo from '../../images/CyberSaysPage/moreInfo.png'
import hero from '../../images/CyberSaysPage/heroRaffle.png'
import TimeCounter from '../../Components/TimeCounter'
import TourModal from '../../Components/DoubleMoneyPage/TourModal';

function RaffleTickets() {
    const [isOpen, setIsOpen] = useState(false)

    const [tourModal, setTourModal] = useState(false)
    return (
        <div className=' w-screen h-screen bg-[url(./images/CyberSaysPage/mobile-bg-raffle.jpg)] bg-cover bg-no-repeat bg-center relative z-10' onClick={() => setIsOpen(false)}>
            <div className='pt-[60px] px-4' >
                <img className='w-[310px] m-auto' src={logoCyber} alt="logoCyber" />
                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[50px] text-center mx-5'>
                    <p className='text-[18px] font-semibold'>“Win the Vegas weekend!”</p>
                    <p className='text-[12px] font-medium saira flex justify-center items-center'>
                        Eligible to go to vegas

                        <a
                            data-tooltip-id="my-tooltip-inline"
                            onMouseEnter={() => setIsOpen(true)}
                        >
                            <svg className='ml-1 cursor-pointer' width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <p className='text-[12px] font-medium underline cursor-pointer saira'>How do I win the vegas weekend raffle?</p>
                </div>
                <div>
                    <img className='w-[345px]' src={hero} alt="heroRaffle" />
                    <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[30px] text-center flex py-3 px-2 mt-[-20px]'>
                        {/* 2 КНОПКИ
                        <div className='text-center w-full'>
                            <button className=' bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold p-2'>Enjoy ImLive 💃</button>
                            <p className='saira text-[12px] font-medium'>1 credit bought = </p>
                            <p className='saira text-[12px] font-medium'>1  raffle ticket</p>
                        </div>
                        <div className='text-center w-full'>
                            <button className=' bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold p-2'>Refer friends 🤑</button>
                            <p className='saira text-[12px] font-medium'>Friend doubled money = </p>
                            <p className='saira text-[12px] font-medium'>30 raffle tickets</p>
                        </div>
                        */}
                        <div>
                            <p className='text-[18px] font-medium saira text-center mx-4'>Complete double the money offer to take part in raffle </p>
                            <button className=' bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold p-2 w-full mt-2'>Double your money 🤑</button>

                        </div>
                    </div>
                </div>

            </div>
            <p className='text-[12px] saira text-[#FFED63] text-center cursor-pointer underline py-3' onClick={e => setTourModal(true)}>Raffle rules</p>
            <Tooltip

                isOpen={isOpen}
                id="my-tooltip-inline"
                style={{ backgroundColor: "white", color: "black", width: "360px", borderRadius: "22px" }}
            >
                <p className='text-black text-left saira text-[12px] font-medium leading-[15px]'>
                    Vegas eligibility indicates that you, your referred friends, or the friend who referred you are qualified to take part in the Vegas raffle through one of two methods:
                </p>
                <p className='text-black text-left saira text-[12px] font-medium leading-[15px] mt-3 ml-2'>
                    1. <span className='saira font-bold text-black'>Selection for a Trip to Vegas:</span>If your friend or your referrer have won, you may be chosen to go to Vegas.
                </p>
                <p className='text-black text-left saira text-[12px] font-medium leading-[15px] mt-3 ml-2'>
                    2. <span className='saira font-bold text-black'>Raffle Participation:</span>Alternatively, you can participate in the raffle by possessing raffle tickets.
                </p>
                <p className='text-black text-left saira text-[12px] font-medium leading-[15px] mt-3'>
                    For additional information, please refer to the <span className='saira underline text-black cursor-pointer'>competition details.</span>
                </p>
            </Tooltip>
            <TimeCounter />

            {
                tourModal && <TourModal setOpen={setTourModal} />
            }
        </div>
    )
}

export default RaffleTickets
