import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logotype from '../../images/logotype.svg'
import moment from 'moment';
import clock from '../../images//landing/clock.png';
import { otpVerify } from '../../Requests/auth';
import { useNavigate } from 'react-router-dom';

function AuthEmailNotification({ languageData, email }) {

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

    function handleVerify() {
       
        if (email.includes('gmail.com')) {
            window.open('https://mail.google.com/', '_blank');
        } else {
            window.location.href = 'mailto:';
        }
    }


    return (
        <div className='w-screen h-screen bg-modal fixed left-0 top-0 z-[99] bg-cover flex items-center justify-center'>
            <div className='p-10 rounded-[12px] bg-[#83869b] bg-opacity-25 w-[90%] sm:w-auto border-[1px] border-[#FF1CBB]'>
                <img className='w-[270px] m-auto' src={logotype} alt="Logotype" />
                <p className='py-6 text-[24px] font-bold max-w-[500px] w-full text-center uppercase'>{languageData?.verifyCodeEmailTitle}</p>
                <div className='w-full items-center flex justify-center gap-2 '>
                    <img className='w-[20px] h-[20px]' src={clock} alt="Clock" />
                    <p className='saira'>{moment.utc(timeLeft.asMilliseconds()).format("mm:ss")}</p>
                </div>
                <div className='flex items-center'>
                    <button className='continue_button w-full h-[52px] rounded-[12px] saira mt-5 duration-200 disabled:opacity-70' onClick={e => handleVerify()}>{languageData?.authNotificationBtn} {email.indexOf('gmail.com') !== -1 ? 'Gmail' : languageData?.authNotificationBtnSpan}</button>
                </div>
                <p className='saira mt-5 hidden'>{languageData?.verifyCodeLink} <Link className='text-[#9D3EFD] saira' to={'/login'}>{languageData?.verifyCodeLinkSpan}</Link></p>
            </div>
        </div>
    );
}

export default AuthEmailNotification;
