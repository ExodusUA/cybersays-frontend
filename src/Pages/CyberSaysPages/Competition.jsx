import React from 'react'
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import TimeCounter from '../../Components/TimeCounter'
import cup1 from '../../images/CyberSaysPage/cup1st.png'
import cup2 from '../../images/CyberSaysPage/cup2st.png'
import cup3 from '../../images/CyberSaysPage/cup3st.png'

function Competition() {
    return (
        <div className=' w-screen h-screen bg-[url(./images/CyberSaysPage/mobile-bg-raffle.jpg)] bg-cover bg-no-repeat bg-center relative z-10'>
            <div className='pt-[60px] px-4' >
                <img className='w-[310px] m-auto' src={logoCyber} alt="logoCyber" />
                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[30px] text-center  py-3 px-2 '>
                    <p className='text-center text-[14px] font-semibold'>The 69 daily competition</p>
                    <div className='flex justify-around items-center my-2 max-w-[250px] w-full m-auto'>
                        <div>
                            <p className='text-[16px] saira font-bold'>2</p>
                            <img className='w-[24px] h-[24px] m-auto' src={cup2} alt="cup2" />
                            <p className='text-[12px] saira font-medium text-[#FFED63]'>321</p>
                            <p className='text-[12px] saira font-medium leading-3'>Points</p>
                        </div>
                        <div>
                            <p className='text-[16px] saira font-bold'>1</p>
                            <img className='w-[32px] h-[32px] m-auto' src={cup1} alt="cup2" />
                            <p className='text-[12px] saira font-medium text-[#FFED63]'>321</p>
                            <p className='text-[12px] saira font-medium leading-3'>Points</p>
                        </div>
                        <div>
                            <p className='text-[16px] saira font-bold'>2</p>
                            <img className='w-[24px] h-[24px] m-auto' src={cup2} alt="cup2" />
                            <p className='text-[12px] saira font-medium text-[#FFED63]'>321</p>
                            <p className='text-[12px] saira font-medium leading-3'>Points</p>
                        </div>
                    </div>
                    <p className='text-center text-[12px] text-[#FFED63] saira font-semibold mb-1'>First 3 places get 69$ each, 4-10 6.90$ each</p>
                    <div className='flex'>
                        <div className='text-center w-full'>
                            <button className=' bg-white  border-[2px] border-[#FFED63] rounded-[20px] text-black text-[18px] saira font-semibold p-2'>Enjoy ImLive 💃</button>
                            <p className='saira text-[12px] font-medium'>1 credit bought = </p>
                            <p className='saira text-[12px] font-medium'>0.5 points</p>
                        </div>
                        <div className='text-center w-full'>
                            <button className=' bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold p-2'>Refer friends 🤑</button>
                            <p className='saira text-[12px] font-medium'>Friend doubled money = </p>
                            <p className='saira text-[12px] font-medium'>10 points</p>
                        </div>
                    </div>
                    <p className='text-center text-[12px] saira font-semibold underline mt-3'>Leaderboards</p>

                </div>
                <p className='text-center text-[12px] text-[#FFED63] saira font-semibold underline mt-7 mb-2'>Rules of the competition</p>
                <TimeCounter />
            </div>
        </div>
    )
}

export default Competition
