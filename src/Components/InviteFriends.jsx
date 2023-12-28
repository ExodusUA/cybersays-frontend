import React from 'react'
import clock from '../images/landing/clock.png';
import medal from '../images/landing/medal.png';
import share from '../images/landing/shareBtn.png';
import copy from '../images/landing/copyBtn.png';

function InviteFriends() {
    return (
        <div className=' absolute top-0 z-30 max-w-[770px] w-full'>
            <h2 className='text-center text-[40px] font-bold uppercase max-w-[570px] w-full m-auto'>invite your friends and gain money</h2>
            <div className='p-5 rounded-[12px]  gradient-userButton   border-[1px] border-[#FF1CBB] flex'>
                <div className='w-[20%]  mt-5 mr-3'>
                    <p className='text-[24px] font-bold'>Time Left</p>
                    <img className='w-[64px] h-[64px] m-auto my-4' src={clock} alt="Clock" />
                    <p className='saira text-[24px] text-center'>09:53</p>
                </div>
                <div className='p-5 rounded-[12px]  bg-opacity-25 w-[90%]  border-[1px] border-[#FF1CBB]'>
                    <p className='font-bold text-[24px]  mb-5'>Rewards</p>
                    <div className='flex justify-around'>
                        <div className='max-w-[100px] w-full'>
                            <h2 className='text-gradient text-[24px] font-bold'>$5</h2>
                            <p className='saira text-[16px] font-normal'>For 5 people invited</p>
                        </div>
                        <div className='max-w-[100px] w-full'>
                            <h2 className='text-gradient text-[24px] font-bold'>$10</h2>
                            <p className='saira text-[16px] font-normal'>For 10 people invited</p>
                        </div>
                        <div className='max-w-[110px] w-full'>
                            <h2 className='text-gradient text-[24px] font-bold'>$1000</h2>
                            <p className='saira text-[16px] font-normal'>For up to 1000 people invited</p>
                        </div>
                    </div>
                    <div className='h-[2px] gradient-line my-4' ></div>
                    <div className='flex'>
                        <img className='w-[53px] mr-4' src={medal} alt="medal" />
                        <p className='text-[16px] font-normal saira text-left'>Friends you have invited need to complete an offer for you to receiveTreatCoins</p>
                    </div>
                    <div className='gradient mt-5 p-4'>
                        <h2 className='text-[24px] font-bold mt-1'>Share with your friends</h2>
                        <p className='saira text-[16px] font-normal mt-2'>Invite your friends to join the adventure and earn rewards, let the Treacoin journey begin</p>
                        <div className='flex justify-between items-center mt-4'>
                            <button className='flex items-center w-full bg-white rounded-[12px] saira text-black text-[16px] font-semibold justify-center py-2'>Share link <img className='w-[24px] ml-2' src={share} alt="share" /></button>
                            <p className='mx-3 text-[16px] saira font-semibold'>Or</p>
                            <button className='flex items-center w-full bg-white rounded-[12px] saira text-black text-[16px] font-semibold justify-center py-2'>Copy link <img className='w-[24px] ml-2' src={copy} alt="copy" /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InviteFriends
