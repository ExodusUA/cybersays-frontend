import React, { useState, useEffect } from 'react';
import logotype from '../../images/logotype.svg';
import clock from '../../images//landing/clock.png';
import { Link } from 'react-router-dom';
import { otpVerify } from '../../Requests/auth';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { getUserCountry } from '../../Requests/utills';

function OTPModal({ recaptchaRef, email, refferalCode, special, languageData }) {
    const [otpCode, setOtpCode] = useState('');
    const [isCodeWrong, setIsCodeWrong] = useState(false);
    const navigate = useNavigate();

    function handleVerify() {
        const email = 'your@email.com'; // Замініть на потрібну адресу електронної пошти
        if (email.includes('gmail.com')) {
            window.location.href = 'https://mail.google.com/';
        } else {
            // Ось приклад для використання протоколу mailto: для відкриття стандартного поштового додатку
            window.location.href = 'mailto:' + email;
        }
    }
    

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

    const getUserData = async () => {
        try {
            const res = await getUserCountry();
            return res.data.Data
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-screen h-screen bg-modal fixed left-0 top-0 z-[99] bg-cover flex items-center justify-center'>

            <div className='p-10 rounded-[12px] bg-[#83869b] bg-opacity-25 w-[90%] sm:w-auto border-[1px] border-[#FF1CBB]'>
                <img className='w-[175px] m-auto' src={logotype} alt="Logo" />

                <p className='py-8 text-[24px] font-bold'>{languageData?.verifyCodeTitle}</p>
                <input
                    className='saira px-5 bg-white text-gray h-[52px] rounded-[12px] w-full sm:w-[485px]'
                    value={otpCode}
                    onChange={e => setOtpCode(e.target.value)}
                    type="text"
                    placeholder={languageData?.verifyCodePlaceholder}
                />

                <div className='w-full items-center flex justify-center gap-2 mt-5'>
                    <img className='w-[20px] h-[20px]' src={clock} alt="Clock" />
                    <p className='saira'>{moment.utc(timeLeft.asMilliseconds()).format("mm:ss")}</p>
                </div>

<div className='flex items-center'>
<button className='continue_button w-full h-[52px] rounded-[12px] saira mt-5 duration-200 disabled:opacity-70' onClick={e => handleVerify()}>Open in {email.indexOf('gmail.com') ? 'Gmail' : 'Mail App'}</button>
</div>
                
              
                <p className='saira mt-5 hidden'>{languageData?.verifyCodeLink} <Link className='text-[#9D3EFD] saira' to={'/login'}>{languageData?.verifyCodeLinkSpan}</Link></p>
            </div>

        </div>
    );
}

export default OTPModal;
