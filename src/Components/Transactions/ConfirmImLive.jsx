import React from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../../Helpers/Design/DesignContext'

function ConfirmImLive({ languageData, setOpen, setConfirm }) {
    const { design } = useDesign()
    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 flex'>
            <div className=' m-auto max-w-[600px] w-full'>
                <div className={` backdrop-blur-xl bg-opacity-60 p-4 bg-black rounded-[20px] ${design === '0' ? ' border-[#FFD700]' : '  border-[#A2DBF0]'} border`}>

                    <div className='flex justify-end mb-2'>
                        <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../images/NewDesign/closeBtn.png')} alt="close" />
                    </div>

                    <h1 className='text-[18px] text-center w-full font-semibold'>{languageData?.confirmLiveDesc}</h1>

                    <div className='flex items-center gap-4'>
                        <button onClick={e => setOpen(false)}  className={`w-full bg-transparent  border px-6 py-2 saira p-2 mt-4 max-w-[350px] text-[18px] text-white font-semibold ${design === '0' ? '  rounded-[50px] border-[#FFD700]' : ' rounded-[12px] border-[#A2DBF0]'}`}>{languageData?.logoutConfirmNo}</button>
                        <button onClick={e => setConfirm(true)}  className={`w-full bg-[white]  px-6 py-2 saira p-2 mt-4 max-w-[350px] text-[18px] text-[#5f5f5f] font-semibold ${design === '0' ? '  rounded-[50px] border-[2px] bg-white ' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.logoutConfirmYes}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmImLive
