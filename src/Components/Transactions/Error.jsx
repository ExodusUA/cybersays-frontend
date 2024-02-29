import React from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../../Helpers/Design/DesignContext'

function Error({ languageData, setOpen }) {
    const { design } = useDesign()
    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 flex'>
            <div className=' m-auto max-w-[600px] w-full'>
                <div className={` backdrop-blur-xl bg-opacity-60 p-6 bg-black rounded-[20px] ${design === '0' ? ' border-[#FFD700]' : '  border-[#A2DBF0]'} border`}>

                    <div className='flex justify-end mb-2'>
                        <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../images/NewDesign/closeBtn.png')} alt="close" />
                    </div>
                    <svg className='m-auto my-4' width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 0.499878C22.4 0.499878 0 22.8999 0 50.4999C0 78.0999 22.4 100.5 50 100.5C77.6 100.5 100 78.0999 100 50.4999C100 22.8999 77.6 0.499878 50 0.499878ZM55 75.4999H45V65.4999H55V75.4999ZM55 55.4999H45V25.4999H55V55.4999Z" fill="#FF4B60" />
                    </svg>
                    <h1 className='text-[24px] text-center text-[#FF4B60]  w-full font-semibold'>{languageData.withdrawError}</h1>

                    <div className='flex items-center gap-4'>
                        <button onClick={e => setOpen(false)} className={`w-full bg-[white]  px-6 py-3 saira p-2 mt-4 text-[18px] text-[#5f5f5f] font-semibold ${design === '0' ? '  rounded-[50px] border-[2px] bg-white ' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData.withdrawErrorTry}</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error
