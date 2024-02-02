import React, { useEffect, useState } from 'react'
import notReady from '../../images/CyberSaysPage/card_notReady.png'
import done from '../../images/CyberSaysPage/card_done.png'
import { Link } from 'react-router-dom'
import { useDesign } from '../../Helpers/Design/DesignContext'

function TaskCard({ state, background, data, index, imLiveURL, rounded }) {

    const { design } = useDesign()

    const [cardState, setCardState] = useState(null)

    useEffect(() => {
        if (index === 1 && state === 'inactive') {
            setCardState('active')
        } else {
            setCardState(state)
        }
    }, [state])

    const getMarkup = () => {
        switch (cardState) {
            case 'active': return activeState()
            case 'finished': return finishedState()
            case 'inactive': return inactiveState()
            default: return null
        }
    }
    {/*
    const activeState = () => {
        return <>
            <div className='flex justify-between items-center'>
                <p className='saira text-[12px] md:text-[14px] font-medium'>{index}. {data?.taskTitleOpen}</p>
                <img className='w-[18px] h-[18px]' src={notReady} alt="notReady" />
            </div>

            <div className='flex justify-between'>
                {
                    data?.taskBlocks?.map((task, index) => {
                        return <div key={index} className='flex flex-col items-center mt-2'>
                            <img className='w-[20px] md:w-[30px]' src={task?.taskImage} alt="Task Icon" />
                            <p className='saira text-[12px] md:text-[14px] font-medium text-center'>{task?.taskText}</p>
                        </div>
                    })
                }
            </div>

            <div className='flex justify-center my-2'>
                <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-1'>{data?.taskButton}</button>
            </div>
            
        </>
    }
*/}

    const [linkCopied, setLinkCopied] = useState(false)

    const copyImLiveLink = () => {
        navigator.clipboard.writeText(imLiveURL)
        setLinkCopied(true)
    }

    const activeState = () => {
        return <>
            <div className='flex justify-between items-center mx-1  sm:mx-3 '>
                <p className='saira text-[12px] md:text-[14px] font-medium '>{index}. {data?.taskTitleOpen}</p>
                <img className='w-[18px] h-[18px]' src={design === '0' ? notReady  : require('../../images/NewDesign/Task/notReady.png')} alt="notReady" />
            </div>

            <div className='flex justify-center '>
                {
                    data?.taskBlocks?.map((task, key) => {
                        return <div key={key} className='flex  items-center se:mt-1 mt-2 relative '>
                            <img className='w-[330px] sm:w-[555px] m-auto relative' src={task?.taskImage} alt="Task Icon" />
                            <p className={`saira text-[10px] sm:text-[17px] text-black font-medium absolute text-left leading-[12px] sm:leading-[20px] ${index === 1 ? 'w-[150px] sm:w-[265px] top-[15px] sm:top-[25px] right-[25px] sm:right-[45px]' :
                                index === 2 ? 'w-[140px] sm:w-[235px]  top-[15px] sm:top-[25px] left-[35px] sm:left-[55px]' :
                                    index === 3 ? 'w-[160px] sm:w-[270px] top-[15px] sm:top-[25px] right-[35px] sm:right-[65px]' :
                                        index === 4 ? 'w-[165px] sm:w-[280px] top-[10px] sm:top-[15px] left-[60px] sm:left-[100px]' :
                                            ''}`}>{task?.taskText}</p>
                        </div>
                    })
                }
            </div>

            <div className='flex justify-center mt-[-20px] md:mt-[-30px] relative z-50 max-w-[330px] w-full sm:max-w-[555px] m-auto'>
                <Link className='w-full' to={imLiveURL}><button className={`w-full bg-white  border-[2px] border-[#FFED63]  text-black text-[18px] saira font-semibold py-1 sm:py-2 ${design === '0' ? ' se:py-[6px] py-2 md:py-3 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{data?.taskButton}</button></Link>
            </div>
            <p onClick={e => copyImLiveLink()} className={`saira text-[14px] cursor-pointer underline text-center mb-[-5px] py-2 pb-6 font-semibold ${linkCopied === true ? 'opacity-60' : ''}`}>Copy link</p>
        </>
    }

    const finishedState = () => {
        return <div className='flex justify-between items-center mx-1  sm:mx-3 '>
            <p className='saira text-[12px] md:text-[14px] font-medium'>{index}. {data?.taskTitle}</p>
            <img className='w-[18px] h-[18px]' src={design === '0' ? done  : require('../../images/NewDesign/Task/done.png')} alt="done" />
        </div>
    }

    const inactiveState = () => {
        return <div className='flex justify-between items-center mx-1   sm:mx-3'>
            <p className='saira text-[12px] md:text-[14px] font-medium'>{index}. {data?.taskTitle}</p>
            <img className='w-[18px] h-[18px]' src={design === '0' ? notReady  : require('../../images/NewDesign/Task/notReady.png')} alt="notReady" />
        </div>
    }

    const getBackground = () => {
        switch (cardState) {
            case 'active':
                return background;
            case 'finished':
                return '#EAEAEA33';
            case 'inactive':
                return background;
            default:
                return background;
        }
    };
    const getPaddingBottom = () => {
        switch (cardState) {
            case 'active':
                return '0';
            case 'finished':
                return '40px';
            case 'inactive':
                return '20px';
            default:
                return '0';
        }
    };
    const marginTop = () => {
        switch (cardState) {
            case 'active':
                return '-37px';
            case 'finished':
                return '-37px';
            case 'inactive':
                return '-20px';
            default:
                return '0';
        }
    };

    return (

        <div style={{ background: getBackground(), paddingBottom: getPaddingBottom(), marginTop: marginTop() }} className={`w-full rounded-t-[20px] ${rounded} bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg  se:p-[6px]  p-2 se:my-0 my-2  `}>
            {
                getMarkup()
            }

        </div>

    )
}

export default TaskCard
