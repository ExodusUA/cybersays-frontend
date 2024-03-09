import React, { useEffect, useState } from 'react'
import Confirm from './Confirm'
import Error from './Error'
import ImLivePromoModal from '../Withdraw/ImLivePromoModal'
import ImLiveFlow from '../Withdraw/Flow/ImLiveFlow'
import PixFlow from '../Withdraw/Flow/PixFlow'
import WithdrawMain from '../Withdraw/WithdrawMain'
import { useDesign } from '../../Helpers/Design/DesignContext'
import close from '../../images/CyberSaysPage/closeMenu.png'
import PaxumFlow from '../Withdraw/Flow/PaxumFlow'
import VisaFlow from '../Withdraw/Flow/VisaFlow'
import XoxodayFlow from '../Withdraw/XoxodayFlow'
import PSEFlow from '../Withdraw/Flow/PSEFlow'
import ServiPagFlow from '../Withdraw/Flow/ServiPagFlow'
import SPEIFlow from '../Withdraw/Flow/SPEIFlow'


function Withdraw({ user, setOpen, languageData, userCountry }) {

    const { design } = useDesign()

    const [selectedPayment, setSelectedPayment] = useState(null)
    const [email, setEmail] = useState(null)
    const [confirm, setConfirm] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        if (userCountry === null || userCountry === undefined) return
    }, [userCountry])

    const [flowStarted, setFlowStarted] = useState(false)
    const [promoModal, setPromoModal] = useState(true)
    const [imLiveSelected, setImLiveSelected] = useState(false)

    const getMethodComponent = (selectedPayment) => {
        switch (selectedPayment) {
            case 'xoxoday': return <XoxodayFlow languageData={languageData} setConfirm={setConfirm} setError={setError} email={email} />
            case 'pix': return <PixFlow languageData={languageData} setConfirm={setConfirm} setError={setError} email={user?.email} />
            case 'paxum': return <PaxumFlow languageData={languageData} setConfirm={setConfirm} setSelectedPayment={setSelectedPayment} setError={setError} />
            case 'visa': return <VisaFlow languageData={languageData} setConfirm={setConfirm} setError={setError} />
            case 'imlive': return <ImLiveFlow setConfirm={setConfirm} setOpen={setImLiveSelected} languageData={languageData} closeAll={setOpen} setFlowStarted={setFlowStarted} setError={setError} />
            case 'pse': return <PSEFlow languageData={languageData} setConfirm={setConfirm} setError={setError} />
            case 'servipag': return <ServiPagFlow languageData={languageData} setConfirm={setConfirm} setError={setError} />
            case 'spei': return <SPEIFlow languageData={languageData} setConfirm={setConfirm} setError={setError} />
            default: return 'Please select a payment method to continue.'
        }
    }

    return (
        <div>
            {
                user?.earned !== 0 && user?.earned > 0 && promoModal && <ImLivePromoModal setImLiveSelected={setImLiveSelected} setOpen={setPromoModal} languageData={languageData} />
            }
            {
                imLiveSelected
                    ? <ImLiveFlow setFlowStarted={setFlowStarted} setConfirm={setConfirm} setOpen={setImLiveSelected} languageData={languageData} closeAll={setOpen} />
                    : <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4'>
                        <div className=' absolute max-w-[600px] w-[95%] lg:w-full top-4 lg:top-0 left-1/2 transform -translate-x-1/2 z-10'>
                            <div className={`flex w-full m-auto md:my-4 justify-between`}>
                                <svg onClick={e => setFlowStarted(false)} className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M17 22L7 12L17 2" stroke="url(#paint0_linear_26_11821)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_26_11821" x1="17" y1="11.8039" x2="7" y2="11.8039" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#8FE5EC" />
                                            <stop offset="1" stop-color="#DDBAFC" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <img onClick={e => setOpen(false)} className='w-[24px] h-[24px] cursor-pointer' src={design === '0' ? close : require('../../images/NewDesign/closeBtn.png')} alt="close" />
                            </div>
                        </div>
                        {
                            flowStarted
                                ? <div className='flex items-center h-screen'>
                                    {getMethodComponent(selectedPayment)}
                                </div>
                                : <WithdrawMain
                                    setImLiveSelected={setImLiveSelected}
                                    setFlowStarted={setFlowStarted}
                                    selectPayment={setSelectedPayment}
                                    selectedPayment={selectedPayment}
                                    userCountry={userCountry}
                                    user={user}
                                    languageData={languageData}
                                />
                        }
                    </div>
            }
            {
                confirm && <Confirm selectPayment={setSelectedPayment} selectedPayment={selectedPayment} setOpen={setConfirm} languageData={languageData} closeAll={setOpen} />
            }

            {
                error && <Error setOpen={setError} languageData={languageData} closeAll={setOpen} />
            }


        </div>
    )
}

export default Withdraw
