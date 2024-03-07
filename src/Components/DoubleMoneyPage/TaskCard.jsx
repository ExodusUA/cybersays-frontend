import React, { useEffect, useState } from 'react'
import notReady from '../../images/CyberSaysPage/card_notReady.png'
import done from '../../images/CyberSaysPage/card_done.png'
import { Link } from 'react-router-dom'
import { useDesign } from '../../Helpers/Design/DesignContext'
import mixpanel from 'mixpanel-browser'

function TaskCard({ state, background, data, index, imLiveURL, rounded, open, manualSelect, setSelectedTask, tasks, user, languageData }) {

    const { design } = useDesign()

    const [cardState, setCardState] = useState(null)

    useEffect(() => {
        if (manualSelect === true) {
            setCardState('inactive')

            if (tasks?.includes(3) && index === 3) {
                setCardState('active')
            } else {
                setCardState('inactive')
            }
        } else {
            if (index === 1 && state === 'inactive') {
                setCardState('active')
            } else {
                setCardState(state)
            }
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

    const [linkCopied, setLinkCopied] = useState(false)

    const copyImLiveLink = () => {
        navigator.clipboard.writeText(imLiveURL)
        setLinkCopied(true)
    }

    const activeState = () => {
        return <>
            <div className='flex justify-between items-center mx-1  sm:mx-3 cursor-pointer'>
                <p className='saira text-[12px] md:text-[14px] font-medium flex items-center'>{index}. {data?.taskTitleOpen}
                    {/*
                    <span className='truncate saira text-[12px] md:text-[14px] font-medium ml-1 w-[50px] md:w-[180px] block'>
                        {user?.email}
                    </span>
                    */}
                </p>
                {
                    tasks?.includes(index) ? <img className='w-[18px] h-[18px]' src={design === '0' ? done : require('../../images/NewDesign/Task/done.png')} alt="done" /> : <img className='w-[18px] h-[18px]' src={design === '0' ? notReady : require('../../images/NewDesign/Task/notReady.png')} alt="notReady" />
                }

            </div>

            <div className='flex justify-center '>
                {
                    data?.taskBlocks?.map((task, key) => {
                        return <div key={key} className='flex  items-center se:mt-1 mt-2 relative '>
                            <img className='w-[330px] sm:w-[555px] min-h-[86px] sm:min-h-[145px] m-auto relative' src={design === '0' ? task?.taskImage : task?.newTaskImage} alt="Task Icon" />
                            <p className={`saira text-[10px] sm:text-[14px] text-black font-medium absolute text-left leading-[12px] sm:leading-[20px] ${index === 1 ? `${design === '0' ? 'w-[150px] sm:w-[265px] top-[15px] sm:top-[25px] right-[25px] sm:right-[45px]' : 'w-[180px] sm:w-[305px] top-[17px] sm:top-[30px] right-[15px] sm:right-[25px] text-white'}` :
                                index === 2 ? `${design === '0' ? 'w-[140px] sm:w-[235px]  top-[15px] sm:top-[25px] left-[35px] sm:left-[55px]' : 'w-[200px] sm:w-[330px]  top-[20px] sm:top-[35px] left-[30px] sm:left-[45px] text-white'}` :
                                    index === 3 ? `${design === '0' ? 'w-[160px] sm:w-[270px] top-[15px] sm:top-[25px] right-[35px] sm:right-[65px]' : 'w-[205px] sm:w-[350px] top-[18px] sm:top-[30px] right-[35px] sm:right-[55px] text-white'}` :
                                        index === 4 ? `${design === '0' ? 'w-[165px] sm:w-[280px] top-[10px] sm:top-[15px] left-[60px] sm:left-[100px]' : 'w-[200px] sm:w-[340px] top-[18px] sm:top-[30px] left-[40px] sm:left-[70px] text-white'}` :
                                            ''}`}>{task?.taskText}</p>
                        </div>
                    })
                }
            </div>

            <div className='flex justify-center mt-[-20px] md:mt-[-30px] relative z-50 max-w-[330px] w-full sm:max-w-[555px] m-auto'>
                <Link className='w-full' to={imLiveURL} target='_blank'><button className={`w-full bg-white  border-[2px] border-[#FFED63]  text-black text-[18px] saira font-semibold py-1 sm:py-2 ${design === '0' ? ' se:py-[6px] py-2 md:py-2 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{data?.taskButton}</button></Link>
            </div>
            <p onClick={e => {
                copyImLiveLink()
                mixpanel.track("copy_link", {
                    distinct_id: 'not_set',
                    is_referred: user?.referral_id ? 'Yes' : 'No',
                    vegas_tickets: user?.raffle_tickets,
                    points: user?.points,
                    user_id: user?.id,
                    USD_earned: user?.allTimeEarned,
                    user_email: user?.email,
                    page: 'Double your Money'
                });
            }

            } className={`saira text-[14px] cursor-pointer underline text-center mb-[-5px] py-2 pb-3 font-semibold  ${linkCopied === true ? 'opacity-60' : ''}`}>{languageData?.CopyLink}</p>
        </>
    }

    const finishedState = () => {
        return <div className='flex justify-between items-center mx-1 sm:mx-3 cursor-pointer' onClick={e => setSelectedTask(index)}>
            <p className='saira text-[12px] md:text-[14px] font-medium'>{index}. {data?.taskTitle}</p>
            {
                tasks?.includes(index) ? <img className='w-[18px] h-[18px]' src={design === '0' ? done : require('../../images/NewDesign/Task/done.png')} alt="done" /> : <img className='w-[18px] h-[18px]' src={design === '0' ? notReady : require('../../images/NewDesign/Task/notReady.png')} alt="notReady" />
            }
        </div>
    }

    const inactiveState = () => {
        return <div className='flex justify-between items-center mx-1 cursor-pointer  sm:mx-3' onClick={e => setSelectedTask(index)}>
            <p className='saira text-[12px] md:text-[14px] font-medium'>{index}. {data?.taskTitle}</p>
            {
                tasks?.includes(index) ? <img className='w-[18px] h-[18px]' src={design === '0' ? done : require('../../images/NewDesign/Task/done.png')} alt="done" /> : <img className='w-[18px] h-[18px]' src={design === '0' ? notReady : require('../../images/NewDesign/Task/notReady.png')} alt="notReady" />
            }
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

        <div style={{ background: getBackground(), paddingBottom: getPaddingBottom(), marginTop: marginTop() }} className={`w-full rounded-t-[20px] ${rounded} bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg  se:p-[6px]  p-2 se:my-1 my-2  `}>
            {
                open !== true && getMarkup()
            }

            {
                open === true && activeState()
            }

        </div>

    )
}

export default TaskCard
