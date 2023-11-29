import React, { useState, useEffect } from 'react';
import logotype from '../../images/logotype.svg';
import clock from '../../images//landing/clock.png';
import { Link } from 'react-router-dom';
import { otpVerify } from '../../Requests/auth';
import moment from 'moment';

function OTPModal({ recaptchaRef, setActiveModal }) {
    const [otpCode, setOtpCode] = useState('');
    const [isCodeWrong, setIsCodeWrong] = useState(false);

    const handleVerify = async () => {

        const token = await recaptchaRef.current.executeAsync();

        try {
            const verify = await otpVerify(token, otpCode);
            setActiveModal('register')
        } catch (error) {
            setIsCodeWrong(true)
        }
    };

    /* TIMER */

    const [timeLeft, setTimeLeft] = useState(moment.duration(10, 'minutes'));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const newTime = prevTime.clone().subtract(1, 'second');

                if (newTime.asSeconds() <= 0) {
                    clearInterval(timer);
                }

                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='w-screen h-screen bg-modal fixed left-0 top-0 z-[99] bg-cover flex items-center justify-center'>

            <div className='p-10 rounded-[12px] bg-[#83869b] bg-opacity-25 w-[90%] sm:w-auto border-[1px] border-[#FF1CBB]'>
                <img className='w-[175px] m-auto' src={logotype} alt="Logo" />

                <p className='py-8 text-[24px] font-bold'>Verify your account</p>
                <input
                    className='saira px-5 bg-white text-gray h-[52px] rounded-[12px] w-full sm:w-[485px]'
                    value={otpCode}
                    onChange={e => setOtpCode(e.target.value)}
                    type="text"
                    placeholder='Enter verification code sent by e-mail'
                />

                <div className='w-full items-center flex justify-center gap-2 mt-5'>
                    <img className='w-[20px] h-[20px]' src={clock} alt="Clock" />
                    <p className='saira'>{moment.utc(timeLeft.asMilliseconds()).format("mm:ss")}</p>
                </div>

                <button className='continue_button w-full h-[52px] rounded-[12px] saira mt-5 duration-200 disabled:opacity-70' disabled={otpCode.length < 6} onClick={e => handleVerify()}>Submit</button>
                {
                    isCodeWrong
                        ? <p className='saira text-[#FF1CBB] mt-5'>Code is wrong</p>
                        : null
                }
                <p className='saira mt-5'>Already have an account? <Link className='text-[#9D3EFD] saira' to={'/login'}>Sign in</Link></p>
            </div>

        </div>
    );
}

export default OTPModal;
