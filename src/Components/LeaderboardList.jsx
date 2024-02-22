import React, { useEffect } from 'react'
import { useDesign } from '../Helpers/Design/DesignContext'
import oneSt from '../images/CyberSaysPage/1st.png'
import twoSt from '../images/CyberSaysPage/2st.png'
import threeSt from '../images/CyberSaysPage/3st.png'
import crown from '../images/CyberSaysPage/crown1st.png'
import no_avatar from '../images/CyberSaysPage/no_avatar.png'

function LeaderboardList({ leaderboardData, languageData, day }) {
    const { design } = useDesign()

    useEffect(() => {
        console.log('leaderboardData', leaderboardData)
    }, [leaderboardData])

    return (
        <div className='relative'>
            <div className='absolute top-[-40px] left-1/2 transform -translate-x-1/2'>
                <p className='text-[16px] saira font-bold gradient-linkDouble select-none'>{day}</p>
            </div>
            <div className=' flex items-end justify-center'>
                {
                    leaderboardData[1] && <div className='mr-[-15px] md:mr-[30px] w-[80px] md:w-[100px]'>
                        <p className='text-center saira text-[16px] font-bold'>2</p>
                        <img className={`border-[2px] rounded-full w-[80px] h-[80px] object-cover m-auto ${design === '0' ? 'border-[#FFED63]' : 'border-[#A1B3B0]'}`} src={
                            leaderboardData[1].avatar === null
                                ? no_avatar
                                : leaderboardData[1].avatar
                        } alt="twoSt" />
                        <p className='saira text-[12px] md:text-[14px] font-medium text-center truncate mx-2 md:mx-1'>{leaderboardData[1].email}</p>
                        <p className={`saira text-[14px] md:text-[16px] font-medium text-center ${design === '0' ? 'text-[#FFED63]' : 'text-[#A1B3B0]'}`}>$69</p>
                        <p className='saira text-[14px] md:text-[14px] font-medium text-[#FFED63] text-center'>{leaderboardData[1].points} {languageData?.leaderboardsPoints} </p>
                    </div>
                }

                {
                    leaderboardData[0] && <div className='mb-[20px] relative z-20 w-[120px] md:w-[140px]'>
                        <p className='text-center saira text-[16px] font-bold'>1</p>
                        <img className='w-[32px] h-[32px] m-auto mb-2' src={crown} alt="crown" />
                        <img className={`border-[2px] border-[#FFED63] rounded-full w-[120px] h-[120px] object-cover m-auto ${design === '0' ? 'border-[#FFED63]' : 'border-[#F2BB02]'}`} src={
                            leaderboardData[0].avatar === ''
                                ? no_avatar
                                : leaderboardData[0].avatar
                        } alt="twoSt" />
                        <p className='saira text-[12px] md:text-[14px] font-medium text-center truncate mx-3 md:mx-2'>{leaderboardData[0].email}</p>
                        <p className={`saira text-[14px] md:text-[16px] font-medium text-[#FFED63] text-center ${design === '0' ? 'text-[#FFED63]' : 'text-[#F2BB02]'}`}>$69</p>
                        <p className='saira text-[14px] md:text-[14px] font-medium text-[#FFED63] text-center'>{leaderboardData[0].points} {languageData?.leaderboardsPoints} </p>
                    </div>
                }

                {
                    leaderboardData[2] && <div className='ml-[-15px] md:ml-[30px] relative z-10 w-[80px] md:w-[100px]'>
                        <p className='text-center saira text-[16px] font-bold'>3</p>
                        <img className={`border-[2px] border-[#FFED63] rounded-full w-[80px] h-[80px] object-cover m-auto ${design === '0' ? 'border-[#FFED63]' : '!border-[#E87001]'}`} src={
                            leaderboardData[2].avatar === null
                                ? no_avatar
                                : leaderboardData[2].avatar
                        } alt="twoSt" />
                        <p className='saira text-[12px] md:text-[14px] font-medium text-center truncate mx-2 md:mx-1'>{leaderboardData[2].email}</p>
                        <p className={`saira text-[14px] md:text-[16px] font-medium text-[#FFED63] text-center ${design === '0' ? 'text-[#FFED63]' : 'text-[#E87001]'}`}>$69</p>
                        <p className='saira text-[14px] md:text-[14px] font-medium text-[#FFED63] text-center'>{leaderboardData[2].points} {languageData?.leaderboardsPoints} </p>
                    </div>
                }
            </div>
            <div className='h-[240px] md:h-[350px] overflow-scroll'>
                {
                    leaderboardData.length < 4
                        ? <div className='w-full flex justify-center my-8'>
                            <p>There are no more users</p>
                        </div>

                        : leaderboardData.slice(3).map((user, index) => (
                            <div className=' '>
                                <div className={`bg-[#EAEAEA] ${design === '0' ? 'bg-opacity-40 ' : 'bg-opacity-20 '} backdrop-blur-lg rounded-[30px] text-center flex pr-3  justify-between items-center mt-2`}>
                                    <div className='flex items-center'>
                                        <img className=' rounded-full w-[40px] h-[40px]' src={twoSt} alt="twoSt" />
                                        <p className='saira text-[12px] md:text-[14px] font-medium text-center ml-[15px] truncate w-[120px]'>{user?.email}</p>
                                    </div>
                                    <div className='leading-[14px]'>
                                        <p className={`saira text-[12px] md:text-[14px] font-medium ${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'}`}>$6.90</p>
                                        <p className='saira text-[12px] md:text-[14px] font-medium'>{languageData?.leaderboardsPrize}</p>
                                    </div>
                                    <div className='leading-[14px]'>
                                        <p className={`saira text-[12px] md:text-[14px] font-medium text-[#FFED63] ${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'}`}>{user?.points.toFixed(0)}</p>
                                        <p className='saira text-[12px] md:text-[14px] font-medium'>{languageData?.leaderboardsPoints}</p>
                                    </div>
                                    <p className={`saira text-[16px] font-bold ${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'}`}>#{index + 4}</p>
                                </div>

                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default LeaderboardList
