import React, { useState, useEffect } from 'react';
import { useDesign } from '../../Helpers/Design/DesignContext'
import CodeInput from './CodeInput'
import moment from 'moment';

function Verification({languageData, setStep}) {
    const { design } = useDesign()
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
        <div>
            <p className='text-[18px] md:text-[32px] font-semibold text-center mt-2'>{languageData.verificationTitle}</p>
            <p className='text-[14px] font-semibold text-center saira'>{languageData.verificationSubTitle}</p>
            <p className='text-[14px] saira font-medium text-center mt-4 gradient-linkDouble'>{moment.utc(timeLeft.asMilliseconds()).format("mm:ss")}</p>
            <CodeInput />
            <div className='flex justify-center mt-4'>
                <button onClick={e => setStep(3)} className={`w-full bg-white  border-[2px]  text-black text-[18px] saira font-semibold py-2 max-w-[600px]  ${design === '0' ? '  rounded-[50px] border-[2px] bg-white border-[#FFED63]' : ' rounded-[12px] border-none gradient-homepageBtn'}`}>{languageData.withdrawContinue}</button>
            </div>
        </div>
    )
}

export default Verification
