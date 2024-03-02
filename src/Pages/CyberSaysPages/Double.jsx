import React, { useEffect, useState } from 'react';
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import TimeCounter from '../../Components/TimeCounter'
import TaskCard from '../../Components/DoubleMoneyPage/TaskCard';
import congrats from '../../images/CyberSaysPage/congrats.png'
import { useDesign } from '../../Helpers/Design/DesignContext'
import newlogoCyber from '../../images/NewDesign/newLogo_main.png'
import doubleIcon from '../../images/NewDesign/doubleIcon.svg'
import { Link } from 'react-router-dom';
import TaskCardDesktop from '../../Components/DoubleMoneyPage/TaskCardDesktop';

function Double({ languageData, user, imLiveURL, setOpen }) {

    const { design } = useDesign()

    const [isOpen, setIsOpen] = useState(false)
    const [selectedTask, setSelectedTask] = useState(2)

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
    }, [user, selectedTask])
    const [lastTask, setLastTask] = useState(0)

    useEffect(() => {
        if (user === null) return setLastTask(0)

        let tasks = JSON.parse(user?.completed_tasks)
        if (tasks === null) return setLastTask(0)
        let lastTask = tasks[tasks.length - 1]
        setLastTask(lastTask)
    }, [user])

    const getButtonMarkup = (task) => {
        switch (task) {
            case 0:
            case null:
            case undefined:
                return <div className='max-w-[380px] w-full px-1'>
                    <p className='text-center text-[18px] font-semibold '>{languageData.doubleBtnTitle}</p>
                    <Link to={imLiveURL} target='_blank'> <button className={`w-full border-[#FFED63]  text-black text-[18px]  saira font-semibold flex justify-center items-center my-1 ${design === '0' ? 'py-1 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>1/3: Register!</button></Link>
                    <p className='text-center text-[14px] font-semibold saira'><span className=' text-[14px] font-semibold saira gradient-linkDouble'>7 {languageData.doubleBtnAway}</span> {languageData.doubleBtnFrom}</p>
                </div>
            case 1: return <div className='max-w-[380px] w-full px-1'>
                <p className='text-center text-[18px] font-semibold '>{languageData.doubleBtnTitle}</p>
                <Link to={imLiveURL} target='_blank'><button className={`w-full bg-white   border-[#FFED63]  text-black text-[18px]  saira font-semibold flex justify-center items-center my-1 ${design === '0' ? 'py-1 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>2/3: Deposit!</button></Link>
                <p className='text-center text-[14px] font-semibold saira'><span className=' text-[14px] font-semibold saira gradient-linkDouble'>5 {languageData.doubleBtnAway}</span> {languageData.doubleBtnFrom}</p>
            </div>
            case 2: return <div className='max-w-[380px] w-full px-1'>
                <p className='text-center text-[18px] font-semibold '>{languageData.doubleBtnTitle}</p>
                <Link to={imLiveURL} target='_blank'><button className={`w-full  bg-white   border-[#FFED63]  text-black text-[18px]  saira font-semibold flex justify-center items-center my-1 ${design === '0' ? 'py-1 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>3/3: Spend!</button></Link>
                <p className='text-center text-[14px] font-semibold saira'><span className=' text-[14px] font-semibold saira gradient-linkDouble'>3 {languageData.doubleBtnAway}</span> {languageData.doubleBtnFrom}</p>
            </div>

        }
    }
    return (
        <div className={` w-screen h-screen ${design === '0' ? 'bg-[url(./images/CyberSaysPage/mobile-bg-double.jpg)] md:bg-[url(./images/CyberSaysPage/bg-double.jpg)]' : ' bg-[#200527]'}  bg-cover bg-no-repeat bg-center relative z-10 mac-center:flex`} onClick={() => setIsOpen(false)}>
            <div className='pt-[57px] md:pt-[90px] px-4  mac-center:!pt-0 max-w-[1170px] m-auto' >
                <img className='se:w-[170px] se:mb-[-5px] w-[170px] iphone:w-[170px] md:w-[320px] mac2:!w-[170px] m-auto' src={design === '0' ? logoCyber : newlogoCyber} alt="logoCyber" />
                <div className='mac:max-w-[550px] md:max-w-[1200px] md:mx-[120px] m-auto'>
                    <div className={`bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg  text-center max-w-[280px] sm:max-w-[unset] m-auto py-2  px-4 md:py-2 ${design === '0' ? 'rounded-[100px]' : 'rounded-[14px] lg:rounded-[24px]'}`}>
                        <p className='text-[14px] iphone:text-[14px] md:text-[24px] mac2:text-[14px] font-semibold  iphone:leading-[unset] se:leading-4 mac2:!leading-[22px]'>{languageData?.doubleTitle}</p>

                    </div>
                </div>

                <p className={`text-[12px] md:text-[14px] ${design === '0' ? 'text-[#FFED63]' : 'gradient-linkDouble font-semibold'}  text-center cursor-pointer flex items-center justify-center  md:py-2 mb-5`}>
                    {languageData?.doubleSubtitleSpan}
                    <span className='mx-1'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 3L4.66667 9L2 6" stroke="#81FFB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </span>
                    {languageData?.doubleSubtitle}
                </p>
                <div className='max-w-[600px] m-auto block lg:hidden'>
                    {
                        taskStatus !== null && <>
                            <TaskCard tasks={JSON.parse(user?.completed_tasks)} data={languageData?.tasks?.task1} setSelectedTask={setSelectedTask} state={taskStatus[0]} manualSelect={selectedTask !== null} open={selectedTask === 1} background={design === '0' ? '#B9A1E1' : '#4F97CB'} rounded={'rounded-t-[20px] '} index={1} imLiveURL={imLiveURL} />
                            <TaskCard tasks={JSON.parse(user?.completed_tasks)} data={languageData?.tasks?.task2} setSelectedTask={setSelectedTask} state={taskStatus[1]} manualSelect={selectedTask !== null} open={selectedTask === 2} background={design === '0' ? '#93CC8E' : '#32B28C'} rounded={'rounded-t-[20px] '} index={2} imLiveURL={imLiveURL} />
                            <TaskCard tasks={JSON.parse(user?.completed_tasks)} data={languageData?.tasks?.task3} setSelectedTask={setSelectedTask} state={taskStatus[2]} manualSelect={selectedTask !== null} open={selectedTask === 3} background={design === '0' ? '#EA7C7C' : '#D76666'} rounded={'rounded-[20px] !pb-[5px]'} index={3} imLiveURL={imLiveURL} />
                            {/*<TaskCard user={user} tasks={JSON.parse(user?.completed_tasks)} data={languageData?.tasks?.task4} setSelectedTask={setSelectedTask} state={taskStatus[3]} manualSelect={selectedTask !== null} open={selectedTask === 4} background={design === '0' ? '#76C2E3' : '#9E64D8'} rounded={'rounded-[20px] !pb-[5px]'} index={4} imLiveURL={imLiveURL} />*/}
                        </>
                    }
                </div>
                <div className='max-w-[920px] m-auto lg:flex hidden '>
                    {
                        taskStatus !== null && <>
                            <TaskCardDesktop tasks={JSON.parse(user?.completed_tasks)} data={languageData?.tasks?.task1} setSelectedTask={setSelectedTask} state={taskStatus[0]} manualSelect={selectedTask !== null} open={selectedTask === 1} background={design === '0' ? '#B9A1E1' : '#4F97CB'} rounded={'rounded-[20px]'} mt={'mt-5'}  index={1} imLiveURL={imLiveURL} />
                            <TaskCardDesktop tasks={JSON.parse(user?.completed_tasks)} data={languageData?.tasks?.task2} setSelectedTask={setSelectedTask} state={taskStatus[1]} manualSelect={selectedTask !== null} open={selectedTask === 2} background={design === '0' ? '#93CC8E' : '#32B28C'} rounded={'rounded-[20px]'} index={2} imLiveURL={imLiveURL} />
                            <TaskCardDesktop tasks={JSON.parse(user?.completed_tasks)} data={languageData?.tasks?.task3} setSelectedTask={setSelectedTask} state={taskStatus[2]} manualSelect={selectedTask !== null} open={selectedTask === 3} background={design === '0' ? '#EA7C7C' : '#D76666'} rounded={'rounded-[20px] !pb-[5px]'} index={3} imLiveURL={imLiveURL} />
                            {/*<TaskCard user={user} tasks={JSON.parse(user?.completed_tasks)} data={languageData?.tasks?.task4} setSelectedTask={setSelectedTask} state={taskStatus[3]} manualSelect={selectedTask !== null} open={selectedTask === 4} background={design === '0' ? '#76C2E3' : '#9E64D8'} rounded={'rounded-[20px] !pb-[5px]'} index={4} imLiveURL={imLiveURL} />*/}
                        </>
                    }
                </div>
                <div className='flex justify-center'>
                    <p onClick={e => setOpen(true)} className={`text-center text-[12px] sm:text-[14px] saira font-semibold underline mt-2  cursor-pointer  ${design === '0' ? 'text-white' : 'gradient-link flex justify-center'}`}>{languageData?.doublePaid}</p>

                </div>
                <div className='flex absolute se:bottom-[140px] iphone:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] justify-center w-full  m-auto left-1/2 transform -translate-x-1/2'>
                    {
                       getButtonMarkup(selectedTask - 1)
                    }
                </div>
                {/*
                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[20px] max-w-[600px] m-auto p-4'>
                    <p className='text-[20px] md:text-[32px] font-semibold text-center '>We have doubled your money!</p>
                    <img className='max-w-[200px] md:max-w-[400px] w-full m-auto mt-2' src={congrats} alt="congrats" />
                    <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-1 flex justify-center mt-3'>
                        Show me the next page!
                    </button>
                    <p className='text-[14px] font-medium text-center mt-2 saira leading-[16px] md:leading-[18px]'>Withdraw your money</p>
                </div>
                */}
            </div>


            {
                /*
                <div className='flex mobMax:!flex mac:hidden  absolute  se:bottom-[130px] iphone:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] justify-center w-full  m-auto left-1/2 transform -translate-x-1/2 '>
                <TimeCounter title={languageData?.timeCounterTitle} languageData={languageData} />
            </div>
                */
            }

        </div>
    )
}

export default Double
