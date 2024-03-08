import React, { useEffect } from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../../Helpers/Design/DesignContext'

function Confirm({ languageData, setOpen, closeAll, selectedPayment, selectPayment }) {
    const { design } = useDesign()

    useEffect(() => {
        console.log(selectedPayment)
    }, [selectedPayment])

    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 flex'>
            <div className=' m-auto max-w-[600px] w-full'>
                <div className={` backdrop-blur-xl bg-opacity-60 p-6 bg-black rounded-[20px] ${design === '0' ? ' border-[#FFD700]' : '  border-[#A2DBF0]'} border`}>

                    <div className='flex justify-end mb-2'>
                        <img onClick={e => {
                            selectPayment(null)
                            closeAll(false)
                        }} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../images/NewDesign/closeBtn.png')} alt="close" />
                    </div>
                    <svg className='m-auto my-4' width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M42.9981 73.501L78.2481 38.251L71.2481 31.251L42.9981 59.501L28.748 45.251L21.748 52.251L42.9981 73.501ZM49.9981 100.501C43.0814 100.501 36.5814 99.1877 30.4981 96.561C24.4147 93.9343 19.123 90.3727 14.623 85.876C10.123 81.376 6.56138 76.0843 3.93805 70.001C1.31471 63.9176 0.00138021 57.4176 -0.00195312 50.501C-0.00195312 43.5843 1.31138 37.0843 3.93805 31.001C6.56471 24.9176 10.1264 19.626 14.623 15.126C19.123 10.626 24.4147 7.06431 30.4981 4.44098C36.5814 1.81764 43.0814 0.50431 49.9981 0.500977C56.9147 0.500977 63.4147 1.81431 69.4981 4.44098C75.5814 7.06764 80.8731 10.6293 85.3731 15.126C89.8731 19.626 93.4364 24.9176 96.063 31.001C98.6897 37.0843 100.001 43.5843 99.9981 50.501C99.9981 57.4176 98.6847 63.9176 96.0581 70.001C93.4314 76.0843 89.8697 81.376 85.3731 85.876C80.8731 90.376 75.5814 93.9393 69.4981 96.566C63.4147 99.1926 56.9147 100.504 49.9981 100.501Z" fill="#48EFAC" />
                    </svg>
                    <h1 className='text-[24px] text-center text-[#48EFAC]  w-full font-semibold'>{selectedPayment === 'paxum' ? languageData?.withdrawConfirmPaxum : languageData?.withdrawConfirm}</h1>

                    <div className='flex items-center gap-4'>
                        <button onClick={e => {
                            selectPayment(null)
                            closeAll(false)
                        }} className={`w-full bg-[white]  px-6 py-3 saira p-2 mt-4 text-[18px] text-[#5f5f5f] font-semibold ${design === '0' ? '  rounded-[50px] border-[2px] bg-white ' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawContinue}</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirm
