import React, { useEffect, useState } from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import offerTrue from '../../images/CyberSaysPage/offerTrue.png'
import offerFalse from '../../images/CyberSaysPage/offerFalse.png'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import userAPI from '../../Requests/user'
import { useDesign } from '../../Helpers/Design/DesignContext'

function MyReferralsModal({ setOpen, user, languageData }) {
    const { design } = useDesign()

    const [referralData, setReferralData] = useState([])
    const queryClient = useQueryClient()
    const [step, setStep] = useState(1)
    const [selectedReferral, setSelectedReferral] = useState(null)
    const [email, setEmail] = useState('')

    useQuery({
        queryKey: ['referralData'],
        queryFn: async () => {
            const res = await userAPI.getReferralsList()
            setReferralData(res.data.referrals)
            return res
        }
    })

    async function sendEmail(email, userID) {
        try {
            const res = await userAPI.sendEmail(email, userID)
            if (res.data === 'Email sent') {
                queryClient.invalidateQueries('referralData')
            }
        } catch (error) {
            alert(error)
        }
    }

    const [isLinkCopied, setIsLinkCopied] = useState(false)

    const shareRefferalLink = () => {
        if (navigator.share) {
            navigator
                .share({
                    title: document.title,
                    text: 'Sharing',
                    url: '/' + user?.referral_code,
                })
                .then(() => console.log('Successful share! 🎉'))
                
        } else {
            window.navigator.clipboard.writeText(window.location.host + '/' + user?.referral_code)
            setIsLinkCopied(true)

            setTimeout(() => {
                setIsLinkCopied(false)
            }, 3000)
        }
    }

    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='max-w-[600px] m-auto'>


                <div className='flex justify-end md:my-4'>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../images/NewDesign/closeBtn.png')} alt="close" />
                </div>

                {
                    step === 1
                        ? referralData.referrals && referralData.referrals.length > 0
                            ? <>
                                <p className='text-[18px] md:text-[24px] font-semibold text-center mt-4'>{languageData?.myReferralsTitle}</p>
                                <p className='saira text-[16px] font-semibold text-center'>{languageData?.myReferralsSubTitle}</p>
                                {
                                    referralData.referredBy && <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[50px] text-center py-1 md:py-2 mt-3'>
                                        <p className='text-[14px] md:text-[24px] font-semibold text-center flex justify-center md:mb-1'>{languageData?.myReferralsDoneTitle} <p className='ml-1 truncate w-[100px] md:w-[170px]'>{referralData.referredBy}</p></p>
                                        <p className='saira text-[12px] font-semibold text-center mx-5'>{languageData?.myReferralsDoneSubTitle}</p>
                                    </div>
                                }
                                <div className='mt-4'>
                                    <div className=' flex justify-between items-center'>
                                        <div className='w-[25px]'>
                                            <p className='text-[14px] font-semibold'>#</p>
                                        </div>
                                        <div className={`w-[2px] h-[50px] ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'}`}></div>
                                        <div className='w-[120px] md:w-[280px] truncate md:ml-[-20px]'>
                                            <p className='text-[14px] font-semibold '>{languageData?.myReferralsSheet1}</p>
                                        </div>
                                        <div className={`w-[2px] h-[50px] ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'}`}></div>
                                        <div className='w-[70px] md:w-[30px] mr-[30px]'>
                                            <p className='text-[14px] font-semibold md:ml-[-5px]'>{languageData?.myReferralsSheet2}</p>
                                        </div>

                                       {
                                        /*
                                         <div className={`w-[2px] h-[50px] ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'}`}></div>
                                        <div className='w-[70px] md:w-[60px]'>
                                            <p className='text-[14px] font-semibold md:ml-[-20px]'>{languageData?.myReferralsSheet3}</p>
                                        </div>
                                        */
                                       }

                                    </div>
                                    <div className={`w-full h-[2px] ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'}`}></div>
                                    <div className='h-[400px] overflow-scroll'>
                                        {referralData.referrals && referralData.referrals.map((item, index) => (
                                            <div key={item} className=' flex justify-between items-center'>
                                                <div className='w-[25px]'>
                                                    <p className='text-[14px] font-semibold saira'>{index + 1}</p>
                                                </div>
                                                <div className={`w-[2px] h-[50px] ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'}`}></div>
                                                <div className='w-[120px] md:w-[280px] md:ml-[-20px]'>
                                                    <p className='text-[14px] font-semibold saira truncate'>{item.email}</p>
                                                </div>
                                                <div className={`w-[2px] h-[50px] ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'}`}></div>
                                                <div className='w-[70px] md:w-[30px] flex mr-[30px]'>
                                                    {
                                                        item.completed_tasks && JSON.parse(item.completed_tasks).length === 3
                                                            ? <img className='w-[24px] h-[24px] m-auto' src={offerTrue} alt="offerTrue" />
                                                            : <img className='w-[24px] h-[24px] m-auto' src={offerFalse} alt="offerFalse" />
                                                    }
                                                </div>

                                                {
                                                    /*
                                                    <div className={`w-[2px] h-[50px] ${design === '0' ? 'bg-[#FFED63]' : 'gradient-homepageBtn'}`}></div>
                                                <div className='w-[70px] md:w-[60px]'>
                                                    {
                                                        item.got_email === 'true'
                                                            ? <img className='w-[24px] h-[24px] m-auto md:ml-0' src={offerTrue} alt="offerTrue" />
                                                            : <button onClick={e => {
                                                                setSelectedReferral(item.email)
                                                                setStep(2)
                                                            }} className={`w-full  border-[2px] ${design === '0' ? 'bg-white border-[#FFED63] rounded-[50px]' : 'gradient-homepageBtn border-transparent rounded-[12px]'}    text-black text-[18px] saira font-semibold cursor-pointer md:ml-[-20px]`}>{languageData?.myReferralsSend}</button>
                                                    }
                                                </div>
                                                    */
                                                }

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                            : <div>
                                <p className='text-[18px] font-semibold text-center mt-4'>{languageData?.myReferralsTitle}</p>

                                {
                                    referralData.referredBy && <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[50px] text-center py-1 mt-3'>
                                        <p className='text-[14px] font-semibold text-center flex justify-center'>{languageData?.myReferralsUnDoneTitle} <p className='ml-1 truncate w-[100px]'>{referralData.referredBy}</p></p>
                                        <p className='saira text-[12px] font-semibold text-center mx-5'>{languageData?.myReferralsUnDoneSubTitle}</p>
                                    </div>
                                }

                                <p className='saira text-[16px] font-semibold text-center my-5'>{languageData?.myReferralsSubTitle2}</p>
                                <button onClick={e => shareRefferalLink()} className={`w-full bg-white text-black text-[18px] saira font-semibold py-2 ${design === '0' ? ' rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>
                                    {
                                        isLinkCopied === false
                                            ? 'Refer your friends 👬'
                                            : 'Link copied!'
                                    }
                                </button>
                            </div>
                        : step === 2
                            ? <div>
                                <p className='text-[18px] md:text-[24px] font-semibold text-center my-2'>{'Add your email to be the sender'}</p>
                                <div className='flex justify-center mt-4'>
                                    <input onChange={e => setEmail(e.target.value)} value={email} className={`w-full bg-white max-w-[600px] text-[16px] saira font-regular p-3 text-black outline-none ${design === '0' ? '  rounded-[50px]' : ' rounded-[12px] '}`} type="text" placeholder={languageData?.withdrawInputEmail} />
                                </div>
                                <div className='flex justify-center mt-4'>
                                    <button onClick={e => {
                                        if (email === '') return
                                        setStep(3)
                                    }} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 max-w-[600px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawContinue}</button>
                                </div>
                            </div>
                            : <div className={` backdrop-blur-xl bg-opacity-60 p-6 bg-black rounded-[20px] ${design === '0' ? ' border-[#FFD700]' : '  border-[#A2DBF0]'} border`}>

                                <div className='flex justify-end mb-2'>
                                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../images/NewDesign/closeBtn.png')} alt="close" />
                                </div>
                                <svg className='m-auto my-4' width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.9981 73.501L78.2481 38.251L71.2481 31.251L42.9981 59.501L28.748 45.251L21.748 52.251L42.9981 73.501ZM49.9981 100.501C43.0814 100.501 36.5814 99.1877 30.4981 96.561C24.4147 93.9343 19.123 90.3727 14.623 85.876C10.123 81.376 6.56138 76.0843 3.93805 70.001C1.31471 63.9176 0.00138021 57.4176 -0.00195312 50.501C-0.00195312 43.5843 1.31138 37.0843 3.93805 31.001C6.56471 24.9176 10.1264 19.626 14.623 15.126C19.123 10.626 24.4147 7.06431 30.4981 4.44098C36.5814 1.81764 43.0814 0.50431 49.9981 0.500977C56.9147 0.500977 63.4147 1.81431 69.4981 4.44098C75.5814 7.06764 80.8731 10.6293 85.3731 15.126C89.8731 19.626 93.4364 24.9176 96.063 31.001C98.6897 37.0843 100.001 43.5843 99.9981 50.501C99.9981 57.4176 98.6847 63.9176 96.0581 70.001C93.4314 76.0843 89.8697 81.376 85.3731 85.876C80.8731 90.376 75.5814 93.9393 69.4981 96.566C63.4147 99.1926 56.9147 100.504 49.9981 100.501Z" fill="#48EFAC" />
                                </svg>
                                <h1 className='text-[24px] text-center text-[#48EFAC]  w-full font-semibold'>{languageData?.withdrawConfirm}</h1>

                                <div className='flex items-center gap-4'>
                                    <button onClick={e => setOpen(false)} className={`w-full bg-[white]  px-6 py-3 saira p-2 mt-4 text-[18px] text-[#5f5f5f] font-semibold ${design === '0' ? '  rounded-[50px] border-[2px] bg-white ' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawContinue}</button>

                                </div>
                            </div>
                }
            </div>
        </div>
    )
}

export default MyReferralsModal
