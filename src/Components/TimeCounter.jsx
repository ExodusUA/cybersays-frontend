import React, { useState, useEffect } from 'react';
const moment = require('moment-timezone');

function TimeCounter({ languageData }) {
    const endDate = moment.tz('2024-01-12 10:00', 'America/Sao_Paulo');
    const [formattedEndDate, setFormattedEndDate] = useState(endDate.format('YY/MM/DD HH:mm:ss'));
    const [daysRemaining, setDaysRemaining] = useState(endDate.diff(moment(), 'days'));
    const [hoursRemaining, setHoursRemaining] = useState(0);
    const [minutesRemaining, setMinutesRemaining] = useState(0);
    const [secondsRemaining, setSecondsRemaining] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = moment();
            const newFormattedEndDate = endDate.format('YY/MM/DD HH:mm:ss');
            const newDaysRemaining = endDate.diff(now, 'days');
            setFormattedEndDate(newFormattedEndDate);
            setDaysRemaining(newDaysRemaining);

            const duration = moment.duration(endDate.diff(now));
            const newHoursRemaining = duration.hours();
            const newMinutesRemaining = duration.minutes();
            const newSecondsRemaining = duration.seconds();
            setHoursRemaining(newHoursRemaining);
            setMinutesRemaining(newMinutesRemaining);
            setSecondsRemaining(newSecondsRemaining);
        }, 10);
    }, []);

    return (
        <div>
            <p className='text-[18px] lg:text-[32px] font-semibold iphone:leading-[unset] se:leading-5 mac:!leading-[42px] text-left pr-4'>{languageData?.timeCounterTitle}</p>
            <div className='lg:w-[420px] m-auto'>
                <div className='flex justify-center lg:justify-between items-center leading-5 gap-[18px] lg:ml-5 lg:mt-5 '>
                    <div className='text-center'><h2 className='text-[18px] md:text-[24px] md: font-black text-[#FFED63]'>{daysRemaining}</h2><p className='text-[#FFED63] text-center font-semibold text-[12px] '>{languageData?.timeCounterDays}</p></div>
                    <p className='text-[#FFED63] text-[18px]'>:</p>
                    <div className='text-center'><h2 className='text-[18px] md:text-[24px] font-black text-[#FFED63]'>{hoursRemaining}</h2><p className='text-[#FFED63] text-center font-semibold text-[12px] '>{languageData?.timeCounterHours}</p></div>
                    <p className='text-[#FFED63] text-[18px]'>:</p>
                    <div className='text-center'><h2 className='text-[18px] md:text-[24px] font-black text-[#FFED63]'>{minutesRemaining}</h2><p className='text-[#FFED63] text-center font-semibold text-[12px] '>{languageData?.timeCounterMinutes}</p></div>
                    <p className='text-[#FFED63] text-[18px]'>:</p>
                    <div className='text-center'><h2 className='text-[18px] md:text-[24px] font-black text-[#FFED63]'>{secondsRemaining}</h2><p className='text-[#FFED63] text-center font-semibold text-[12px] '>{languageData?.timeCounterSeconds}</p></div>
                </div>
            </div>
        </div>
    );
}

export default TimeCounter;
