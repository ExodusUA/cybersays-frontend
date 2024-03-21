import React, { useState, useEffect } from "react";
import { useDesign } from "../Helpers/Design/DesignContext";
import { Link } from "react-router-dom";
const moment = require("moment-timezone");

function TimeCounter({ languageData, hidden, title, left, leftTitle, block, setSocialLink }) {
  const { design } = useDesign();

  const endDate = moment.tz("2024-08-06 23:59:59", "America/Sao_Paulo");
  const [formattedEndDate, setFormattedEndDate] = useState(endDate.format("YY/MM/DD HH:mm:ss"));
  const [daysRemaining, setDaysRemaining] = useState(endDate.diff(moment(), "days"));
  const [hoursRemaining, setHoursRemaining] = useState(0);
  const [minutesRemaining, setMinutesRemaining] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const newFormattedEndDate = endDate.format("YY/MM/DD HH:mm:ss");
      const newDaysRemaining = endDate.diff(now, "days");
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
      <p className={`timeCounter-title text-[18px] font-semibold se:leading-5 iphone:leading-[unset] md:leading-[unset] lg:px-4 lg:text-[32px] ${leftTitle}`}>{title}</p>
      <div className={`lg:w-[420px] ${left} ${hidden}`}>
        <div className="mt-2 flex items-center  justify-center gap-[18px] leading-5 lg:justify-between ">
          <div className="text-center">
            <h2 className={`md: text-[18px] font-black md:text-[24px]  ${design === "0" ? "text-[#FFED63]" : "gradient-timeCounter"}`}>{daysRemaining}</h2>
            <p className={`${design === "0" ? "text-[#FFED63]" : "gradient-timeCounter"} text-center text-[12px] font-semibold`}>{languageData?.timeCounterDays}</p>
          </div>
          <p className={`${design === "0" ? "text-[#FFED63]" : "gradient-timeCounter"} text-[18px]`}>:</p>
          <div className="text-center">
            <h2 className={`md: text-[18px] font-black md:text-[24px] ${design === "0" ? "text-[#FFED63]" : "gradient-timeCounter"}`}>{hoursRemaining}</h2>
            <p className={`${design === "0" ? "text-[#FFED63]" : "gradient-timeCounter"} text-center text-[12px] font-semibold`}>{languageData?.timeCounterHours}</p>
          </div>
          <p className={`${design === "0" ? "text-[#FFED63]" : "gradient-timeCounter"} text-[18px]`}>:</p>
          <div className="text-center">
            <h2 className={`md: text-[18px] font-black md:text-[24px] ${design === "0" ? "text-[#FFED63]" : "gradient-timeCounter"}`}>{minutesRemaining}</h2>
            <p className={`${design === "0" ? "text-[#FFED63]" : "gradient-timeCounter"} text-center text-[12px] font-semibold`}>{languageData?.timeCounterMinutes}</p>
          </div>
          <p className={`${design === "0" ? "text-[#FFED63]" : "gradient-timeCounter"} text-[18px]`}>:</p>
          <div className="text-center">
            <h2 className={`md: text-[18px] font-black md:text-[24px] ${design === "0" ? "text-[#FFED63]" : "gradient-timeCounter"}`}>{secondsRemaining}</h2>
            <p className={`${design === "0" ? "text-[#FFED63]" : "gradient-timeCounter"} text-center text-[12px] font-semibold`}>{languageData?.timeCounterSeconds}</p>
          </div>
        </div>
      </div>

      <div className={`flex justify-center ${block} mt-[-6px]`}>
        <Link target="_blank" to={"/promotion-terms"}>
          <p className={`saira cursor-pointer text-center  text-[12px] font-semibold underline  sm:text-[14px] ${design === "0" ? "text-[#FFED63]" : "gradient-link "}`}>{languageData?.timeCounterLink2}</p>
        </Link>
      </div>
    </div>
  );
}

export default TimeCounter;
