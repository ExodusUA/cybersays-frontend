import React, { useState } from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import social1 from '../../images/CyberSaysPage/socialApple.png'
import social2 from '../../images/CyberSaysPage/socialNetflix.png'
import social3 from '../../images/CyberSaysPage/socialSpotify.png'
import TransactionHistory from './TransactionHistory'
import TicketsHistory from './TicketsHistory'

function Withdraw({ user, setOpen }) {

    const [selectedPayment, setSelectedPayment] = useState(null)

    const paymentMethods = [
        {
            id: 1,
            name: 'apple',
            image: social1,
        },
        {
            id: 2,
            name: 'netflix',
            image: social2,
        },
        {
            id: 3,
            name: 'spotify',
            image: social3,
        },
        {
            id: 4,
            name: 'apple',
            image: social1,
        },
        {
            id: 5,
            name: 'netflix',
            image: social2,
        },
        {
            id: 6,
            name: 'spotify',
            image: social3,
        }

    ]

    const [transactionsModal, setTransactionsModal] = useState(false)
    const [ticketsModal, setTicketsModal] = useState(false)

    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='flex justify-end'>
                <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
            </div>
            <p className='text-[18px] font-semibold text-center'>Withdraw</p>
            <p className='text-[12px] text-[#FFED63] font-medium text-center saira'>Can withdrwa all or nothing</p>
            <div className='bg-[#EAEAEA] bg-opacity-30 backdrop-blur-lg rounded-[30px] text-center flex justify-center w-[150px] m-auto mt-3'>
                <div>
                    <p className='text-[32px] text-[#FFED63] font-bold text-center saira leading-9 mt-1'>${user?.earned}</p>
                    <p className='text-[12px] font-medium text-center saira leading-3 mb-2'>Available</p>
                </div>
            </div>
            <p className='text-[18px] font-semibold text-center my-2'>We are paying via xoxoDAY</p>
            <div className='max-h-[320px] overflow-scroll border-b-[2px] border-[#FFED63]'>
                <div className='flex flex-wrap justify-between mt-2 max-w-[375px] m-auto'>
                    {paymentMethods.map((item, index) => (
                        <div key={index} className='w-[33%] mb-2'>
                            <img
                                onClick={e => setSelectedPayment(index)}
                                className={`${selectedPayment === index && 'border-[2px] !border-[#FFED63]'} w-[110px] h-[140px] cursor-pointer rounded-[20px]`}
                                src={item.image}
                                alt="social"
                            />
                        </div>
                    ))}

                </div>

            </div>
            <p className='text-[12px] font-semibold underline text-center saira cursor-pointer mx-[80px] my-2'>Click to see what payment methods
                are avaliable in your country</p>
            <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-2'>Withdrawn</button>


            <div className='text-center mt-4'>
                <p className='saira' onClick={e => setTransactionsModal(true)}>Transaction History</p>
                <p className='saira' onClick={e => setTicketsModal(true)}>My Tickets & Points</p>
            </div>

            {
                transactionsModal && <TransactionHistory setOpen={setTransactionsModal} />
            }

            {
                ticketsModal && <TicketsHistory setOpen={setTicketsModal} />
            }
        </div>
    )
}

export default Withdraw
