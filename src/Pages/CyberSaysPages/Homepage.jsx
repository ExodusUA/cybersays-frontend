import React from 'react'
import logoCyber from '../../images/CyberSaysPage/logoMain.png'
import girlOK from '../../images/CyberSaysPage/girl_OK.png'
import imLiveLogo from '../../images/CyberSaysPage/imLiveLogo.png'
import TimeCounter from '../../Components/TimeCounter'

function Homepage() {
    return (
        <div className=' w-screen h-screen bg-[url(./images/CyberSaysPage/mobile-bg-homepage.jpg)] bg-cover bg-no-repeat bg-center relative z-10'>
            <div className='pt-[60px] px-4 pb-12'>
                <img className='w-[310px] m-auto' src={logoCyber} alt="logoCyber" />
                <div className='flex justify-between items-start mt-3'>
                    <img className='w-[180px]' src={girlOK} alt="girlOK" />
                    <div className='ml-1'>
                        <p className=' text-[18px] font-semibold'>“Double your money and win the Vegas weekend!“</p>
                     <img className='w-[160px]' src={imLiveLogo} alt="imLiveLogo" />
                    </div>
                </div>
                <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2'>Double your money 🤑</button>
            </div>
            <TimeCounter />
        </div>
    )
}

export default Homepage
 