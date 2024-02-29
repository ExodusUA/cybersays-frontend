import React, { useState } from 'react'
import close from '../../../images/CyberSaysPage/closeMenu.png'
import transaction from '../../../images/CyberSaysPage/TransactionLogo.png'
import { useDesign } from '../../../Helpers/Design/DesignContext'
import userAPI from '../../../Requests/user'
import moment from 'moment'
import { useQuery } from '@tanstack/react-query'


function Earned({ setOpen, languageData, user }) {
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
            case 'doubling_referral': return <div className='flex justify-between items-center mt-2 '>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px] mr-2 md:mr-4' src={transaction} alt="transaction" />
                    <div className='w-[200px] md:w-[300px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira  leading-4 mb-2'>{languageData?.transactionsSection1Left}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira '>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px] leading-[18px]'>
                    <p className='text-[20px] text-[#93CC8E] font-semibold saira text-right mb-1'>+{amount}$</p>
                    <p className='text-[12px] font-normal saira  text-right'>{languageData?.transactionsSection1Right}</p>
                </div>
            </div>
            case 'doubling': return <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                    <div className='w-[200px] md:w-[300px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira w-[200px] md:w-[unset] leading-4'>{languageData?.transactionsSection2Left}!</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px] leading-[18px]'>
                    <p className='text-[20px] text-[#93CC8E] font-semibold saira text-right mb-1'>+{amount}$</p>
                    <p className='text-[12px] font-normal saira text-right'>{languageData?.transactionsSection2Right}</p>
                </div>
            </div>
            case 'withdrawal': return <div className='flex justify-between items-center mt-2'>
                <div className='flex items-center'>
                    <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                    <div className='w-[200px] md:w-[300px]'>
                        <p className='text-[12px] md:text-[14px] font-semibold saira w-[200px] md:w-[unset] leading-4'>{languageData?.transactionsSection3Left} #Y {languageData?.transactionsSection3Left2}</p>
                        <p className='text-[12px] md:text-[14px] font-normal saira'>{moment.unix((Number(datetime))).format('DD MMMM, YYYY, hh:mm A')}</p>
                    </div>
                </div>
                <div className='w-[100px] leading-[18px]'>
                    <p className='text-[20px] text-[#FF6D6D] font-semibold saira text-right mb-1'>-{amount}$</p>
                    <p className='text-[12px] font-normal saira  text-right'>{languageData?.transactionsSection3Right}</p>
                </div>
            </div>
            case 'competition': return <div className='flex justify-between items-center mt-2'>
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
                    <p className='text-[20px] text-[#93CC8E] font-semibold saira text-right mb-1'>+{amount}$</p>
                    <p className='text-[12px] font-normal saira  text-right'>{languageData?.transactionsSection4Right}</p>
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
                <p className='text-[18px] lg:text-[24px] text-center font-semibold gradient-linkDouble'>{languageData?.earnedModalTitle}</p>
                <div className='m-auto max-w-[345px] md:max-w-[600px] w-full h-[250px] overflow-scroll'>

                    {
                        transactionsData?.length > 0
                            ? transactionsData?.map((transaction, index) => {
                                return getMarkup(transaction.type, transaction.datetime, transaction.amount)
                            })
                            : <div className='flex justify-center items-center h-[270px]'>
                                <p className='text-[18px] font-semibold text-center'>{languageData?.noTransactions}</p>
                            </div>

                    }

                </div>
                <div className=' flex justify-center'>
                    <p className='text-[12px] text-center font-semibold text-[#D9D9D9] mt-2 underline gradient-link '>{languageData?.earnedModalLink}</p>
                </div>
            </div>
        </div>
    )
}

export default Earned


