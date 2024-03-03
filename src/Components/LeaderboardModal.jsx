import React, { useState } from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../Helpers/Design/DesignContext'
import LeaderboardList from './LeaderboardList'

function LeaderboardModal({ setOpen, leaderboardData, loading, languageData, user }) {

    const { design } = useDesign()

    const [dayOffset, setDayOffset] = useState(0);

    const handleClick = (offset) => {
        let newOffset = dayOffset + offset;
        if (newOffset < -2) {
            newOffset = 0;
        } else if (newOffset > 0) {
            newOffset = -2;
        }
        setDayOffset(newOffset);
    };

    const getDateLabel = (offset) => {
        if (offset === 0) {
            return <LeaderboardList leaderboardData={leaderboardData.todayUsers} languageData={languageData} day={'Today'} />;
        } else if (offset === -1) {
            return <LeaderboardList leaderboardData={leaderboardData.yesterdayUsers} languageData={languageData} day={'Yesterday'} />;
        } else if (offset === -2) {
            return <LeaderboardList leaderboardData={leaderboardData.dayBeforeYesterdayUsers} languageData={languageData} day={'2 days ago'} />;
        }
    };
    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='max-w-[600px] m-auto'>


                <div className='flex justify-end md:my-4'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                {
                  leaderboardData?.userRankData &&  <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-md rounded-[12px] p-1 px-1  flex justify-between max-w-[380px] md:max-w-[100%] m-auto'>
                        <div className=' leading-4 text-left m-auto'>
                            <p className='gradient-linkDouble saira text-[14px] lg:text-[18px] font-bold'>{languageData?.leaderSheetYou} <span className='saira text-[14px] lg:text-[18px] font-bold'> #{leaderboardData?.userRankData?.position || 0},</span> {languageData?.leaderSheetPoints} <span className='saira text-[14px] lg:text-[18px] font-bold'>{Number(user?.points).toFixed(0)}</span></p>
                        </div>
                    </div>
                }
                {
                    loading === true
                        ? 'Loading...'
                        : <>
                            {
                                leaderboardData.userData && <div className={`bg-[#EAEAEA] ${design === '0' ? 'bg-opacity-40 ' : 'bg-opacity-20 '} backdrop-blur-lg rounded-[30px] text-center flex py-2 px-4 mx-3 justify-between items-center mt-3 sm:mt-10`}>
                                    <p className={`saira text-[16px] font-bold  ${design === '0' ? 'text-[#FFED63]' : 'gradient-linkDouble'}`}>#{leaderboardData?.userData.position}</p>
                                    <div className='leading-3'>
                                        <p className={`saira text-[12px] md:text-[14px] font-bold text-[#FFED63] mt-[-3px] ${design === '0' ? 'text-[#FFED63]' : 'gradient-linkDouble'}`}>{leaderboardData?.userData?.points?.toFixed(0)}</p>
                                        <p className='saira text-[12px] md:text-[14px] font-medium mt-[3px]'>{languageData?.leaderboardsPoints}</p>
                                    </div>
                                </div>
                            }
                            <p className={` text-[18px] md:text-[32px] font-semibold text-center mt-3`}>{languageData?.leaderboardsTitle}</p>
                            <div className='flex justify-between items-center my-4'>
                                <svg onClick={() => handleClick(-1)} className={`cursor-pointer ${dayOffset === -2 ? 'opacity-[0.4] pointer-events-none' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 22L7 12L17 2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <p className='text-[16px] saira font-bold gradient-linkDouble'></p>
                                <svg onClick={() => handleClick(1)} className={`cursor-pointer ${dayOffset === 0 ? 'opacity-[0.4] pointer-events-none' : ''}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 2L17 12L7 22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>{getDateLabel(dayOffset)}</div>
                        </>
                }

            </div>
        </div>
    )
}

export default LeaderboardModal
