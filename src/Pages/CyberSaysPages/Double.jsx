import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip'
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import moreInfo from '../../images/CyberSaysPage/moreInfo.png'
import hero from '../../images/CyberSaysPage/heroRaffle.png'
import notReady from '../../images/CyberSaysPage/card_notReady.png'
import done from '../../images/CyberSaysPage/card_done.png'
import TimeCounter from '../../Components/TimeCounter'
import TaskCard from '../../Components/TaskCard';

function Double() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className=' w-screen h-screen bg-[url(./images/CyberSaysPage/mobile-bg-double.jpg)] bg-cover bg-no-repeat bg-center relative z-10' onClick={() => setIsOpen(false)}>
            <div className='pt-[60px] px-4' >
                <img className='w-[310px] m-auto' src={logoCyber} alt="logoCyber" />
                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[50px] text-center mx-[50px] px-4'>
                    <p className='text-[14px] font-semibold'>“Double your money and get your raffle eligibility”</p>
                </div>
                <p className='text-[12px] text-[#FFED63] text-center cursor-pointer flex items-center justify-center'>
                    A
                    <span className='mx-1'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.66667 9L2 6" stroke="#81FFB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    will appear after task is completed
                </p>
                <TaskCard state={'finished'} background={'#B9A1E1'} />
                <TaskCard state={'active'} background={'#93CC8E'} />
                <TaskCard state={'inactive'} background={'#EA7C7C'} />
                <TaskCard state={'inactive'} background={'#76C2E3'} />
            </div>


            <TimeCounter  />

        </div>
    )
}

export default Double
