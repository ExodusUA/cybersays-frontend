import React, { useEffect, useState } from 'react'
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import girlOK from '../../images/CyberSaysPage/girl_OK.png'
import imLiveLogo from '../../images/CyberSaysPage/imLiveLogo.png'
import TimeCounter from '../../Components/TimeCounter'
import { Link } from 'react-router-dom'

function Homepage({ user, imLiveURL }) {

    const [lastTask, setLastTask] = useState(0)

    const getButtonMarkup = (task) => {
        switch (task) {
            case 0: return <Link to={imLiveURL}><button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2'>Double your money 🤑</button></Link>
            case 1: return <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2'>2/4: Deposit for 200% Cashback 🤑</button>
            case 2: return <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2'>3/4: Spend for 200% Cashback 🤑</button>
            case 3: return <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2'>Win the Vegas Weekend 💃</button>
        }
    }

    useEffect(() => {
        if (user === null) return setLastTask(0)

        let tasks = JSON.parse(user?.completed_tasks)
        let lastTask = tasks[tasks.length - 1]
        setLastTask(lastTask)
    }, [user])


    return (
        <div className=' w-screen h-screen bg-[url(./images/CyberSaysPage/mobile-bg-homepage.jpg)] bg-cover bg-no-repeat bg-center relative z-10'>
            <div className='pt-[60px] px-4 pb-12'>
                <img className='w-[310px] m-auto' src={logoCyber} alt="logoCyber" />
                <div className='flex justify-between items-start mt-3'>
                    <img className='w-[180px]' src={girlOK} alt="girlOK" />
                    <div className='ml-1'>
                        <p className=' text-[18px] font-semibold'>“Double your money and win the Vegas weekend!“</p>
                        <img className='w-[160px]' src={imLiveLogo} alt="imLiveLogo" />
                    </div>
                </div>
                {
                    getButtonMarkup(lastTask)
                }
            </div>
            <TimeCounter />
        </div>
    )
}

export default Homepage
