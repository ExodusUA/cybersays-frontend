import React, { useState, useEffect } from 'react';
const moment = require('moment-timezone');

function TimeCounter({ translatedText }) {
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
            <p className='text-[18px] font-semibold text-center mx-4'>“Win an amazing trip to Vegas money can’t buy:”</p>
            <div className='flex justify-center items-center leading-5 gap-[18px]'>
                <div className='text-center'><h2 className='text-[18px] font-black text-[#FFED63]'>{daysRemaining}</h2><p className='text-[#FFED63] text-center font-semibold text-[12px] '>Days</p></div>
                <p className='text-[#FFED63] text-[18px]'>:</p>
                <div className='text-center'><h2 className='text-[18px] font-black text-[#FFED63]'>{hoursRemaining}</h2><p className='text-[#FFED63] text-center font-semibold text-[12px] '>Hours</p></div>
                <p className='text-[#FFED63] text-[18px]'>:</p>
                <div className='text-center'><h2 className='text-[18px] font-black text-[#FFED63]'>{minutesRemaining}</h2><p className='text-[#FFED63] text-center font-semibold text-[12px] '>Minutes</p></div>
                <p className='text-[#FFED63] text-[18px]'>:</p>
                <div className='text-center'><h2 className='text-[18px] font-black text-[#FFED63]'>{secondsRemaining}</h2><p className='text-[#FFED63] text-center font-semibold text-[12px] '>Seconds</p></div>
            </div>

        </div>
    );
}

export default TimeCounter;
