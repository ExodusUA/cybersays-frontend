import React, { useEffect, useState } from 'react';
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import TimeCounter from '../../Components/TimeCounter'
import TaskCard from '../../Components/DoubleMoneyPage/TaskCard';

function Double({ languageData, user }) {
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
                {
                    taskStatus !== null && <>
                        <TaskCard data={languageData?.tasks?.task1} state={taskStatus[0]} background={'#B9A1E1'} index={1} />
                        <TaskCard data={languageData?.tasks?.task2} state={taskStatus[1]} background={'#93CC8E'} index={2} />
                        <TaskCard data={languageData?.tasks?.task3} state={taskStatus[2]} background={'#EA7C7C'} index={3} />
                        <TaskCard data={languageData?.tasks?.task4} state={taskStatus[3]} background={'#76C2E3'} index={4} />
                    </>
                }


            </div>


            <TimeCounter />

        </div>
    )
}

export default Double
