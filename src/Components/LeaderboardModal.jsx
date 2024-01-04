import React from 'react'
import close from '../images/CyberSaysPage/closeMenu.png'
import oneSt from '../images/CyberSaysPage/1st.png'
import twoSt from '../images/CyberSaysPage/2st.png'
import threeSt from '../images/CyberSaysPage/3st.png'
import crown from '../images/CyberSaysPage/crown1st.png'

import no_avatar from '../images/CyberSaysPage/no_avatar.png'

function LeaderboardModal({ setOpen, leaderboardData, loading }) {

    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='max-w-[600px] m-auto'>


                <div className='flex justify-end md:my-4'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
                </div>

                {
                    loading === true
                        ? 'Loading...'
                        : <>

                            <div className='bg-[#EAEAEA] bg-opacity-40 backdrop-blur-lg rounded-[30px] text-center flex py-2 px-4 mx-3 justify-between items-center mt-3 sm:mt-10'>
                                <p className='saira text-[16px] font-bold text-[#FFED63]'>#{leaderboardData.userData.position}</p>
                                <div className='leading-3'>
                                    <p className='saira text-[12px] md:text-[14px] font-bold text-[#FFED63]'>{leaderboardData.userData.points}</p>
                                    <p className='saira text-[12px] md:text-[14px] font-medium'>Points</p>
                                </div>
                            </div>
                            <p className=' text-[18px] md:text-[32px] font-semibold text-center mt-3'>Leaderboards</p>
                            <div className=' flex items-end justify-center'>
                                <div className='mr-[-15px] md:mr-[30px] w-[80px] md:w-[100px]'>
                                    <p className='text-center saira text-[16px] font-bold'>2</p>
                                    <img className='border-[2px] border-[#FFED63] rounded-full w-[80px] h-[80px] object-cover m-auto' src={
                                        leaderboardData.leaderboard[1].avatar === null
                                            ? no_avatar
                                            : leaderboardData.leaderboard[1].avatar
                                    } alt="twoSt" />
                                    <p className='saira text-[12px] md:text-[14px] font-medium text-center truncate mx-2 md:mx-1'>{leaderboardData.leaderboard[1].email}</p>
                                    <p className='saira text-[14px] md:text-[16px] font-medium text-[#FFED63] text-center'>{leaderboardData.leaderboard[1].earned}$</p>
                                </div>
                                <div className='mb-[20px] relative z-20 w-[120px] md:w-[140px]'>
                                    <p className='text-center saira text-[16px] font-bold'>1</p>
                                    <img className='w-[32px] h-[32px] m-auto mb-2' src={crown} alt="crown" />
                                    <img className='border-[2px] border-[#FFED63] rounded-full w-[120px] h-[120px] object-cover m-auto' src={
                                        leaderboardData.leaderboard[0].avatar === null
                                            ? no_avatar
                                            : leaderboardData.leaderboard[0].avatar
                                    } alt="twoSt" />
                                    <p className='saira text-[12px] md:text-[14px] font-medium text-center truncate mx-3 md:mx-2'>{leaderboardData.leaderboard[0].email}</p>
                                    <p className='saira text-[14px] md:text-[16px] font-medium text-[#FFED63] text-center'>{leaderboardData.leaderboard[0].earned}$</p>
                                </div>
                                <div className='ml-[-15px] md:ml-[30px] relative z-10 w-[80px] md:w-[100px]'>
                                    <p className='text-center saira text-[16px] font-bold'>3</p>
                                    <img className='border-[2px] border-[#FFED63] rounded-full w-[80px] h-[80px] object-cover m-auto' src={
                                        leaderboardData.leaderboard[2].avatar === null
                                            ? no_avatar
                                            : leaderboardData.leaderboard[2].avatar
                                    } alt="twoSt" />
                                    <p className='saira text-[12px] md:text-[14px] font-medium text-center truncate mx-2 md:mx-1'>{leaderboardData.leaderboard[2].email}</p>
                                    <p className='saira text-[14px] md:text-[16px] font-medium text-[#FFED63] text-center'>{leaderboardData.leaderboard[2].earned}$</p>
                                </div>
                            </div>
                            <div className='h-[240px] md:h-[600px] overflow-scroll'>
                                {
                                    leaderboardData.leaderboard.length < 4
                                        ? <div className='w-full flex justify-center my-8'>
                                            <p>There are no more users</p>
                                        </div>

                                        : leaderboardData.leaderboard.slice(3).map((user, index) => (
                                            <div className='bg-[#EAEAEA] bg-opacity-40 backdrop-blur-lg rounded-[30px] text-center flex pr-3  justify-between items-center mt-2'>
                                                <div className='flex items-center'>
                                                    <img className=' rounded-full w-[40px] h-[40px]' src={twoSt} alt="twoSt" />
                                                    <p className='saira text-[12px] md:text-[14px] font-medium text-center ml-[15px] truncate w-[120px]'>{user?.email}</p>
                                                </div>
                                                <div className='leading-[14px]'>
                                                    <p className='saira text-[12px] md:text-[14px] font-medium text-[#FFED63]'>{user?.earned}$</p>
                                                    <p className='saira text-[12px] md:text-[14px] font-medium'>Prize</p>
                                                </div>
                                                <div className='leading-[14px]'>
                                                    <p className='saira text-[12px] md:text-[14px] font-medium text-[#FFED63]'>{user?.points}</p>
                                                    <p className='saira text-[12px] md:text-[14px] font-medium'>Points</p>
                                                </div>
                                                <p className='saira text-[16px] font-bold text-[#FFED63]'>#4</p>
                                            </div>
                                        ))
                                }
                            </div>
                        </>
                }

            </div>
        </div>
    )
}

export default LeaderboardModal
