import React, { useEffect, useState } from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import joker from '../../images/CyberSaysPage/MyTicketJoker.png'
import coin from '../../images/CyberSaysPage/MyTicketCoin.png'
import { useQuery } from '@tanstack/react-query'
import userAPI from '../../Requests/user'
import moment from 'moment'
import refferals from '../../images/CyberSaysPage/headerRefferals.png'
import { useDesign } from '../../Helpers/Design/DesignContext'


function TicketsHistory({ setOpen, languageData, user }) {
    const { design } = useDesign()
    const [ticketsData, setTicketsData] = useState(null)
    const [pointsData, setPointsData] = useState(null)
    const [allData, setAllData] = useState(null)
    const [selectedButton, setSelectedButton] = useState('ticket');

    useQuery({
        queryKey: ['tickets'],
        queryFn: async () => {
            const res = await userAPI.getTickets();
            setTicketsData(res.data.tickets[0])
            return res.data.tickets[0];
        }
    })

    useQuery({
        queryKey: ['points'],
        queryFn: async () => {
            const res = await userAPI.getPoints();
            setPointsData(res.data.points[0])
            return res.data.points[0];
        }
    })

    useEffect(() => {
        if (ticketsData === null || pointsData === null) return
        let joined = {
            tickets: ticketsData,
            points: pointsData
        }

        proccessData(joined)
    }, [ticketsData, pointsData])

    function proccessData(proccessData) {
        if (proccessData === null) return


        let data = proccessData?.tickets.map(ticket => {
            return {
                name: 'ticket',
                type: ticket.type,
                datetime: ticket.datetime,
                amount: ticket.amount
            }
        })

        proccessData?.points?.map(point => {
            data.push({
                name: 'point',
                type: point.type,
                datetime: point.datetime,
                amount: point.amount
            })
        })

        let sorted = data?.sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
        console.log('sorted', sorted)
        setAllData(sorted)

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
            <div class=" justify-center flex my-2">
                <div class={`flex border-[1px]  m-auto rounded-[14px] border-[#FDA62D]  `}>
                    <div onClick={e => setSelectedButton('ticket')} className={`${selectedButton === 'ticket' && 'gradient-tourToggle'}  rounded-[12px] px-[20px] py-[5px] md:py-[6px]  cursor-pointer`}>
                        <p className={`${selectedButton === 'ticket' && '!text-black'} text-white saira font-bold text-[14px] flex items-center`}>Vegas Tickets:<img className='w-[16px] h-[16px] mx-[5px]' src={design === '0' ? joker : require('../../images/NewDesign/header/ticket.png')} alt="joker" /> {user?.raffle_tickets || 0}</p>
                    </div>
                    <div onClick={e => setSelectedButton('points')} className={`${selectedButton === 'points' && 'gradient-tourToggle'} rounded-[12px] px-[20px] py-[5px] md:py-[6px] cursor-pointer`}>
                        <p className={`${selectedButton === 'points' && '!text-black'} text-white saira font-bold text-[14px] flex items-center`}>
                            Points:<img className='w-[16px] h-[16px] mx-[5px]' src={design === '0' ? refferals : require('../../images/NewDesign/header/points.png')} alt="refferals" /> {user && user.points ? user?.points : 0}
                        </p>
                    </div>
                </div>
            </div>
            {
                selectedButton === 'ticket' && <div className='m-auto max-w-[345px] md:max-w-[600px] w-full mt-3 h-[470px] overflow-scroll'>
                    {
                        allData?.length > 0
                            ? allData !== null && allData?.map(ticket => {
                                return ticket.name === 'ticket' ? getTicketsMarkup(ticket.type, ticket.datetime, ticket.amount) : getPointsMarkup(ticket.type, ticket.datetime, ticket.amount)
                            })
                            : <div className='flex justify-center items-center h-[470px]'>
                                <p className='text-[18px] font-semibold text-center'>{languageData?.noTransactions}</p>
                            </div>
                    }
                </div>

            }
            {
                selectedButton === 'points' && <div className='m-auto max-w-[345px] md:max-w-[600px] w-full mt-3 h-[470px] overflow-scroll'>
                   <p className='text-center'>nema</p>
                </div>

            }

        </div>
    )
}

export default TicketsHistory
