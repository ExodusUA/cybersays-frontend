import React from 'react'
import logoCyber from '../../images/logoCyberYellow.png'
import vegas from '../../images/vegas.png'
import selectGift1 from '../../images/selectGift1.png'
import giftFields from '../../images/giftFields.png'
import imLive from '../../images/ImLiveLogo.png'
import field from '../../images/fieldMilestone.png'

function MileStone3() {
    return (
        <div>
            <h2 className='text-[#1E1E1E] text-[24px] font-bold text-center my-2'>Milestone #3:</h2>
            <div className='gradient-milestone3 w-[90%] p-3 m-auto rounded-[16px] '>
                <div className='flex items-center gap-3 justify-center pt-4'>
                    <img className=' w-[115px] mb-[-5px] ' src={logoCyber} alt="Image" />
                    <p className='text-white font-bold text-[16px] saira'>Take your friends to the craziest weekend ever in Vegas</p>
                </div>
                <div className='relative mt-2'>
                    <div className=' absolute  flex w-full'>
                        <img className=' h-[30px] absolute left-[40px] top-[6px] cursor-pointer' src={selectGift1} alt="selectGift1" />
                    </div>
                    <img className='  w-full select-none pointer-events-none ' src={giftFields} alt="giftFields" />

                </div>
                <div className='relative'>
                    <img className=' w-[140px]  m-auto' src={vegas} alt="image" />
                    <div className='px-4 py-3 !rounded-[20px] w-auto border-[1px] border-[#8753CA] bg-[#83869b] backdrop-blur-xl bg-opacity-25 '>
                        <p className='text-center text-[14px] font-normal leading-6 saira'>As long as you deposit more in ImLive and as long as you refer more you get more raffle tickets and
                            <span className='text-[#7A2FC6] font-bold saira'> Have a chance to win a weekend</span>
                        </p>

                    </div>

                </div>
                <div className=' relative my-3'>
                    <img src={field} alt="field" />
                    <div className=''>
                        <div className=' absolute top-[7px] left-[30px] cursor-pointer'>
                            <p className='text-[12px] text-[#1E1E1E] font-normal saira text-center mb-[-3px]'>Deposits I made:</p>
                            <p className='text-[12px] text-gradient font-semibold saira text-center'>12 deposits</p>
                        </div>
                        <img className='w-[73px]  absolute top-[7px] right-[35px] cursor-pointer' src={imLive} alt="imLive" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MileStone3
