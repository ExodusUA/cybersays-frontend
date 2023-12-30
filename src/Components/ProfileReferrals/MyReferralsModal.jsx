import React, { useState } from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import offerTrue from '../../images/CyberSaysPage/offerTrue.png'
import offerFalse from '../../images/CyberSaysPage/offerFalse.png'
import { useQuery } from '@tanstack/react-query'
import userAPI from '../../Requests/user'

function MyReferralsModal() {

    const [referralData, setReferralData] = useState([])

    useQuery({
        queryKey: ['referralData'],
        queryFn: async () => {
            const res = await userAPI.getReferralsList()
            setReferralData(res.data)
            return res
        }
    })

    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='flex justify-end'>
                <img className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
            </div>
            {
                referralData.referrals && referralData.referrals.length > 0
                    ? <>
                        <p className='text-[18px] font-semibold text-center mt-4'>My referrals</p>
                        <p className='saira text-[16px] font-semibold text-center'>See if your referred friends took the ImLive double-money offer—only then can you take them to Vegas if you win</p>
                        <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[50px] text-center py-1 mt-3'>
                            <p className='text-[14px] font-semibold text-center flex justify-center'>You’re eferred by: <p className='ml-1 truncate w-[100px]'>{referralData.referredBy}</p></p>
                            <p className='saira text-[12px] font-semibold text-center mx-5'>If your referrer took ImLive's double-money offer, you can pick them for a Vegas trip if you win.</p>
                        </div>
                        <div className='mt-4'>
                            <div className=' flex justify-between items-center'>
                                <div className='w-[25px]'>
                                    <p className='text-[14px] font-semibold'>#</p>
                                </div>
                                <div className='w-[2px] h-[50px] bg-[#FFED63]'></div>
                                <div className='w-[120px] truncate'>
                                    <p className='text-[14px] font-semibold'>Name</p>
                                </div>
                                <div className='w-[2px] h-[50px] bg-[#FFED63]'></div>
                                <div className='w-[70px]'>
                                    <p className='text-[14px] font-semibold'>Took Offer</p>
                                </div>

                                <div className='w-[2px] h-[50px] bg-[#FFED63]'></div>
                                <div className='w-[70px]'>
                                    <p className='text-[14px] font-semibold'>Send Email</p>
                                </div>

                            </div>
                            <div className='w-full h-[2px] bg-[#FFED63]'></div>
                            {referralData.referrals && referralData.referrals.map((item, index) => (
                                <div key={item} className=' flex justify-between items-center'>
                                    <div className='w-[25px]'>
                                        <p className='text-[14px] font-semibold saira'>{index + 1}</p>
                                    </div>
                                    <div className='w-[2px] h-[50px] bg-[#FFED63]'></div>
                                    <div className='w-[120px] '>
                                        <p className='text-[14px] font-semibold saira truncate'>{item.email}</p>
                                    </div>
                                    <div className='w-[2px] h-[50px] bg-[#FFED63]'></div>
                                    <div className='w-[70px]'>
                                        {
                                            item.completed_tasks && JSON.parse(item.completed_tasks).length > 3
                                                ? <img className='w-[24px] h-[24px] m-auto' src={offerTrue} alt="offerTrue" />
                                                : <img className='w-[24px] h-[24px] m-auto' src={offerFalse} alt="offerFalse" />
                                        }
                                    </div>

                                    <div className='w-[2px] h-[50px] bg-[#FFED63]'></div>
                                    <div className='w-[70px]'>
                                        {
                                            item.got_email === 'true'
                                                ? <img className='w-[24px] h-[24px] m-auto' src={offerTrue} alt="offerTrue" />
                                                : <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold cursor-pointer'>Send</button>
                                        }
                                    </div>

                                </div>
                            ))}

                        </div>
                    </>
                    : <div>
                        <p className='text-[18px] font-semibold text-center mt-4'>Your referrals</p>
                        <p className='saira text-[16px] font-semibold text-center'>lorem ipsum</p>
                        <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[50px] text-center py-1 mt-3'>
                            <p className='text-[14px] font-semibold text-center flex justify-center'>You’re eferred by: <p className='ml-1 truncate w-[100px]'>{referralData.referredBy}</p></p>
                            <p className='saira text-[12px] font-semibold text-center mx-5'>If your referrer took ImLive's double-money offer, you can pick them for a Vegas trip if you win.</p>
                        </div>
                        <p className='saira text-[16px] font-semibold text-center my-5'>You haven't referred friends yet</p>
                        <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2'>Refer your friends 👬</button>
                    </div>

            }
        </div>
    )
}

export default MyReferralsModal
