import React, { useState } from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import transaction from '../../images/CyberSaysPage/TransactionLogo.png'
import { useQuery } from '@tanstack/react-query'
import userAPI from '../../Requests/user'
import moment from 'moment'
import { useDesign } from '../../Helpers/Design/DesignContext'
import Loading from '../Loading'

function TransactionHistory({ setOpen, languageData, user, userCountry, setWithdrawModal }) {
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

    async function getTransactionStatus(status) {
        switch (status) {
            case 1: return 'Processing'
            case 2: return 'Pending'
            case 3: return 'Approved'
            case 4: return 'Declined'
        }

    }

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
            case 'withdraw':
            case 'paxum_withdraw':
                return <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                        <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                        <div className='w-[200px] md:w-[400px]'>
                            <p className='text-[12px] md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                            <p className='text-[12px] md:text-[14px] font-semibold saira w-[200px] md:w-[unset] leading-4'>{languageData?.transactionsSection3Left}</p>
                            <p className='text-[12px] font-normal saira'>{languageData?.transactionTransactionID} {id} </p>

                        </div>
                    </div>
                    <div className='w-[100px] leading-[18px]'>
                        <p className='text-[20px] text-[#FF6D6D] font-semibold saira text-right mb-1'>-{userCountry === 'BR' || userCountry === 'UA' ? 'R$' : '$'}{amount}</p>
                        <p className='text-[12px] font-normal saira  text-right'>{languageData?.transactionTransactionID}</p>
                    </div>
                </div>
            case 'competition': return <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                    <div className='w-[200px] md:w-[400px]'>
                        <p className='text-[12px]  md:text-[14px] font-semibold saira w-[200px] md:w-[unset] leading-4'>
                            {languageData?.TransactionCompetitionWinner}</p>
                        <p className='text-[12px] text-[#D7D7D7]  font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px] leading-[18px]'>
                    <p className='text-[20px] text-[#93CC8E] font-semibold saira text-right mb-1'>+{userCountry === 'BR' || userCountry === 'UA' ? 'R$' : '$'}{amount}</p>
                    <p className='text-[12px] font-normal saira text-right'>{languageData?.transactionsSection2Right}</p>
                </div>
            </div>
        }
    }

    return (
        <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4 scrollbarHidden '>
            <div className='flex justify-end max-w-[600px] m-auto md:my-4'>
                <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../images/NewDesign/closeBtn.png')} alt="close" />
            </div>
            <p className='text-[18px] md:text-[32px] font-semibold text-center'>{languageData?.ransactionsTitle}</p>
            <div className='m-auto max-w-[345px] md:max-w-[600px] w-full mt-3 h-[470px] overflow-scroll'>

                {
                    isLoading === true || transactionsData === null
                        ? <div className='flex justify-center h-full items-center'>
                            <Loading />
                        </div>
                        : transactionsData?.length > 0
                            ? transactionsData?.reverse().map((transaction, index) => {
                                return getMarkup(transaction.type, transaction.datetime, userCountry === 'BR' || userCountry === 'UA' ? transaction.amount * 5 : transaction.amount, transaction.id, transaction.withdraw_status)
                            })
                            : <div className='flex justify-center items-center h-[470px]'>
                                <p className='text-[18px] font-semibold text-center'>{languageData?.noTransactions}</p>
                            </div>
                }
                {/*
                 APPROVED 
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                        <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                        <div className='w-[200px] md:w-[320px]'>
                            <p className='text-[10px] md:text-[14px] font-semibold saira w-[130px] md:w-[unset] leading-3 lg:leading-4'>{languageData?.transactionApprovedTitle}
                                (payment method)
                                {languageData?.transactionApprovedSpan}</p>
                            <p className='text-[10px] md:text-[14px] text-[#D7D7D7] font-light saira'>{moment.unix((Number(1))).format('DD MMMM, YYYY, hh:mm A')}</p>
                            <p className='text-[10px] md:text-[14px] text-[#D7D7D7] font-light saira leading-3'>{languageData?.transactionID} </p>

                        </div>
                    </div>
                    <div className='w-[150px] leading-[18px]'>
                        <p className='text-[20px] text-[#50EA56] font-semibold saira text-right mb-1'>+{userCountry === 'BR' || userCountry === 'UA' ? 'R$' : '$'}10</p>
                        <p className='text-[12px] text-[#50EA56] font-normal saira  text-right'>{languageData?.transactionApprovedRight}</p>
                    </div>
                </div>
 */}


                {/*
                 PENDING 
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                        <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                        <div className='w-[200px] md:w-[320px]'>
                            <p className='text-[10px] md:text-[14px] font-semibold saira w-[130px] md:w-[unset] leading-3 lg:leading-4'>{languageData?.transactionPendingTitle}
                            (payment method)
                                {languageData?.transactionPendingSpan}</p>
                            <p className='text-[10px] md:text-[14px] text-[#D7D7D7] font-light saira'>{moment.unix((Number(1))).format('DD MMMM, YYYY, hh:mm A')}</p>
                            <p className='text-[10px] md:text-[14px] text-[#D7D7D7] font-light saira leading-3'>{languageData?.transactionID} </p>

                        </div>
                    </div>
                    <div className='w-[150px] leading-[18px]'>
                        <p className='text-[20px] text-[#FF9636] font-semibold saira text-right mb-1'>+{userCountry === 'BR' || userCountry === 'UA' ? 'R$' : '$'}10</p>
                        <p className='text-[12px] text-[#FF9636] font-normal saira  text-right'>{languageData?.transactionPendingRight}</p>
                    </div>
                </div>
*/}


                {/*
                 REJECTED
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                        <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                        <div className='w-[200px] md:w-[320px]'>
                            <p className='text-[10px] md:text-[14px] font-semibold saira w-[130px] md:w-[unset] leading-3 lg:leading-4'>{languageData?.transactionRejectedTitle}
                            (payment method)
                                {languageData?.transactionRejectedSpan}</p>
                            <p className='text-[10px] md:text-[14px] text-[#D7D7D7] font-light saira'>{moment.unix((Number(1))).format('DD MMMM, YYYY, hh:mm A')}</p>
                            <p className='text-[10px] md:text-[14px] text-[#D7D7D7] font-light saira leading-3'>{languageData?.transactionID} </p>

                        </div>
                    </div>
                    <div className='w-[150px] leading-[18px]'>
                        <p className='text-[20px] text-[#FF3C3C] font-semibold saira text-right mb-1'>-{userCountry === 'BR' || userCountry === 'UA' ? 'R$' : '$'}10</p>
                        <p className='text-[12px] text-[#FF3C3C] font-normal saira  text-right'>{languageData?.transactionRejectedRight}</p>
                    </div>
                </div>
                */}
            </div>

            <div className='flex justify-center'>
                <button onClick={e => {
                    setWithdrawModal(true)
                    setOpen(false)

                }} className={`w-full bg-white  border-[2px] text-black text-[18px] saira font-semibold py-2 mt-3 max-w-[370px] ${design === '0' ? ' rounded-[50px] border-[2px] bg-white ' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData?.withdrawBtn}</button>
            </div>
        </div>
    )
}

export default TransactionHistory
