import React, { useEffect, useState } from 'react'
import Confirm from './Confirm'
import Error from './Error'
import userAPI from '../../Requests/user'
import ImLivePromoModal from '../Withdraw/ImLivePromoModal'
import ImLiveFlow from '../Withdraw/ImLiveFlow'
import PixFlow from '../Withdraw/PixFlow'
import WithdrawMain from '../Withdraw/WithdrawMain'
import { useDesign } from '../../Helpers/Design/DesignContext'
import close from '../../images/CyberSaysPage/closeMenu.png'
import PaxumFlow from '../Withdraw/PaxumFlow'
import VisaFlow from '../Withdraw/VisaFlow'
import XoxodayFlow from '../Withdraw/XoxodayFlow'


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
            case 'paxum': return <PaxumFlow languageData={languageData} setConfirm={setConfirm} setSelectedPayment={setSelectedPayment} />
            case 'visa': return <VisaFlow languageData={languageData} setConfirm={setConfirm} setError={setError} />
            case 'imlive': return <ImLiveFlow setConfirm={setConfirm} setOpen={setImLiveSelected} languageData={languageData} closeAll={setOpen} setFlowStarted={setFlowStarted} />
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
                    ? <ImLiveFlow setConfirm={setConfirm} setOpen={setImLiveSelected} languageData={languageData} closeAll={setOpen} />
                    : <div className='w-screen h-screen fixed top-0 z-[60] bg-[#1E1E1E] bg-opacity-60 backdrop-blur-md p-4'>
                        <div className={`flex max-w-[600px] m-auto md:my-4 justify-between`}>
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
                        {
                            flowStarted
                                ? getMethodComponent(selectedPayment)
                                : <WithdrawMain setFlowStarted={setFlowStarted} selectPayment={setSelectedPayment} selectedPayment={selectedPayment} userCountry={userCountry} user={user} languageData={languageData} />
                        }
                    </div>
            }
            {
                confirm && <Confirm setOpen={setConfirm} languageData={languageData} closeAll={setOpen} />
            }

            {
                error && <Error setOpen={setError} languageData={languageData} closeAll={setOpen} />
            }


        </div>
    )
}

export default Withdraw
