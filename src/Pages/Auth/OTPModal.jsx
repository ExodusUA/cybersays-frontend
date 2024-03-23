import React, { useState, useEffect } from "react";
import logotype from "../../images/logotype.svg";
import clock from "../../images//landing/clock.png";
import { Link } from "react-router-dom";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { getUserCountry } from "../../Requests/utills";

function OTPModal({ recaptchaRef, email, refferalCode, special, languageData }) {
  const [otpCode, setOtpCode] = useState("");
  const [isCodeWrong, setIsCodeWrong] = useState(false);
  const navigate = useNavigate();

  function handleVerify() {
    if (email.includes("gmail.com")) {
      window.open("https://mail.google.com/", "_blank");
    } else {
      window.location.href = "mailto:";
    }
  }

  /* TIMER */

  const [timeLeft, setTimeLeft] = useState(moment.duration(10, "minutes"));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime.clone().subtract(1, "second");

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
      return res.data.Data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed left-0 top-0 z-[99999] flex h-screen w-screen items-center justify-center bg-modal bg-cover">
      <div className="w-[90%] rounded-[12px] border-[1px] border-[#FF1CBB] bg-[#83869b] bg-opacity-25 p-10 sm:w-auto">
        <img className="m-auto w-[175px]" src={logotype} alt="Logo" />

        <p className="py-8 text-[24px] font-bold">{languageData?.verifyCodeTitle}</p>
        <input
          className="saira h-[52px] w-full rounded-[12px] bg-white px-5 text-gray sm:w-[485px]"
          value={otpCode}
          onChange={(e) => setOtpCode(e.target.value)}
          type="text"
          placeholder={languageData?.verifyCodePlaceholder}
        />

        <div className="mt-5 flex w-full items-center justify-center gap-2">
          <img className="h-[20px] w-[20px]" src={clock} alt="Clock" />
          <p className="saira">{moment.utc(timeLeft.asMilliseconds()).format("mm:ss")}</p>
        </div>

        <div className="flex items-center">
          {
            //<button className='continue_button w-full h-[52px] rounded-[12px] saira mt-5 duration-200 disabled:opacity-70' onClick={e => handleVerify()}>{languageData?.authNotificationBtn} {email.indexOf('gmail.com') !== -1 ? 'Gmail' : languageData?.authNotificationBtnSpan}</button>
          }

          <p className="saira mt-4 w-full text-center text-sm">{languageData?.verifyCodeSpam}</p>
        </div>

        <p className="saira mt-5 hidden">
          {languageData?.verifyCodeLink}{" "}
          <Link className="saira text-[#9D3EFD]" to={"/login"}>
            {languageData?.verifyCodeLinkSpan}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default OTPModal;
