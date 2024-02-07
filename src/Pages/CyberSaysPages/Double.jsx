import React, { useEffect, useState } from 'react';
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import TimeCounter from '../../Components/TimeCounter'
import TaskCard from '../../Components/DoubleMoneyPage/TaskCard';
import congrats from '../../images/CyberSaysPage/congrats.png'
import { useDesign } from '../../Helpers/Design/DesignContext'
import newlogoCyber from '../../images/NewDesign/newLogo_main.png'

function Double({ languageData, user, imLiveURL, setOpen }) {

    const { design } = useDesign()

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
        <div className={` w-screen h-screen ${design === '0' ? 'bg-[url(./images/CyberSaysPage/mobile-bg-double.jpg)] md:bg-[url(./images/CyberSaysPage/bg-double.jpg)]' : ' bg-[url(./images/NewDesign/Bg/double_des.png)]'}  bg-cover bg-no-repeat bg-center relative z-10`} onClick={() => setIsOpen(false)}>
            <div className='pt-[97px] px-4  md:pt-[135px] max-w-[1170px] m-auto' >
                <img className='se:w-[170px] se:mb-[-5px] w-[170px] iphone:w-[170px] md:w-[320px] m-auto' src={design === '0' ? logoCyber : newlogoCyber} alt="logoCyber" />
                <div className='mac:max-w-[550px] md:max-w-[1000px] md:mx-[180px] m-auto'>
                    <div className={`bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg  text-center py-1  px-4 md:py-2 ${design === '0' ? 'rounded-[100px]' : 'rounded-[14px] lg:rounded-[24px]'}`}>
                        <p className='text-[14px] md:text-[32px] mac2:!text-[20px] font-semibold  iphone:leading-[unset] se:leading-4 mac2:!leading-[22px]'>{languageData?.doubleTitle}</p>

                    </div>
                </div>

                <p className={`text-[12px] md:text-[14px] ${design === '0' ? 'text-[#FFED63]' : 'gradient-linkDouble font-semibold'}  text-center cursor-pointer flex items-center justify-center  md:py-2 mb-10`}>
                    {languageData?.doubleSubtitleSpan}
                    <span className='mx-1'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.66667 9L2 6" stroke="#81FFB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    {languageData?.doubleSubtitle}
                </p>
                <div className='max-w-[600px] m-auto'>
                    {
                        taskStatus !== null && <>
                            <TaskCard data={languageData?.tasks?.task1} state={taskStatus[0]} background={design === '0' ? '#B9A1E1' : '#4F97CB'} rounded={'rounded-t-[20px] '} index={1} imLiveURL={imLiveURL} />
                            <TaskCard data={languageData?.tasks?.task2} state={taskStatus[0]} background={design === '0' ? '#93CC8E' : '#32B28C'} rounded={'rounded-t-[20px] '} index={2} imLiveURL={imLiveURL} />
                            <TaskCard data={languageData?.tasks?.task3} state={taskStatus[2]} background={design === '0' ? '#EA7C7C' : '#D76666'} rounded={'rounded-t-[20px] '} index={3} imLiveURL={imLiveURL} />
                            <TaskCard data={languageData?.tasks?.task4} state={taskStatus[3]} background={design === '0' ? '#76C2E3' : '#9E64D8'} rounded={'rounded-[20px] !pb-[5px]'} index={4} imLiveURL={imLiveURL} />
                        </>
                    }
                </div>
                <div className='flex justify-center'>
                <p onClick={e => setOpen(true)} className={`text-center text-[12px] sm:text-[14px] saira font-semibold underline mt-2 se:mb-2 iphone:mb-5 mac:!mb-2 cursor-pointer  ${design === '0' ? 'text-white' : 'gradient-link flex justify-center'}`}>{languageData?.doublePaid}</p>

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


            <div className='flex mobMax:!flex mac:hidden  absolute  se:bottom-[130px] iphone:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] justify-center w-full  m-auto left-1/2 transform -translate-x-1/2 '>
                <TimeCounter languageData={languageData} />
            </div>

        </div>
    )
}

export default Double
