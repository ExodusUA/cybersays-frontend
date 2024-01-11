import React from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import offerTrue from '../../images/CyberSaysPage/offerTrue.png'
import offerFalse from '../../images/CyberSaysPage/offerFalse.png'

function MyReferralsModal() {
    const data = [
        {
            name: 'NeDanikDovgiyNick',
            offer: true,
            send: true
        },
        {
            name: 'DanikDovgiyNick',
            offer: false,
            send: true
        },
        {
            name: 'DanikDovgiyNick',
            offer: false,
            send: true
        },
        {
            name: 'NeDanikDovgiyNick',
            offer: true,
            send: true
        },

    ]
    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='flex justify-end'>
                <img className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
            </div>
            {/*
            <div>
                <p className='text-[18px] font-semibold text-center mt-4'>Your referrals</p>
                <p className='saira text-[16px] font-semibold text-center'>lorem ipsum</p>
                <p className='saira text-[16px] font-semibold text-center my-5'>You haven't referred friends yet</p>
                <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2'>Refer your friends 👬</button>
            </div>
            */}
            <div>
                <p className='text-[18px] font-semibold text-center mt-4'>My referrals</p>
                <p className='saira text-[16px] font-semibold text-center'>See if your referred friends took the ImLive double-money offer—only then can you take them to Vegas if you win</p>
                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[50px] text-center py-1 mt-3'>
                    <p className='text-[14px] font-semibold text-center flex justify-center'>You’re referred by: <p className='ml-1 truncate w-[100px]'>(Username)</p></p>
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
                    {data.map((item, index) => (
                        <div key={item} className=' flex justify-between items-center'>
                            <div className='w-[25px]'>
                                <p className='text-[14px] font-semibold saira'>{index + 1}</p>
                            </div>
                            <div className='w-[2px] h-[50px] bg-[#FFED63]'></div>
                            <div className='w-[120px] '>
                                <p className='text-[14px] font-semibold saira truncate'>{item.name}</p>
                            </div>
                            <div className='w-[2px] h-[50px] bg-[#FFED63]'></div>
                            <div className='w-[70px]'>
                                {item.offer ? (
                                    <img className='w-[24px] h-[24px] m-auto' src={offerTrue} alt="offerTrue" />
                                ) : (
                                    <img className='w-[24px] h-[24px] m-auto' src={offerFalse} alt="offerFalse" />
                                )}
                            </div>

                            <div className='w-[2px] h-[50px] bg-[#FFED63]'></div>
                            <div className='w-[70px]'>
                                {item.offer ? (
                                    <img className='w-[24px] h-[24px] m-auto' src={offerTrue} alt="offerTrue" />
                                ) : (
                                    <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold cursor-pointer'>Send</button>
                                )}
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default MyReferralsModal
