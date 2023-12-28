import React from 'react'
import logoCyber from '../../images/logoCyberYellow.png'
import vegas from '../../images/vegas.png'
import selectGift1 from '../../images/selectGift1.png'
import giftFields from '../../images/giftFields.png'
import imLive from '../../images/ImLiveLogo.png'
import field from '../../images/fieldMilestone.png'
import fieldDesctop2 from '../../images/fieldDesctop2.png'

function MileStone3({ userData, languageData}) {
    return (
        <div className='px-5 lg:px-11 md:mt-14'>
            <h2 className='text-white text-[24px] font-bold text-center my-5'>Milestone #3:</h2>
            <div className='gradient-milestone3 max-w-[1170px] xl:w-full p-3 lg:p-6 m-auto rounded-[16px]'>
                <div className='flex items-center gap-3 justify-center lg:justify-normal py-2'>
                    <img className=' w-[115px] lg:w-[400px] mb-[-5px] lg:mb-[5px] lg:mr-4' src={logoCyber} alt="Image" />
                    <p className='text-white font-bold text-[16px] lg:text-[32px] saira'>Take your friends to the craziest weekend ever in Vegas</p>
                </div>
                <div className='md:flex justify-around md:justify-around md:items-center'>
                    <div className='relative mt-2 max-w-[380px] m-auto md:m-[unset]'>
                        <div className=' absolute  flex w-full'>
                            <img className=' h-[30px] absolute left-[35px] top-[6px] cursor-pointer' src={selectGift1} alt="selectGift1" />
                        </div>
                        <img className='  w-full select-none pointer-events-none ' src={giftFields} alt="giftFields" />

                    </div>
                    <div>
                        <div className='relative'>
                            <img className=' w-[140px] lg:w-[250px]  m-auto' src={vegas} alt="image" />
                            <div className='max-w-[630px] m-auto px-4 py-3 lg:py-6 rounded-[20px] lg:rounded-[35px] w-auto border-[1px] border-[#8753CA] bg-[#83869b] backdrop-blur-xl bg-opacity-25 '>
                                <p className='text-center text-[14px] lg:text-[20px] font-normal leading-6 saira'>As long as you deposit more in ImLive and as long as you refer more you get more raffle tickets and
                                    <span className='text-[#7A2FC6] font-bold saira'> Have a chance to win a weekend in Vegas!</span>
                                </p>

                            </div>

                        </div>
                        <div className=' relative my-3 lg:my-5 max-w-[280px] lg:max-w-[630px] w-full m-auto'>
                            <img className='block lg:hidden' src={field} alt="field" />
                            <img className='hidden lg:block ' src={fieldDesctop2} alt="fieldDesctop2" />

                            <div className=''>
                                <div className=' absolute top-[7px] lg:top-[10px] left-[30px] lg:left-[100px]  cursor-pointer'>
                                    <p className='text-[12px] lg:text-[14px] text-[#1E1E1E] font-normal saira text-center mb-[-3px]'>Deposits I made:</p>
                                    <p className='text-[12px] lg:text-[14px] text-gradient font-semibold saira text-center'>{userData?.deposits} deposits</p>
                                </div>
                                <img className='w-[73px] lg:w-[85px]  absolute top-[7px] lg:top-[10px] right-[35px] lg:right-[110px] cursor-pointer' src={imLive} alt="imLive" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MileStone3
