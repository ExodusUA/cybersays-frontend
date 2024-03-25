import React, { useEffect, useState } from "react";
import banner from "../../../images/NewDesign/withdraw/Banners/banner2.png";
import infoAPI from "../../../Requests/info";

function Banner2({ languageData, setPartnerSelected, selectPayment, user, setOpen, setBannerNumber, withdraw }) {
  const [disabled, setDisabled] = useState(true);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisabled(false);
      setCountdown(0);
    }, 10000);

    const countdownTimer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownTimer);
    };
  }, []);

  const [leaderboardData, setLeaderboardData] = useState([]);
  const [winningPlace, setWinningPlace] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await infoAPI.getLeaderboardData();
      console.log(res.data);
      setLeaderboardData(res.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!leaderboardData && !user) return;
    if (leaderboardData === undefined) return;

    let userPoints = Number(user.points) + 30;
    let rankArray = leaderboardData.todayUsers; //points: string, position: number

    let userRank = rankArray?.filter((user) => Number(user?.points) > userPoints);
    if (userRank === undefined) return;
    setWinningPlace(userRank.length + 1);
  }, [leaderboardData, user]);

  return (
    <div>
      <div onClick={(e) => selectPayment("Partner")} className=" relative m-auto mb-[5px] mt-2  w-full max-w-[345px] cursor-pointer sm:max-w-[370px] ">
        {/*
                                <div onClick={e => selectPayment('visa')} className={`w-[160px] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg3 m-auto flex justify-center items-center relative mt-2 ${selectedPayment === 'visa' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                <img className='w-[68px]' src={withdrawLogo3} alt="withdrawLogo1" />
                                <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>Visa prepaid card</p>
                            </div>
                                */}
        <p className="saira bannerTextBtn2 my-3 text-center text-[26px] font-extrabold leading-7 sm:text-[28px]">{languageData?.banner2text1}</p>
        <img
          onClick={(e) => {
            setPartnerSelected(true);
          }}
          className=" relative z-10 m-auto min-h-full w-full"
          src={banner}
          alt="banner"
        />
        {/*
        <p className="saira bannerTextBtn4 mt-3 flex items-center justify-center text-center text-[20px] font-extrabold leading-5">
          {languageData?.banner2text2} <span className="text-[20px]">🤴</span>
        </p>

        <p className="saira bannerTextBtn3 text-center text-[20px]  font-extrabold leading-5">
          {languageData?.banner2text3} (#{winningPlace}) {languageData?.banner2text3span}
        </p>
        */}
        <p className="saira bannerTextBtn3 text-center text-[20px]  font-extrabold leading-5 mt-2">
          {languageData?.banner2winner} (#{winningPlace}) {languageData?.banner2winnerSpan}
        </p>
        
      </div>
      <div className="mt-2 flex justify-center">
        <button
          onClick={(e) => {
            setPartnerSelected(true);
            setOpen(false);
          }}
          className={`saira w-full  max-w-[370px]  rounded-[12px] border-[2px] text-[18px]  font-semibold outline-none ${disabled ? "bannerBtn2 border-none py-2 text-[#1E1E1E]" : " border-[2px] border-[#515151] bg-transparent py-3 text-[#7f7f7f]"}`}
        >
          {languageData?.bannerBtn1}
          <p className="saira text-[18px] leading-5 text-white">{disabled ? `${countdown} ${languageData?.bannerBtn2} ⏱️` : ""}</p>
        </button>
      </div>
      <div className="mt-2 flex justify-center">
        <button
          onClick={(e) => setBannerNumber(3)}
          className={`saira w-full max-w-[370px] border-[1px] py-3 text-[18px] font-semibold outline-none ${disabled ? " border-[#515151] bg-transparent text-[#7f7f7f]" : "bannerBtn2 border-none text-black"} rounded-[12px] `}
          disabled={disabled}
        >
          {languageData?.bannerBtn2Done}
        </button>
      </div>
    </div>
  );
}

export default Banner2;
