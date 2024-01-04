import React, { useEffect, useState } from 'react';
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import TimeCounter from '../../Components/TimeCounter'
import TaskCard from '../../Components/DoubleMoneyPage/TaskCard';
import congrats from '../../images/CyberSaysPage/congrats.png'

function Double({ languageData, user, imLiveURL }) {
    const [isOpen, setIsOpen] = useState(false)

    const [taskStatus, setTaskStatus] = useState(null)

    const getTaskStatus = (task) => {
        if (user && user === undefined) return 'inactive'
        if (user?.completed_tasks === null) return 'inactive'

        let finishedTasks = JSON.parse(user?.completed_tasks) || []
        let sortedTasks = finishedTasks.sort((a, b) => a - b)
        let lastTask = sortedTasks[sortedTasks.length - 1]

        if (finishedTasks.includes(task)) {
            return 'finished'
        } else {
            if (lastTask === task - 1) {
                return 'active'
            } else {
                return 'inactive'
            }

        }
    }

    useEffect(() => {
        if (user && user !== undefined) {
            let taskStatusArray = []

            for (let i = 1; i <= 4; i++) {
                taskStatusArray.push(getTaskStatus(i))
                setTaskStatus(taskStatusArray)
            }
        }
    }, [user])

    return (
        <div className=' w-screen h-screen bg-[url(./images/CyberSaysPage/mobile-bg-double.jpg)] bg-cover bg-no-repeat bg-center relative z-10' onClick={() => setIsOpen(false)}>
            <div className='pt-[60px] px-4  md:pt-[90px] max-w-[1170px] m-auto' >
                <img className='se:w-[230px] se:mb-[-5px] iphone:w-[310px]  md:w-[500px] m-auto md:mb-[-20px]' src={logoCyber} alt="logoCyber" />
                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[100px] text-center mx-[50px] md:mx-[100px] px-4 md:py-2'>
                    <p className='text-[14px] md:text-[32px] font-semibold md:mx-[40px] iphone:leading-[unset] se:leading-4'>“Double your money and get your raffle eligibility”</p>

                </div>
                <p className='text-[12px] md:text-[14px] text-[#FFED63] text-center cursor-pointer flex items-center justify-center  md:py-2'>
                    A
                    <span className='mx-1'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.66667 9L2 6" stroke="#81FFB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    will appear after task is completed
                </p>
                <div className='max-w-[600px] m-auto'>
                    {
                        taskStatus !== null && <>
                            <TaskCard data={languageData?.tasks?.task1} state={taskStatus[0]} background={'#B9A1E1'} index={1} imLiveURL={imLiveURL} />
                            <TaskCard data={languageData?.tasks?.task2} state={taskStatus[1]} background={'#93CC8E'} index={2} imLiveURL={imLiveURL} />
                            <TaskCard data={languageData?.tasks?.task3} state={taskStatus[2]} background={'#EA7C7C'} index={3} imLiveURL={imLiveURL} />
                            <TaskCard data={languageData?.tasks?.task4} state={taskStatus[3]} background={'#76C2E3'} index={4} imLiveURL={imLiveURL} />
                        </>
                    }
                </div>
                {/*
                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[20px] max-w-[600px] m-auto p-4'>
                    <p className='text-[20px] md:text-[32px] font-semibold text-center '>We have doubled your money!</p>
                    <img className='max-w-[200px] md:max-w-[400px] w-full m-auto mt-2' src={congrats} alt="congrats" />
                    <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-1 flex justify-center mt-3'>
                        Win the Vegas weekend
                    </button>
                    <p className='text-[14px] font-medium text-center mt-2 saira leading-[16px] md:leading-[18px]'>Feel always like a king with ImLive and note that every ticket you'll buy will entitle you with 1 lottery tickets to the raffle</p>
                </div>
                */}
            </div>


            <div className='flex absolute  se:bottom-[130px] iphone:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] justify-center w-full  m-auto left-1/2 transform -translate-x-1/2 '>
                <TimeCounter />
            </div>

        </div>
    )
}

export default Double
