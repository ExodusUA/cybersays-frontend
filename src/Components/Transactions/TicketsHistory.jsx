import React, { useEffect, useState } from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import joker from '../../images/CyberSaysPage/MyTicketJoker.png'
import coin from '../../images/CyberSaysPage/MyTicketCoin.png'
import { useQuery } from '@tanstack/react-query'
import userAPI from '../../Requests/user'
import moment from 'moment'

function TicketsHistory({ setOpen, languageData, user }) {

    const [ticketsData, setTicketsData] = useState(null)

    useQuery({
        queryKey: ['tickets'],
        queryFn: async () => {
            const res = await userAPI.getTicketsAndPoints();
            proccessData(res.data.tickets[0])
        }
    })

    function proccessData(proccessData) {
        if (proccessData === null) return



        let data = proccessData?.map(ticket => {
            return {
                name: 'ticket',
                type: ticket.type,
                datetime: ticket.datetime,
                amount: ticket.amount
            }
        })

        /*
        proccessData?.points?.map(point => {
            data.push({
                name: 'point',
                type: point.type,
                datetime: point.datetime,
                amount: point.amount
            })
        })
        */

        let sorted = data?.sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
        setTicketsData(sorted)
        console.log(sorted)
    }

    const getTicketsMarkup = (type, datetime, amount) => {
        switch (type) {
            case 'doubling_referral': return <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px] mr-2 md:mr-4' src={joker} alt="transaction" />
                    <div className='w-[200px] md:w-[300px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira w-[180px] md:w-[unset] leading-4 mb-1'>{languageData?.ticketsSection1Left}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[90px]'>
                    <p className='text-[20px] text-[#CAB8E8] font-semibold saira text-right'>+{amount}</p>
                    <p className='text-[12px] font-normal saira text-right'>{languageData?.ticketsSection1Right}</p>
                </div>
            </div>
            case 'email_referral': return <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px] mr-2 md:mr-4' src={joker} alt="transaction" />
                    <div className='w-[200px] md:w-[300px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira w-[180px] md:w-[unset] leading-4 mb-1'>{languageData?.ticketsSection2Left}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px]'>
                    <p className='text-[20px] text-[#CAB8E8] font-semibold saira text-right'>+{amount}</p>
                    <p className='text-[12px] font-normal saira  text-right'>{languageData?.ticketsSection2Right}</p>
                </div>
            </div>
            case 'buying_credits': return <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px] mr-2 md:mr-4' src={joker} alt="transaction" />
                    <div className='w-[200px] md:w-[300px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira w-[180px] md:w-[unset] leading-4 mb-1'>{languageData?.ticketsSection3Left} {amount} {languageData?.ticketsSection3Left2}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira '>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px]'>
                    <p className='text-[20px] text-[#CAB8E8] font-semibold saira text-right'>+{amount}</p>
                    <p className='text-[12px] font-normal saira  text-right'>{languageData?.ticketsSection3Right}</p>
                </div>
            </div>
        }
    }

    const getPointsMarkup = (type, datetime, amount) => {
        switch (type) {
            case 'doubling_referral': return <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px] mr-2 md:mr-4' src={coin} alt="transaction" />
                    <div className='w-[200px] md:w-[300px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira w-[180px] md:w-[unset] leading-4 mb-1'>{languageData?.ticketsSection4Left}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px]'>
                    <p className='text-[20px] text-[#CAB8E8] font-semibold saira text-right'>+{amount}</p>
                    <p className='text-[12px] font-normal saira  text-right'>{languageData?.ticketsSection4Right}</p>
                </div>
            </div>
            case 'email_referral': return <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px] mr-2 md:mr-4' src={coin} alt="transaction" />
                    <div className='w-[200px] md:w-[300px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira w-[180px] md:w-[unset] leading-4 mb-1'>{languageData?.ticketsSection5Left}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px]'>
                    <p className='text-[20px] text-[#CAB8E8] font-semibold saira text-right'>+{amount}</p>
                    <p className='text-[12px] font-normal saira  text-right'>{languageData?.ticketsSection5Right}</p>
                </div>
            </div>
            case 'buying_credits': return <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px] mr-2 md:mr-4' src={coin} alt="transaction" />
                    <div className='w-[200px] md:w-[300px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira w-[180px] md:w-[unset] leading-4 mb-1'>{languageData?.ticketsSection6Left} {amount} {languageData?.ticketsSection6Left2}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira '>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px]'>
                    <p className='text-[20px] text-[#CAB8E8] font-semibold saira text-right'>+{amount}</p>
                    <p className='text-[12px] font-normal saira  text-right'>{languageData?.ticketsSection6Right}</p>
                </div>
            </div>
        }
    }

    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 '>
            <div className='flex justify-end max-w-[600px] m-auto md:my-4'>
                <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={close} alt="close" />
            </div>
            <p className='text-[18px] md:text-[32px] font-semibold text-center'>{languageData?.ticketsTitle}</p>
            <div className='m-auto max-w-[345px] md:max-w-[600px] w-full mt-3 h-[470px] overflow-scroll'>
                {
                    ticketsData?.length > 0
                        ? ticketsData !== null && ticketsData?.map(ticket => {
                            return ticket.name === 'ticket' ? getTicketsMarkup(ticket.type, ticket.datetime, ticket.amount) : getPointsMarkup(ticket.type, ticket.datetime, ticket.amount)
                        })
                        : <div className='flex justify-center items-center h-[470px]'>
                            <p className='text-[18px] font-semibold text-center'>{languageData?.noTransactions}</p>
                        </div>
                }
            </div>

        </div>
    )
}

export default TicketsHistory
