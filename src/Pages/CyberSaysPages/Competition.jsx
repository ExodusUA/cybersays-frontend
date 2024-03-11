import React, { useState, useEffect } from 'react'
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import infoAPI from '../../Requests/info'
import { Link } from 'react-router-dom'
import { useDesign } from '../../Helpers/Design/DesignContext'
import newlogoCyber from '../../images/NewDesign/newLogo_main.png'
import crown from '../../images/CyberSaysPage/crown1st.png'
import TimeCounterDay from '../../Components/TimeCounterDay'
import mixpanel from 'mixpanel-browser'
import moengage from '@moengage/web-sdk'

function Competition({ imLiveURL, user, setLeaderboardModal, loading, setLoading, leaderboardData, setLeaderboardData, siteData, languageData, setRulesModal, setSocialLink }) {

    const { design } = useDesign()

    useEffect(() => {

        const fetchData = async () => {
            const res = await infoAPI.getLeaderboardData()
            console.log(res.data)
            setLeaderboardData(res.data)

            setLoading(false)
        }

        fetchData()
    }, [])

    const [isLinkCopied, setIsLinkCopied] = useState(false)

    const shareRefferalLink = () => {

        mixpanel.track("refer_friends", {
            distinct_id: user?.id,
            is_referred: user?.referral_id ? 'Yes' : 'No',
            vegas_tickets: user?.raffle_tickets,
            points: user?.points,
            user_id: user?.id,
            USD_earned: user?.allTimeEarned,
            page_name: 'Refferals',
        })
        moengage.track_event("refer_friends", {
            distinct_id: user?.id,
            is_referred: user?.referral_id ? 'Yes' : 'No',
            vegas_tickets: user?.raffle_tickets,
            points: user?.points,
            user_id: user?.id,
            USD_earned: user?.allTimeEarned,
            page_name: 'Refferals',
        })

        if (navigator.share) {
            navigator
                .share({
                    title: document.title,
                    text: 'Sharing',
                    url: '/' + user?.referral_code,
                })
                .then(() => console.log('Successful share! 🎉'))
                .catch(err => console.error(err));
        } else {
            window.navigator.clipboard.writeText(window.location.host + '/' + user?.referral_code)
            setIsLinkCopied(true)

            setTimeout(() => {
                setIsLinkCopied(false)
            }, 3000)
        }
    }

    const handleImLiveRedirect = () => {
        window.location.replace(imLiveURL)
        window.open(window.location.href + '#competition', '_blank')
    }

    return (
        <div className={` w-screen h-screen ${design === '0' ? 'bg-[url(./images/CyberSaysPage/mobile-bg-raffle.jpg)] md:bg-[url(./images/CyberSaysPage/bg-raffle.jpg)]' : 'bg-[#200527]'} bg-cover bg-no-repeat bg-center relative z-10 mac-center:flex`}>

            <div className='pt-[57px]  md:pt-[80px] mac-center:!pt-0 px-4 max-w-[1170px] m-auto' >
                <img className='se:w-[170px]  w-[170px] iphone:w-[240px] double-img-width md:w-[320px] m-auto se:mb-[-3%] iphone:mb-[-13px] lg:mb-[-10px]  relative z-50' src={design === '0' ? logoCyber : newlogoCyber} alt="logoCyber" />
                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[14px] text-center se:py-1 mac:!py-0 px-2 mac-center:w-[600px] sm:max-w-[600px] m-auto mt-[10px] md:mt-0'>
                    <p className='text-center text-[18px] sm:text-[22px]  font-bold'>{languageData?.competitionTitle}</p>
                </div>
                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[14px] text-center se:py-1 iphone:py-2  px-2 mac-center:w-[600px] sm:max-w-[600px] m-auto mt-2 competitionSE iphone:mt-[40px] contentForCompetitions md:mt-[60px]'>
                    {/*<p className='text-center text-[14px] sm:text-[32px] mac:!text-[24px] font-semibold'>{languageData?.competitionTitle} {siteData?.currentDay}</p>*/}


                    {
                        leaderboardData?.userRankData &&
                        <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-md rounded-[12px] p-1 px-1  flex justify-between max-w-[380px] md:max-w-[100%] m-auto'>
                            <div className=' leading-4 text-left m-auto'>
                                <p className='gradient-linkDouble saira text-[14px] lg:text-[18px] font-bold'>{languageData?.leaderSheetYou} <span className='saira text-[14px] lg:text-[18px] font-bold'> #{leaderboardData?.userRankData?.position || 0},</span> {languageData?.leaderSheetPoints} <span className='saira text-[14px] lg:text-[18px] font-bold'>{Number(user?.points).toFixed(0)}</span></p>
                            </div>
                        </div>
                    }

                    {
                        loading === false && <div className='flex justify-around items-center mt-2 mac:mt-2 max-w-[300px] sm:max-w-[350px] w-full m-auto'>
                            {
                                <div className='mt-[20px] '>
                                    <p className='text-[16px] saira font-bold leading-3'>#2</p>
                                    {/*<img className='w-[26px] h-[26px] sm:w-[40px] sm:h-[40px] border-[1px] border-[#FFED63] rounded-full object-cover m-auto mt-[2px]' src={cup2} alt="cup2" />*/}
                                    <div className='w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] border-[1px] border-[#A1B3B0] rounded-full  m-auto mt-[2px] placeBg flex justify-center items-center' >
                                        <p className='text-[#A1B3B0] saira text-[10px] lg:text-[12px] font-bold'>$69</p>
                                    </div>
                                    <p className={`text-[12px] sm:text-[14px] saira font-medium  ${design === '0' ? 'text-[#FFED63]' : 'text-[#A1B3B0]'}`}>{leaderboardData.todayUsers[1]?.points || 0}</p>
                                    <p className='text-[12px]  saira font-medium leading-3'>{languageData?.competitionPoints}</p>
                                </div>
                            }
                            <div>
                                <div className='flex justify-center'>
                                    <p className='text-[16px] saira font-bold flex items-center leading-3'><img className='w-[21px] h-[21px] mr-1 mb-1' src={crown} alt="crown" />#1</p>
                                </div>
                                {/* <img className='w-[34px] h-[34px] sm:w-[56px] sm:h-[56px] border-[1px] border-[#FFED63] rounded-full object-cover m-auto mt-[2px]' src={cup1} alt="cup2" />*/}
                                <div className='w-[40px] h-[40px] sm:w-[56px] sm:h-[56px] border-[1px] border-[#F2BB02] rounded-full  m-auto mt-[2px] placeBg flex justify-center items-center' >
                                    <p className='text-[#F2BB02] saira text-[14px] lg:text-[18px] font-bold'>$69</p>
                                </div>
                                <p className={`text-[12px] sm:text-[14px] saira font-medium  ${design === '0' ? 'text-[#FFED63]' : 'text-[#F2BB02]'}`}> {leaderboardData.todayUsers[0]?.points || 0}</p>
                                <p className='text-[12px]  saira font-medium leading-3'>{languageData?.competitionPoints}</p>
                            </div>
                            {

                                <div className='mt-[20px] '>
                                    <p className='text-[16px] saira font-bold leading-3'>#3</p>
                                    {/*<img className='w-[26px] h-[26px] sm:w-[40px] sm:h-[40px] border-[1px] border-[#FFED63] rounded-full object-cover m-auto mt-[2px]' src={cup3} alt="cup2" />*/}
                                    <div className='w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] border-[1px] border-[#E87001] rounded-full  m-auto mt-[2px] placeBg flex justify-center items-center' >
                                        <p className='text-[#E87001] saira text-[10px] lg:text-[12px] font-bold'>$6.90</p>
                                    </div>
                                    <p className={`text-[12px] sm:text-[14px] saira font-medium ${design === '0' ? 'text-[#FFED63]' : 'text-[#E87001]'}`}>{leaderboardData.todayUsers[2]?.points || 0}</p>
                                    <p className='text-[12px]  saira font-medium leading-3'>{languageData?.competitionPoints}</p>
                                </div>

                            }
                        </div>
                    }
                    <p className='text-center text-[12px] sm:text-[16px] font-medium my-1 lg:my-0'>{languageData?.competitionOverBtn}</p>
                    <div className='flex sm:max-w-[400px] md:max-w-[unset] m-auto sm:mt-1'>
                        <div className='text-center w-full md:mx-2'>
                            <Link target='_blank' onClick={e => {
                                mixpanel.track("enjoy_ImLive", {
                                    distinct_id: user?.id,
                                    is_referred: user?.referral_id ? 'Yes' : 'No',
                                    vegas_tickets: user?.raffle_tickets,
                                    points: user?.points,
                                    user_id: user?.id,
                                    USD_earned: user?.allTimeEarned,
                                    page_name: 'Refferals',
                                })
                                moengage.track_event("enjoy_ImLive", {
                                    distinct_id: user?.id,
                                    is_referred: user?.referral_id ? 'Yes' : 'No',
                                    vegas_tickets: user?.raffle_tickets,
                                    points: user?.points,
                                    user_id: user?.id,
                                    USD_earned: user?.allTimeEarned,
                                    page_name: 'Refferals',
                                })
                                //e.preventDefault()
                                //handleImLiveRedirect()
                            }} to={imLiveURL}>
                                <button className={` bg-white  border-[2px] border-[#FFED63] text-black text-[18px] saira font-semibold p-2 sm:px-6 w-[95%] md:w-full ${design === '0' ? ' p-2 sm:px-6 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.competitionLeftBtn}</button>
                            </Link>
                            <p className='saira text-[12px] sm:text-[12px] font-medium'>{languageData?.competitionLeftSection1} {languageData?.competitionLeftSection2}</p>

                        </div>
                        <div className='text-center w-full md:mx-2'>
                            <button onClick={e => shareRefferalLink()} className={` bg-white  border-[2px] border-[#FFED63]  text-black text-[18px] saira font-semibold w-[95%]  md:w-full  ${design === '0' ? ' p-2 sm:px-6 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>
                                {
                                    isLinkCopied === false
                                        ? languageData?.competitionRightBtn
                                        : languageData?.competitionRightBtn2
                                }
                            </button>
                            <p className='saira text-[10px] sm:text-[12px] font-medium'>{languageData?.competitionRightSection1} {languageData?.competitionRightSection2}</p>

                        </div>
                    </div>
                    <p className={`text-center text-[12px] sm:text-[14px]  saira font-semibold mt-2 ${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'} `}>{languageData?.competitionSubtitle}</p>
                    <p className={`text-center text-[12px] sm:text-[14px] saira font-semibold underline se:mt-0 iphone:mt-0 mac:!mt-0  cursor-pointer ${design === '0' ? 'text-white' : 'gradient-link '}`} onClick={e => {
                        setLeaderboardModal(true)
                        mixpanel.track("leaderboard", {
                            distinct_id: user?.id,
                            is_referred: user?.referral_id ? 'Yes' : 'No',
                            vegas_tickets: user?.raffle_tickets,
                            points: user?.points,
                            user_id: user?.id,
                            USD_earned: user?.allTimeEarned,
                            page_name: 'Refferals',
                        })
                        moengage.track_event("leaderboard", {
                            distinct_id: user?.id,
                            is_referred: user?.referral_id ? 'Yes' : 'No',
                            vegas_tickets: user?.raffle_tickets,
                            points: user?.points,
                            user_id: user?.id,
                            USD_earned: user?.allTimeEarned,
                            page_name: 'Refferals',
                        })
                    }}>{languageData?.competitionRightLink1}</p>

                </div>
                <div className='flex justify-center'>
                    <p onClick={e => setRulesModal(true)} className={`text-center text-[12px] sm:text-[14px]  saira font-semibold underline se:mt-2 iphone:mt-7 mac:!mt-1 mb-2 cursor-pointer ${design === '0' ? 'text-[#FFED63]' : 'gradient-link '}`}>{languageData?.competitionRightRules}</p>
                </div>

                <div className='flex absolute se:bottom-[140px] iphone:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] justify-center w-full  m-auto left-1/2 transform -translate-x-1/2 '>
                    <TimeCounterDay setSocialLink={setSocialLink} left={'m-auto'} leftTitle={'text-center'} title={languageData?.timeCounterTitle} languageData={languageData} block={'block'} user={user} />
                </div>

            </div>


        </div>
    )
}

export default Competition
