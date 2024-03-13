import React, { useState } from 'react'
import close from '../../../images/CyberSaysPage/closeMenu.png'
import transaction from '../../../images/CyberSaysPage/TransactionLogo.png'
import { useDesign } from '../../../Helpers/Design/DesignContext'
import userAPI from '../../../Requests/user'
import moment from 'moment'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Loading'


function Earned({ setOpen, languageData, user, setTransactionsModal, userCountry }) {
    const { design } = useDesign()
    const [transactionsData, setTransactionsData] = useState(null)

    const { isLoading } = useQuery({
        queryKey: ['transactions'],
        queryFn: async () => {
            const res = await userAPI.getTransactions();
            setTransactionsData(res.data.transactions[0])
            return res
        }
    })

    const getMarkup = (type, datetime, amount, id, status) => {
        switch (type) {
            case 'doubling_referral': return <div className='flex justify-between items-center mt-4 '>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px] mr-2 md:mr-4' src={transaction} alt="transaction" />
                    <div className='w-[200px] md:w-[400px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira  leading-4 mb-2'>{languageData?.ticketsSection1Left}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira '>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px] leading-[18px]'>
                    <p className='text-[20px] text-[#93CC8E] font-semibold saira text-right mb-1'>+{userCountry === 'BR' || userCountry === 'UA' ? 'R$' : '$'}{amount}</p>
                    <p className='text-[12px] font-normal saira  text-right'>{languageData?.transactionsSection1Right}</p>
                </div>
            </div>
            case 'doubling': return <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                    <div className='w-[200px] md:w-[400px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira w-[200px] md:w-[unset] leading-4'>{languageData?.transactionsSection1Left}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px] leading-[18px]'>
                    <p className='text-[20px] text-[#93CC8E] font-semibold saira text-right mb-1'>+{userCountry === 'BR' || userCountry === 'UA' ? 'R$' : '$'}{amount}</p>
                    <p className='text-[12px] font-normal saira text-right'>{languageData?.transactionsSection2Right}</p>
                </div>
            </div>
            case 'withdraw': return <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                    <div className='w-[200px] md:w-[400px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira w-[200px] md:w-[unset] leading-4'>{languageData?.transactionsSection3Left} {languageData?.transactionsSection3Left2}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                        <p className='text-[12px] font-normal saira'>Transaction ID: {id} | Status: {status === 1 || status === 2 ? 'Pending' : status === 3 ? 'Approved' : status === 4 ? 'Declined' : 'No Data'}</p>
                    </div>
                </div>
                <div className='w-[100px] leading-[18px]'>
                    <p className='text-[20px] text-[#FF6D6D] font-semibold saira text-right mb-1'>-{userCountry === 'BR' || userCountry === 'UA' ? 'R$' : '$'}{amount}</p>
                    <p className='text-[12px] font-normal saira  text-right'>Withdrawn</p>
                </div>
            </div>
            case 'competition': return <div className='flex justify-between items-center mt-4'>
            <div className='flex items-center'>
                <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                <div className='w-[200px] md:w-[400px]'>
                    <p className='text-[12px]  md:text-[14px] font-semibold saira w-[200px] md:w-[unset] leading-4'>
                        {languageData?.TransactionCompetitionWinner}</p>
                    <p className='text-[12px]  md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                </div>
            </div>
            <div className='w-[100px] leading-[18px]'>
                <p className='text-[20px] text-[#93CC8E] font-semibold saira text-right mb-1'>+{userCountry === 'BR' || userCountry === 'UA' ? 'R$' : '$'}{amount}</p>
                <p className='text-[12px] font-normal saira  text-right'>{languageData?.transactionsSection2Right}</p>
            </div>
        </div>
        }
    }

    return (
        <div onClick={e => setOpen(false)} className='w-screen h-screen fixed top-0 z-[99999]  p-4 flex items-center '>
            <div onClick={(e) => e.stopPropagation()} className={`max-w-[600px] w-full m-auto relative bg-[#0A1225B2] bg-opacity-70 backdrop-blur-md border-[1px] p-2 rounded-[12px] lg:px-4 ${design === '0' ? ' border-[#FFD700]' : '  border-[#A2DBF0]'}`}>


                <div className='flex justify-end md:mt-4 '>
                    <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../../images/NewDesign/closeBtn.png')} alt="close" />
                </div>
                <p className='text-[18px] lg:text-[24px] text-center font-semibold gradient-linkDouble'>{userCountry === 'BR' || userCountry === 'UA' ? languageData?.earnedModalTitleBR : languageData?.earnedModalTitle}</p>
                <div className='m-auto max-w-[345px] md:max-w-[600px] w-full h-[250px] overflow-scroll'>

                    {
                        isLoading === true || transactionsData === null
                            ? <div className='flex justify-center h-full items-center'>
                                <Loading />
                            </div>
                            : transactionsData?.length > 0
                                ? transactionsData?.reverse().map((transaction, index) => {
                                    return getMarkup(transaction.type, transaction.datetime, userCountry === 'BR' || userCountry === 'UA' ? transaction.amount * 5 : transaction.amount, transaction.id, transaction.withdraw_status)
                                })
                                : <div className='flex justify-center items-center h-[200px]'>
                                    <p className='text-[18px] font-semibold text-center'>{languageData?.noTransactions}</p>

                                </div>

                    }

                </div>
                <div className=' flex justify-center'>
                    <p onClick={e => {
                        setTransactionsModal(true)
                        setOpen(false)
                    }} className='text-[12px] text-center font-semibold text-[#D9D9D9] mt-2 underline gradient-link cursor-pointer'>{languageData?.earnedModalLink}</p>
                </div>
            </div>
        </div>
    )
}

export default Earned


