import React, { useEffect, useState } from "react";
import done from "../images/NewDesign/newTaskDone.png";
import notReady from "../images/NewDesign/Task/notReady.png";
import { useDesign } from "../Helpers/Design/DesignContext";
import { Link } from "react-router-dom";
import { useLanguage } from "../Helpers/Languages/LanguageContext";
import logo from "../images/NewDesign/Homepage/logoIm.png";


function DoubleNewTask({ languageData, PartnerURL, userCountry, user }) {
  const { design } = useDesign();
  const [tasksActive, setTasksActive] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    let tasks = JSON.parse(user?.completed_tasks || "[]");
    console.log(tasks);
    if (tasks.includes(1) === true && tasks.includes(2) === true && tasks.includes(3) === true) {
      setTasksActive(true);
    } else {
      setTasksActive(false);
    }
  }, [user]);

  return (
    <div className="m-auto w-full max-w-[600px]">
      <div style={{ border: "2px solid var(--Linear, #8FE5EC)" }} className="relative flex w-full justify-end rounded-[14px] bg-newTaskBg bg-cover bg-no-repeat px-7 py-5 sm:px-5 sm:pt-8 sm:pb-6">
        {tasksActive === true ? <img className="absolute right-2 top-2 h-[18px] w-[18px]" src={done} alt="done" /> : <img className="absolute right-2 top-2 h-[18px] w-[18px]" src={notReady} alt="notReady" />}

        <Link to={PartnerURL} target="_blank">
          <div className=" newTaskTitleBg w-[160px] rounded-[12px] border-[2px] border-[#FC4266] p-2 sm:w-[220px]">
            <p className="saira bannerTextBtn3 px-1 text-center text-[16px] font-extrabold leading-[19px] sm:text-[24px] sm:leading-[28px]">
              {languageData?.newTaskDouble} {userCountry === "BR" || userCountry === "UA" ? "PIX" : language === "en" ? "virtual Visa" : language === "es" ? "virtuales Visa" : "virtual Visa"}
              <span className="saira bannerTextBtn3 ml-1 text-[16px] sm:text-[24px]"></span>
            </p>
          </div>
          <img className="w-[105px] m-auto mt-2" src={logo} alt="logo" />
        </Link>
      </div>
      <p className="mt-8 text-center text-[18px] font-semibold sm:text-[32px]">{languageData?.doubleBtnTitle}</p>
      <Link to={PartnerURL} target="_blank">
        <button
          className={`saira my-1 flex w-full items-center justify-center border-[#FFED63] bg-white text-[18px] font-semibold text-black ${design === "0" ? "rounded-[50px] border-[2px] bg-white py-1 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
        >
          {languageData?.HeaderButton}👑
        </button>
      </Link>
    </div>
  );
}

export default DoubleNewTask;
