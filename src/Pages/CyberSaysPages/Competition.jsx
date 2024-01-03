import React, { useState, useEffect } from 'react'
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import TimeCounter from '../../Components/TimeCounter'
import cup1 from '../../images/CyberSaysPage/cup1st.png'
import cup2 from '../../images/CyberSaysPage/cup2st.png'
import LeaderboardModal from '../../Components/LeaderboardModal'
import infoAPI from '../../Requests/info'
import no_avatar from '../../images/CyberSaysPage/no_avatar.png'
import { Link } from 'react-router-dom'

function Competition({ imLiveURL, user, setLeaderboardModal, loading, setLoading, leaderboardData, setLeaderboardData }) {



    useEffect(() => {

        const fetchData = async () => {
            const res = await infoAPI.getLeaderboardData()
            setLeaderboardData(res.data)
            setLoading(false)
        }

        fetchData()
    }, [])

    const shareRefferalLink = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: document.title,
                    text: 'Sharing',
                    url: window.location.hostname + '?uid=' + user?.refferal_code,
                })
                .then(() => console.log('Successful share! 🎉'))
                .catch(err => console.error(err));
        } else {
            console.error('navigator.share is not supported in this browser');
        }
    }

    return (
        <div className=' w-screen h-screen bg-[url(./images/CyberSaysPage/mobile-bg-raffle.jpg)] bg-cover bg-no-repeat bg-center relative z-10'>

            <div className='pt-[60px]  md:pt-[90px] px-4 max-w-[1170px] m-auto' >
                <img className='custombp:w-[230px] custombp:mb-[-5px] w-[310px]  md:w-[500px] m-auto md:mb-[-20px]' src={logoCyber} alt="logoCyber" />
                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[30px] text-center custombp:py-1 py-3 px-2 sm:max-w-[600px] m-auto'>
                    <p className='text-center text-[14px] sm:text-[18px] font-semibold'>The 69 daily competition</p>
                    {
                        loading === false && <div className='flex justify-around items-center my-2 max-w-[250px] sm:max-w-[350px] w-full m-auto'>
                            <div>
                                <p className='text-[16px] saira font-bold'>2</p>
                                <img className='w-[26px] h-[26px] sm:w-[70px] sm:h-[70px] border-[1px] border-[#FFED63] rounded-full object-cover m-auto' src={
                                    leaderboardData.leaderboard[1].avatar === null
                                        ? no_avatar
                                        : leaderboardData.leaderboard[1].avatar
                                } alt="cup2" />
                                <p className='text-[12px] sm:text-[14px] saira font-medium text-[#FFED63]'>{leaderboardData.leaderboard[1].points}</p>
                                <p className='text-[12px] sm:text-[14px] saira font-medium leading-3'>Points</p>
                            </div>
                            <div>
                                <p className='text-[16px] saira font-bold'>1</p>
                                <img className='w-[34px] h-[34px] sm:w-[120px] sm:h-[120px] border-[1px] border-[#FFED63] rounded-full object-cover m-auto' src={
                                    leaderboardData.leaderboard[0].avatar === null
                                        ? no_avatar
                                        : leaderboardData.leaderboard[0].avatar
                                } alt="cup2" />
                                <p className='text-[12px] sm:text-[14px] saira font-medium text-[#FFED63]'>{leaderboardData.leaderboard[0].points}</p>
                                <p className='text-[12px] sm:text-[14px] saira font-medium leading-3'>Points</p>
                            </div>
                            <div>
                                <p className='text-[16px] saira font-bold'>2</p>
                                <img className='w-[26px] h-[26px] sm:w-[70px] sm:h-[70px] border-[1px] border-[#FFED63] rounded-full object-cover m-auto' src={
                                    leaderboardData.leaderboard[2].avatar === null
                                        ? no_avatar
                                        : leaderboardData.leaderboard[2].avatar
                                } alt="cup2" />
                                <p className='text-[12px] sm:text-[14px] saira font-medium text-[#FFED63]'>{leaderboardData.leaderboard[2].points}</p>
                                <p className='text-[12px] sm:text-[14px] saira font-medium leading-3'>Points</p>
                            </div>
                        </div>
                    }
                    <p className='text-center text-[12px] sm:text-[14px] text-[#FFED63] saira font-semibold mb-1'>First 3 places get 69$ each, 4-10 6.90$ each</p>
                    <div className='flex sm:max-w-[400px] m-auto sm:mt-3'>
                        <div className='text-center w-full'>
                            <Link to={imLiveURL}>
                                <button className=' bg-white  border-[2px] border-[#FFED63] rounded-[20px] text-black text-[18px] saira font-semibold p-2 sm:px-6'>Enjoy ImLive 💃</button>
                            </Link>
                            <p className='saira text-[12px] sm:text-[14px] font-medium'>1 credit bought = </p>
                            <p className='saira text-[12px] sm:text-[14px] font-medium'>0.5 points</p>
                        </div>
                        <div className='text-center w-full'>
                            <button onClick={e => shareRefferalLink()} className=' bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold p-2 sm:px-6'>Refer friends 🤑</button>
                            <p className='saira text-[12px] sm:text-[14px] font-medium'>Friend doubled money = </p>
                            <p className='saira text-[12px] sm:text-[14px] font-medium'>10 points</p>
                        </div>
                    </div>
                    <p className='text-center text-[12px] sm:text-[14px] saira font-semibold underline custombp:mt-0 mt-3 cursor-pointer' onClick={e => setLeaderboardModal(true)}>Leaderboards</p>

                </div>
                <p className='text-center text-[12px] sm:text-[14px] text-[#FFED63] saira font-semibold underline custombp:mt-2 mt-7 mb-2 cursor-pointer'>Rules of the competition</p>
                <div className='flex fixed custombp2:bottom-[60px] custombp:bottom-[100px] bottom-[156px] sm:bottom-[80px] md:bottom-[112px] justify-center w-full  m-auto left-1/2 transform -translate-x-1/2 '>
                    <TimeCounter />
                </div>
            </div>


        </div>
    )
}

export default Competition
