import React, { useState, useEffect } from 'react';
import { useDesign } from '../Helpers/Design/DesignContext'
const moment = require('moment-timezone');

function TimeCounter({ languageData,hidden }) {

    const { design } = useDesign()

    const endDate = moment.tz('2024-02-28 10:00', 'America/Sao_Paulo');
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
            <p className='text-[18px] lg:text-[32px] mac:!text-[18px] font-semibold iphone:leading-[unset] se:leading-5 md:leading-[unset] px-4 text-center'>{languageData?.timeCounterTitle}</p>
            <div className={`lg:w-[420px] m-auto ${hidden}`}>
                <div className='flex justify-center lg:justify-between items-center leading-5 gap-[18px] lg:ml-5 lg:mt-3 '>
                    <div className='text-center'><h2 className={`text-[18px] md:text-[24px] md: font-black  ${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'}`}>{daysRemaining}</h2><p className={`${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'} text-center font-semibold text-[12px]`}>{languageData?.timeCounterDays}</p></div>
                    <p className={`${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'} text-[18px]`}>:</p>
                    <div className='text-center'><h2 className={`text-[18px] md:text-[24px] md: font-black ${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'}`}>{hoursRemaining}</h2><p className={`${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'} text-center font-semibold text-[12px]`}>{languageData?.timeCounterHours}</p></div>
                    <p className={`${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'} text-[18px]`}>:</p>
                    <div className='text-center'><h2 className={`text-[18px] md:text-[24px] md: font-black ${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'}`}>{minutesRemaining}</h2><p className={`${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'} text-center font-semibold text-[12px]`}>{languageData?.timeCounterMinutes}</p></div>
                    <p className={`${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'} text-[18px]`}>:</p>
                    <div className='text-center'><h2 className={`text-[18px] md:text-[24px] md: font-black ${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'}`}>{secondsRemaining}</h2><p className={`${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'} text-center font-semibold text-[12px]`}>{languageData?.timeCounterSeconds}</p></div>
                </div>
            </div>
        </div>
    );
}

export default TimeCounter;
