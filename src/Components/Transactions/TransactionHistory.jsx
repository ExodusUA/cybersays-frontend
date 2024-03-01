import React, { useEffect, useState } from 'react'
import close from '../../images/CyberSaysPage/closeMenu.png'
import transaction from '../../images/CyberSaysPage/TransactionLogo.png'
import { useQuery } from '@tanstack/react-query'
import userAPI from '../../Requests/user'
import moment from 'moment'
import { useDesign } from '../../Helpers/Design/DesignContext'

function TransactionHistory({ setOpen, languageData, user, userCountry, setWithdrawModal }) {
    const { design } = useDesign()

    const [transactionsData, setTransactionsData] = useState(null)

    useQuery({
        queryKey: ['transactions'],
        queryFn: async () => {
            const res = await userAPI.getTransactions();
            setTransactionsData(res.data.transactions[0])
            return res
        }
    })

    const getMarkup = (type, datetime, amount) => {
        switch (type) {
            case 'doubling_referral': return <div className='flex justify-between items-center mt-4 '>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px] mr-2 md:mr-4' src={transaction} alt="transaction" />
                    <div className='w-[200px] md:w-[300px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira  leading-4 mb-2'>{languageData?.ticketsSection1Left}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira '>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px] leading-[18px]'>
                    <p className='text-[20px] text-[#93CC8E] font-semibold saira text-right mb-1'>+{amount}{userCountry === 'BR' || userCountry === 'UA' ? ' BRL' : '$'}</p>
                    <p className='text-[12px] font-normal saira  text-right'>{languageData?.transactionsSection1Right}</p>
                </div>
            </div>
            case 'doubling': return <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                    <div className='w-[200px] md:w-[300px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira w-[200px] md:w-[unset] leading-4'>{languageData?.transactionsSection1Left}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px] leading-[18px]'>
                    <p className='text-[20px] text-[#93CC8E] font-semibold saira text-right mb-1'>+{amount}{userCountry === 'BR' || userCountry === 'UA' ? ' BRL' : '$'}</p>
                    <p className='text-[12px] font-normal saira text-right'>{languageData?.transactionsSection2Right}</p>
                </div>
            </div>
            case 'withdraw': return <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                    <div className='w-[200px] md:w-[300px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira w-[200px] md:w-[unset] leading-4'>{languageData?.transactionsSection3Left} {languageData?.transactionsSection3Left2}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px] leading-[18px]'>
                    <p className='text-[20px] text-[#FF6D6D] font-semibold saira text-right mb-1'>-{amount}{userCountry === 'BR' || userCountry === 'UA' ? ' BRL' : '$'}</p>
                    <p className='text-[12px] font-normal saira  text-right'>Withdrawn</p>
                </div>
            </div>
            case 'competition': return <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                    <div className='w-[200px] md:w-[300px]'>
                        <p className='text-[12px]  md:text-[14px] font-semibold saira w-[200px] md:w-[unset] leading-4'>{languageData?.transactionsSection4Left} <span className='truncate saira text-[12px] md:text-[14px] font-medium ml-1 w-[50px] md:w-[180px] block'>
                            {user?.email}
                        </span> {languageData?.transactionsSection4Left2}</p>
                        <p className='text-[12px]  md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px] leading-[18px]'>
                    <p className='text-[20px] text-[#93CC8E] font-semibold saira text-right mb-1'>+{amount}{userCountry === 'BR' || userCountry === 'UA' ? ' BRL' : '$'}</p>
                    <p className='text-[12px] font-normal saira  text-right'>{languageData?.transactionsSection4Right}</p>
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
                    transactionsData?.length > 0
                        ? transactionsData?.map((transaction, index) => {
                            return getMarkup(transaction.type, transaction.datetime, userCountry === 'BR' || userCountry === 'UA' ? transaction.amount * 5 : transaction.amount)
                        })
                        : <div className='flex justify-center items-center h-[470px]'>
                            <p className='text-[18px] font-semibold text-center'>{languageData?.noTransactions}</p>
                        </div>

                }

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
