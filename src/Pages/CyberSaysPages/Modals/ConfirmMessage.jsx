import React from 'react'
import close from '../../../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../../../Helpers/Design/DesignContext'

function ConfirmMessage({ languageData, setOpen, closeAll }) {
    const { design } = useDesign()
    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 flex'>
            <div className=' m-auto max-w-[600px] w-full'>
                <div className={` backdrop-blur-xl bg-opacity-60 p-6 bg-black rounded-[20px] ${design === '0' ? ' border-[#FFD700]' : '  border-[#A2DBF0]'} border`}>

                    <div className='flex justify-end mb-2'>
                        <img onClick={e => closeAll(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../../images/NewDesign/closeBtn.png')} alt="close" />
                    </div>
                    
                    <svg className='m-auto my-4' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                        <path d="M42.9981 73.001L78.2481 37.751L71.2481 30.751L42.9981 59.001L28.748 44.751L21.748 51.751L42.9981 73.001ZM49.9981 100.001C43.0814 100.001 36.5814 98.6877 30.4981 96.061C24.4147 93.4343 19.123 89.8727 14.623 85.376C10.123 80.876 6.56138 75.5843 3.93805 69.501C1.31471 63.4176 0.00138021 56.9176 -0.00195312 50.001C-0.00195312 43.0843 1.31138 36.5843 3.93805 30.501C6.56471 24.4176 10.1264 19.126 14.623 14.626C19.123 10.126 24.4147 6.56431 30.4981 3.94098C36.5814 1.31764 43.0814 0.0043099 49.9981 0.000976562C56.9147 0.000976562 63.4147 1.31431 69.4981 3.94098C75.5814 6.56764 80.8731 10.1293 85.3731 14.626C89.8731 19.126 93.4364 24.4176 96.063 30.501C98.6897 36.5843 100.001 43.0843 99.9981 50.001C99.9981 56.9176 98.6847 63.4176 96.0581 69.501C93.4314 75.5843 89.8697 80.876 85.3731 85.376C80.8731 89.876 75.5814 93.4393 69.4981 96.066C63.4147 98.6926 56.9147 100.004 49.9981 100.001Z" fill="url(#paint0_linear_14_67165)" />
                        <defs>
                            <linearGradient id="paint0_linear_14_67165" x1="-0.00195269" y1="50.9814" x2="99.9981" y2="50.9814" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#8FE5EC" />
                                <stop offset="1" stop-color="#DDBAFC" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <h1 className='text-[24px] text-center  w-full font-semibold'>{languageData?.contactConfirmTitle}</h1>

                    <div className='flex items-center gap-4'>
                        <button onClick={e => closeAll(false)} className={`w-full bg-[white]  px-6 py-3 saira p-2 mt-4 text-[18px] text-[#5f5f5f] font-semibold ${design === '0' ? '  rounded-[50px] border-[2px] bg-white ' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawContinue}</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmMessage
