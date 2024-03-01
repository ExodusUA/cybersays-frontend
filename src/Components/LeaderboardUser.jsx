import React, { useEffect } from 'react'
import { useDesign } from '../Helpers/Design/DesignContext'
import oneSt from '../images/CyberSaysPage/1st.png'
import twoSt from '../images/CyberSaysPage/2st.png'
import threeSt from '../images/CyberSaysPage/3st.png'
import crown from '../images/CyberSaysPage/crown1st.png'
import no_avatar from '../images/CyberSaysPage/no_avatar.png'

function LeaderboardUser({ leaderboardData, languageData, day, user, index }) {
    const { design } = useDesign()

    useEffect(() => {
        console.log('leaderboardData', leaderboardData)
    }, [leaderboardData])



    return (
        <div className=' '>
            <div className={`bg-[#EAEAEA] ${design === '0' ? 'bg-opacity-40 ' : 'bg-opacity-20 '} backdrop-blur-lg rounded-[30px] text-center flex pr-6  justify-between items-center mt-2`}>
                <div className='flex items-center '>
                    {/*<img className=' rounded-full w-[40px] h-[40px]' src={`https://picsum.photos/298/30${index + 1}`} alt="twoSt" />*/}
                    <p className={`saira text-[16px] font-bold text-[#1E1E1E] gradient-homepageBtn rounded-full w-[40px] h-[40px] pt-2`}>#{index + 4}</p>
                    <p className='saira text-[12px] md:text-[14px] font-medium text-center ml-[15px] truncate w-[120px]'>{user?.email}</p>
                </div>
                <div className='leading-[14px]'>
                    <p className={`saira text-[12px] md:text-[14px] font-medium ${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'}`}>$6.90</p>
                    <p className='saira text-[12px] md:text-[14px] font-medium'>{languageData?.leaderboardsPrize}</p>
                </div>
                <div className='leading-[14px]'>
                    <p className={`saira text-[12px] md:text-[14px] font-medium text-[#FFED63] ${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'}`}>{Number(user?.points).toFixed(0)}</p>
                    <p className='saira text-[12px] md:text-[14px] font-medium'>{languageData?.leaderboardsPoints}</p>
                </div>

            </div>

        </div>
    )
}

export default LeaderboardUser
