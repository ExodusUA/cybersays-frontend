import React, { useState } from 'react'
import close from '../../../images/CyberSaysPage/closeMenu.png'
import { useDesign } from '../../../Helpers/Design/DesignContext'
import userAPI from '../../../Requests/user'

function Influencer({ user, setOpen, languageData }) {

    const { design } = useDesign()

    const [isDone, setIsDone] = useState(false)

    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [message, setMessage] = useState(null)

    const handleSend = async () => {

        if (email === null || name === null || message === null) return alert('Please fill all the fields')

        let data = {
            email: email,
            name: name,
            message: message
        }

        const res = await userAPI.messageCollaborate(email, data)

        if (res.status === 200) {
            setIsDone(true)
        }
    }

    return (
        <div className='w-screen h-screen fixed top-0 z-[99999] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='max-w-[600px] m-auto'>
                <div className='flex justify-end md:my-4'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../../images/NewDesign/closeBtn.png')} alt="close" />
                </div>

                {
                    isDone === false
                        ? <>
                            <h1 className='text-[18px] lg:text-[32px] text-white text-center lg:mt-12 font-semibold'>{languageData?.InfluencerTitle}</h1>
                            <p className='saira text-[14px] font-medium text-center gradient-linkDouble leading-4'>{languageData?.InfluencerSubTitle} </p>
                            <p className='saira text-[12px] font-medium my-1'>{languageData?.InfluencerInput1}</p>
                            <div className='flex justify-center'>
                                <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder={languageData?.InfluencerInput1} />
                            </div>
                            <p className='saira text-[12px] font-medium my-1'>{languageData?.InfluencerInput2}</p>
                            <div className='flex justify-center'>
                                <input className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={name} onChange={e => setName(e.target.value)} placeholder={languageData?.InfluencerInput2} />
                            </div>

                            <p className='saira text-[12px] font-medium my-1'>{languageData?.InfluencerInput3}</p>
                            <div className='flex justify-center'>
                                <textarea className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none h-[100px] resize-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder={languageData?.InfluencerInput3} />
                            </div>

                            <div className='flex justify-center mt-4'>
                                <button onClick={e => handleSend()} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 max-w-[600px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.InfluencerBtn}</button>
                            </div>
                        </>
                        : <div className='flex items-center h-[90vh]'>
                            <div className={` backdrop-blur-xl bg-opacity-60 p-6 bg-black rounded-[20px] ${design === '0' ? ' border-[#FFD700]' : '  border-[#A2DBF0]'} border`}>

                                <div className='flex justify-end mb-2'>
                                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../../images/NewDesign/closeBtn.png')} alt="close" />
                                </div>
                                <svg className='m-auto my-4' width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.9981 73.501L78.2481 38.251L71.2481 31.251L42.9981 59.501L28.748 45.251L21.748 52.251L42.9981 73.501ZM49.9981 100.501C43.0814 100.501 36.5814 99.1877 30.4981 96.561C24.4147 93.9343 19.123 90.3727 14.623 85.876C10.123 81.376 6.56138 76.0843 3.93805 70.001C1.31471 63.9176 0.00138021 57.4176 -0.00195312 50.501C-0.00195312 43.5843 1.31138 37.0843 3.93805 31.001C6.56471 24.9176 10.1264 19.626 14.623 15.126C19.123 10.626 24.4147 7.06431 30.4981 4.44098C36.5814 1.81764 43.0814 0.50431 49.9981 0.500977C56.9147 0.500977 63.4147 1.81431 69.4981 4.44098C75.5814 7.06764 80.8731 10.6293 85.3731 15.126C89.8731 19.626 93.4364 24.9176 96.063 31.001C98.6897 37.0843 100.001 43.5843 99.9981 50.501C99.9981 57.4176 98.6847 63.9176 96.0581 70.001C93.4314 76.0843 89.8697 81.376 85.3731 85.876C80.8731 90.376 75.5814 93.9393 69.4981 96.566C63.4147 99.1926 56.9147 100.504 49.9981 100.501Z" fill="#48EFAC" />
                                </svg>
                                <h1 className='text-[24px] text-center text-[#48EFAC]  w-full font-semibold'>Thank you for the request. Our team will contact you soon</h1>

                                <div className='flex items-center gap-4'>
                                    <button onClick={e => setOpen(false)} className={`w-full bg-[white]  px-6 py-3 saira p-2 mt-4 text-[18px] text-[#5f5f5f] font-semibold ${design === '0' ? '  rounded-[50px] border-[2px] bg-white ' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawContinue}</button>

                                </div>
                            </div>
                        </div>
                }


            </div>
        </div>
    )
}

export default Influencer
