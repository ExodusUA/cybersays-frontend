import React, { useEffect, useState } from 'react'
import close from '../../../images/CyberSaysPage/closeMenu.png'
import transaction from '../../../images/CyberSaysPage/TransactionLogo.png'
import { useDesign } from '../../../Helpers/Design/DesignContext'
import userAPI from '../../../Requests/user'
import moment from 'moment'
import { useQuery } from '@tanstack/react-query'
import joker from '../../../images/CyberSaysPage/MyTicketJoker.png'
import coin from '../../../images/CyberSaysPage/MyTicketCoin.png'
import Loading from '../../Loading'

function Ticket({ setOpen, languageData, user, setTicketsModal, setSelectedButton }) {
    const { design } = useDesign()
    const [ticketsData, setTicketsData] = useState(null)
    const [allData, setAllData] = useState(null)

    const { isLoading } = useQuery({
        queryKey: ['tickets'],
        queryFn: async () => {
            const res = await userAPI.getTickets();
            setTicketsData(res.data.tickets[0])
            proccessData(res.data.tickets[0])
            return res.data.tickets[0];
        }
    })

    useEffect(() => {
        if (ticketsData === null) return

        proccessData(ticketsData)
    }, [ticketsData])

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

        let sorted = data?.filter(ticket => {
            return moment.unix((Number(ticket.datetime))).format('DD MMMM, YYYY') === moment().format('DD MMMM, YYYY')
        })

        setAllData(sorted)

    }

    const getTicketsMarkup = (type, datetime, amount) => {
        switch (type) {
            case 'tickets_doubling_referral': return <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px] mr-2 md:mr-4' src={joker} alt="transaction" />
                    <div className='w-[200px] md:w-[400px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira w-[180px] md:w-[unset] leading-4 mb-1'>{languageData?.ticketsSection1Left}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[90px]'>
                    <p className='text-[20px] text-[#CAB8E8] font-semibold saira text-right'>+{amount}</p>
                    <p className='text-[12px] font-normal saira text-right'>{languageData?.ticketsSection1Right}</p>
                </div>
            </div>
            case 'tickets_email_referral': return <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px] mr-2 md:mr-4' src={joker} alt="transaction" />
                    <div className='w-[200px] md:w-[400px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira w-[180px] md:w-[unset] leading-4 mb-1'>{languageData?.ticketsSection2Left}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px]'>
                    <p className='text-[20px] text-[#CAB8E8] font-semibold saira text-right'>+{amount}</p>
                    <p className='text-[12px] font-normal saira  text-right'>{languageData?.ticketsSection2Right}</p>
                </div>
            </div>
            case 'tickets_buying_credits': return <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px] mr-2 md:mr-4' src={joker} alt="transaction" />
                    <div className='w-[200px] md:w-[400px]'>
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
                    <div className='w-[200px] md:w-[400px]'>
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
                    <div className='w-[200px] md:w-[400px]'>
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
                    <div className='w-[200px] md:w-[400px]'>
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
        <div onClick={e => setOpen(false)} className='w-screen h-screen fixed top-0 z-[99999]  p-4 flex items-center '>
            <div onClick={(e) => e.stopPropagation()} className={`max-w-[600px] w-full m-auto relative bg-[#0A1225B2] bg-opacity-70 backdrop-blur-md border-[1px] p-2 rounded-[12px] lg:px-4  ${design === '0' ? ' border-[#FFD700]' : '  border-[#A2DBF0]'}`}>
                <div className='flex justify-end md:mt-4 '>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                <p className='text-[18px] lg:text-[24px] text-center font-semibold gradient-linkDouble'>{languageData?.TicketModalTitle}</p>
                <div className='m-auto max-w-[345px] md:max-w-[600px] w-full h-[250px] overflow-scroll'>


                    {
                        isLoading === true || allData === null
                            ? <div className='flex justify-center h-full items-center'>
                                <Loading />
                            </div>
                            : allData?.length > 0
                                ? allData !== null && allData?.reverse().map(ticket => {
                                    return ticket.name === 'ticket' ? getTicketsMarkup(ticket.type, ticket.datetime, ticket.amount) : getPointsMarkup(ticket.type, ticket.datetime, ticket.amount)
                                })
                                : <div className='flex justify-center items-center h-[200px]'>
                                    <p className='text-[18px] font-semibold text-center'>{languageData?.noTransactions}</p>
                                </div>
                    }


                </div>
                <div className=' flex justify-center'>
                    <p onClick={e => {
                        setSelectedButton('ticket')
                        setTicketsModal(true)
                        setOpen(false)
                    }} className='text-[12px] text-center font-semibold text-[#D9D9D9] mt-2 underline gradient-link cursor-pointer'>{languageData?.earnedModalLink}</p>
                </div>
            </div>
        </div>
    )
}

export default Ticket


