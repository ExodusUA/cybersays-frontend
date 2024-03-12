import React, { useEffect, useState } from 'react'
import { useDesign } from '../../Helpers/Design/DesignContext'
import OTPVerify from './OTPVerify';
import WithdrawEmail from './WithdrawEmail';


function XoxodayFlow({ languageData, setConfirm, setError }) {
    const { design } = useDesign()

    const [step, setStep] = useState(1)

    const [email, setEmail] = useState('');

    const [isVerified, setIsVerified] = useState(false)

    useEffect(() => {
        if (isVerified) {
            setConfirm(true)
        }
    }, [isVerified])

    const handleXoxodayFlow = async () => {
        if (email === null || email === undefined || email.length === '') return alert('Please enter a valid email address')
        setStep(2)
    }

    return (

        <div className={` w-full max-w-[600px] m-auto relative  px-2 rounded-[12px] lg:px-4 mt-2`}>
            {
                step === 1
                    ? <>
                        <WithdrawEmail languageData={languageData} email={email} setEmail={setEmail} handleXoxodayFlow={handleXoxodayFlow} setError={setError} setStep={setStep} />
                    </>
                    : <>
                        <OTPVerify languageData={languageData} setStep={setStep} email={email} isVerified={setIsVerified} />
                    </>
            }
        </div>

    )
}

export default XoxodayFlow


