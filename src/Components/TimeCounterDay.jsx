import React, { useState, useEffect } from 'react';
import { useDesign } from '../Helpers/Design/DesignContext';
const moment = require('moment-timezone');

function TimeCounterDay({ languageData, hidden, title, left, leftTitle, block, setSocialLink }) {
    const { design } = useDesign();
    const endOfDay = moment().endOf('day');

    const duration = moment.duration(endOfDay.diff(moment()));

    const hoursRemaining = duration.hours();
    const minutesRemaining = duration.minutes();
    const secondsRemaining = duration.seconds();

    return (
        <div>
            <p className={`text-[18px] lg:text-[32px] font-semibold iphone:leading-[unset] se:leading-5 md:leading-[unset] lg:px-4 ${leftTitle}`}>{title}</p>
            <div className={`lg:w-[300px] ${left} ${hidden}`}>
                <div className='flex justify-center lg:justify-between items-center leading-5 gap-[18px] lg:ml-5 mt-2 '>
                    <div className='text-center'>
                        <h2 className={`text-[18px] md:text-[24px] md:font-black ${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'}`}>{hoursRemaining}</h2>
                        <p className={`${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'} text-center font-semibold text-[12px]`}>{languageData?.timeCounterHours}</p>
                    </div>
                    <p className={`${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'} text-[18px]`}>:</p>
                    <div className='text-center'>
                        <h2 className={`text-[18px] md:text-[24px] md:font-black ${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'}`}>{minutesRemaining}</h2>
                        <p className={`${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'} text-center font-semibold text-[12px]`}>{languageData?.timeCounterMinutes}</p>
                    </div>
                    <p className={`${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'} text-[18px]`}>:</p>
                    <div className='text-center'>
                        <h2 className={`text-[18px] md:text-[24px] md:font-black ${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'}`}>{secondsRemaining}</h2>
                        <p className={`${design === '0' ? 'text-[#FFED63]' : 'gradient-timeCounter'} text-center font-semibold text-[12px]`}>{languageData?.timeCounterSeconds}</p>
                    </div>
                </div>
            </div>
            <div className={`flex justify-center ${block}`}>
                <p onClick={e => setSocialLink(true)} className={`text-center text-[12px] sm:text-[14px] saira font-semibold underline cursor-pointer ${design === '0' ? 'text-[#FFED63]' : 'gradient-link '}`}>{languageData?.timeCounterLink}</p>
            </div>
        </div>
    );
}

export default TimeCounterDay;
