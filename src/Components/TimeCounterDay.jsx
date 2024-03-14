import React, { useState, useEffect } from 'react';
import { useDesign } from '../Helpers/Design/DesignContext';
import { Link } from 'react-router-dom';
import mixpanel from 'mixpanel-browser';
import { useLanguage } from '../Helpers/Languages/LanguageContext';
import moengage from '@moengage/web-sdk';
const moment = require('moment-timezone');


function TimeCounterDay({ languageData, hidden, title, left, leftTitle, block, setSocialLink, user }) {
    const { design } = useDesign();
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
    const { language } = useLanguage();

    function calculateTimeLeft() {
        const endOfDay = moment().endOf('day');
        const duration = moment.duration(endOfDay.diff(moment()));
        return {
            hoursRemaining: duration.hours(),
            minutesRemaining: duration.minutes(),
            secondsRemaining: duration.seconds()
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const { hoursRemaining, minutesRemaining, secondsRemaining } = timeLeft;

    return (
        <div>
            <p className={`text-[18px] timeCounter-title lg:text-[32px] font-semibold iphone:leading-[unset] se:leading-5 md:leading-[unset] lg:px-4 ${leftTitle}`}>{languageData?.timeCounterTitle2}</p>
            <div className={`lg:w-[300px] ${left} ${hidden}`}>
                <div className='flex justify-center lg:justify-between items-center leading-5 gap-[18px]  '>
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
                <Link onClick={e => {
                    mixpanel.track('daily_competition_terms', {
                        distinct_id: user?.id,
                        is_referred: user?.referral_id ? 'Yes' : 'No',
                        language: language,
                        vegas_tickets: user?.raffle_tickets,
                        points: user?.points,
                        user_id: user?.id,
                        USD_earned: user?.allTimeEarned,
                        language: language,
                        number_referrals: user?.referral_id ? user?.referral_id.length : 0,
                    })
                    moengage.track_event('daily_competition_terms', {
                        distinct_id: user?.id,
                        is_referred: user?.referral_id ? 'Yes' : 'No',
                        language: language,
                        vegas_tickets: user?.raffle_tickets,
                        points: user?.points,
                        user_id: user?.id,
                        USD_earned: user?.allTimeEarned,
                        language: language,
                        number_referrals: user?.referral_id ? user?.referral_id.length : 0,
                    })
                }} to='/contest-terms' target='_blank' > <p className={`text-center text-[8px] sm:text-[12px] saira font-semibold underline cursor-pointer ${design === '0' ? 'text-[#FFED63]' : 'gradient-link '}`}>{languageData?.timeCounterLink}</p></Link>
            </div>
        </div>
    );
}

export default TimeCounterDay;
