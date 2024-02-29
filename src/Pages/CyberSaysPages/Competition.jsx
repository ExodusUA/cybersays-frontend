import React, { useState, useEffect } from 'react'
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import TimeCounter from '../../Components/TimeCounter'
import cup1 from '../../images/CyberSaysPage/cup1st.png'
import cup2 from '../../images/CyberSaysPage/cup2st.png'
import cup3 from '../../images/CyberSaysPage/cup3st.png'
import infoAPI from '../../Requests/info'
import { Link } from 'react-router-dom'
import { useDesign } from '../../Helpers/Design/DesignContext'
import newlogoCyber from '../../images/NewDesign/newLogo_main.png'
import crown from '../../images/CyberSaysPage/crown1st.png'

function Competition({ imLiveURL, user, setLeaderboardModal, loading, setLoading, leaderboardData, setLeaderboardData, siteData, languageData, setRulesModal }) {

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
        if (navigator.share) {
            navigator
                .share({
                    title: document.title,
                    text: 'Sharing',
                    url: '?uid=' + user?.referral_code,
                })
                .then(() => console.log('Successful share! 🎉'))
                .catch(err => console.error(err));
        } else {
            window.navigator.clipboard.writeText(window.location.host + '?uid=' + user?.referral_code)
            setIsLinkCopied(true)

            setTimeout(() => {
                setIsLinkCopied(false)
            }, 3000)
        }
    }

    return (
        <div className={` w-screen h-screen ${design === '0' ? 'bg-[url(./images/CyberSaysPage/mobile-bg-raffle.jpg)] md:bg-[url(./images/CyberSaysPage/bg-raffle.jpg)]' : 'bg-[url(./images/NewDesign/Bg/raffleTicket_des.png)]'} bg-cover bg-no-repeat bg-center relative z-10 mac-center:flex`}>

            <div className='pt-[57px]  md:pt-[90px] mac-center:!pt-0 px-4 max-w-[1170px] m-auto' >
                <img className='se:w-[170px] se:mb-[-5px] w-[170px] iphone:w-[170px] md:w-[320px] mac:!w-[170px] m-auto' src={design === '0' ? logoCyber : newlogoCyber} alt="logoCyber" />
                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[14px] text-center se:py-1 mac:!py-0 px-2 mac-center:w-[600px] sm:max-w-[600px] m-auto'>
                    <p className='text-center text-[18px] sm:text-[22px]  font-bold'>{languageData?.competitionTitle}</p>
                </div>
                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[14px] text-center se:py-1 iphone:py-2  px-2 mac-center:w-[600px] sm:max-w-[600px] m-auto mt-2 '>
                    {/*<p className='text-center text-[14px] sm:text-[32px] mac:!text-[24px] font-semibold'>{languageData?.competitionTitle} {siteData?.currentDay}</p>*/}
                    <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-md rounded-[12px] p-1 px-3  flex justify-between max-w-[380px] md:max-w-[100%] m-auto'>

                        <div className=' leading-4 text-left w-1/3'>
                            <p className='gradient-linkDouble saira text-[16px] font-bold'>{languageData?.leaderSheetYou}</p>
                            <p className='gradient-linkDouble saira text-[16px] font-bold'> #825</p>

                        </div>
                        <div className=' leading-4 text-center w-1/3'>
                            <p className='gradient-linkDouble saira text-[12px] font-bold'>{Number(user?.points).toFixed(0)}</p>
                            <p className=' saira text-[12px] font-medium'>{languageData?.leaderSheetPoints}</p>
                        </div>
                        <div className=' leading-4 text-right w-1/3'>
                            <div>
                                <p className='gradient-linkDouble saira text-[12px] font-bold'>145</p>
                                <p className=' saira text-[12px] font-medium'>{languageData?.leaderSheetFriends}</p>
                            </div>
                        </div>
                    </div>
                    {
                        loading === false && leaderboardData.todayUsers.length > 0 && <div className='flex justify-around items-start my-2 mac:my-2 max-w-[300px] sm:max-w-[350px] w-full m-auto'>
                            {
                                leaderboardData.todayUsers[1] && <div className='mt-[50px] mr-[-50px]'>
                                    <p className='text-[16px] saira font-bold leading-3'>#2</p>
                                    {/*<img className='w-[26px] h-[26px] sm:w-[50px] sm:h-[50px] border-[1px] border-[#FFED63] rounded-full object-cover m-auto' src={cup2} alt="cup2" />*/}
                                    <p className={`text-[12px] sm:text-[14px] saira font-medium  ${design === '0' ? 'text-[#FFED63]' : 'text-[#A1B3B0]'}`}>{leaderboardData.todayUsers[1].points}</p>
                                    <p className='text-[12px] sm:text-[14px] saira font-medium leading-3'>{languageData?.competitionPoints}</p>
                                </div>
                            }
                            <div>
                                <div className='flex justify-center'>
                                    <p className='text-[16px] saira font-bold flex items-center leading-3'><img className='w-[21px] h-[21px] mr-1 mb-1' src={crown} alt="crown" />#1</p>
                                </div>
                                {/*<img className='w-[34px] h-[34px] sm:w-[70px] sm:h-[70px] border-[1px] border-[#FFED63] rounded-full object-cover m-auto' src={cup1} alt="cup2" />*/}
                                <p className={`text-[12px] sm:text-[14px] saira font-medium  ${design === '0' ? 'text-[#FFED63]' : 'text-[#F2BB02]'}`}> {leaderboardData.todayUsers[0].points}</p>
                                <p className='text-[12px] sm:text-[14px] saira font-medium leading-3'>{languageData?.competitionPoints}</p>
                            </div>
                            {

                                leaderboardData.todayUsers[2] && <div className='mt-[50px] ml-[-50px]'>
                                    <p className='text-[16px] saira font-bold leading-3'>#3</p>
                                    {/*<img className='w-[26px] h-[26px] sm:w-[50px] sm:h-[50px] border-[1px] border-[#FFED63] rounded-full object-cover m-auto' src={cup3} alt="cup2" />*/}
                                    <p className={`text-[12px] sm:text-[14px] saira font-medium ${design === '0' ? 'text-[#FFED63]' : 'text-[#E87001]'}`}>{leaderboardData.todayUsers[2].points}</p>
                                    <p className='text-[12px] sm:text-[14px] saira font-medium leading-3'>{languageData?.competitionPoints}</p>
                                </div>

                            }
                        </div>
                    }

                    <div className='flex sm:max-w-[400px] md:max-w-[unset] m-auto sm:mt-3'>
                        <div className='text-center w-full md:mx-2'>
                            <Link target='_blank' to={imLiveURL}>
                                <button className={` bg-white  border-[2px] border-[#FFED63] text-black text-[18px] saira font-semibold p-2 sm:px-6 w-[95%] md:w-full ${design === '0' ? ' p-2 sm:px-6 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.competitionLeftBtn}</button>
                            </Link>
                            <p className='saira text-[12px] sm:text-[14px] font-medium'>{languageData?.competitionLeftSection1}</p>
                            <p className='saira text-[12px] sm:text-[14px] font-medium'>{languageData?.competitionLeftSection2}</p>
                        </div>
                        <div className='text-center w-full md:mx-2'>
                            <button onClick={e => shareRefferalLink()} className={` bg-white  border-[2px] border-[#FFED63]  text-black text-[18px] saira font-semibold w-[95%]  md:w-full  ${design === '0' ? ' p-2 sm:px-6 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>
                                {
                                    isLinkCopied === false
                                        ? languageData?.competitionRightBtn
                                        : languageData?.competitionRightBtn2
                                }
                            </button>
                            <p className='saira text-[12px] sm:text-[14px] font-medium'>{languageData?.competitionRightSection1}</p>
                            <p className='saira text-[12px] sm:text-[14px] font-medium'>{languageData?.competitionRightSection2}</p>
                        </div>
                    </div>
                    <p className={`text-center text-[12px] sm:text-[14px]  saira font-semibold mt-2 ${design === '0' ? 'text-[#FFED63]' : 'gradient-linkDouble'} `}>{languageData?.competitionSubtitle}</p>
                    <p className={`text-center text-[12px] sm:text-[14px] saira font-semibold underline se:mt-0 iphone:mt-0 mac:!mt-0 mac:!mb-2 cursor-pointer ${design === '0' ? 'text-white' : 'gradient-link '}`} onClick={e => setLeaderboardModal(true)}>{languageData?.competitionRightLink1}</p>

                </div>
                <div className='flex justify-center'>
                    <p onClick={e => setRulesModal(true)} className={`text-center text-[12px] sm:text-[14px]  saira font-semibold underline se:mt-2 iphone:mt-7 mac:!mt-1 mb-2 cursor-pointer ${design === '0' ? 'text-[#FFED63]' : 'gradient-link '}`}>{languageData?.competitionRightRules}</p>
                </div>
                
                <div className='flex absolute se:bottom-[140px] iphone:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] justify-center w-full  m-auto left-1/2 transform -translate-x-1/2 '>
                    <TimeCounter title={languageData.timeCounterTitle2}  languageData={languageData} />
                </div>
                
            </div>


        </div>
    )
}

export default Competition
