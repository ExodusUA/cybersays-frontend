import React, { useEffect, useState } from "react";
import notReady from "../../images/CyberSaysPage/card_notReady.png";
import done from "../../images/CyberSaysPage/card_done.png";
import { useDesign } from "../../Helpers/Design/DesignContext";
import mixpanel from "mixpanel-browser";
import moengage from "@moengage/web-sdk";
import { useLanguage } from "../../Helpers/Languages/LanguageContext";

function TaskCardDesktop({ state, background, data, index, PartnerURL, rounded, open, manualSelect, setSelectedTask, tasks, user, mt, languageData, lastTask }) {
  const { design } = useDesign();
  
  const { language } = useLanguage();
  const [cardState, setCardState] = useState(null);

  useEffect(() => {
    if (manualSelect === true) {
      setCardState("inactive");
    } else {
      if (index === 1 && state === "inactive") {
        setCardState("active");
      } else {
        setCardState(state);
      }
    }
  }, [state]);

  const getMarkup = () => {
    switch (cardState) {
      case "active":
        return activeState();
      case "finished":
        return finishedState();
      case "inactive":
        return inactiveState();
      default:
        return null;
    }
  };

  const [linkCopied, setLinkCopied] = useState(false);

  const copyPartnerLink = () => {
    navigator.clipboard.writeText(PartnerURL);
    setLinkCopied(true);
  };

  console.log(lastTask);
  const activeState = () => {
    return (
      <>
        <div className={`mx-1 flex cursor-pointer items-center  justify-between pt-1 sm:mx-1`}>
          <p className={`saira flex items-center text-[12px] font-medium md:text-[14px] ${language !== 'en' && 'md:text-[13px]'}`}>
            {index}. {data?.taskTitleOpen}
            {/*
                    <span className='truncate saira text-[12px] md:text-[14px] font-medium ml-1 w-[50px] md:w-[180px] block'>
                        {user?.email}
                    </span>
                    */}
          </p>
          {tasks?.includes(index) ? (
            <img className="h-[18px] w-[18px]" src={design === "0" ? done : require("../../images/NewDesign/Task/done.png")} alt="done" />
          ) : (
            <img className="h-[18px] w-[18px]" src={design === "0" ? notReady : require("../../images/NewDesign/Task/notReady.png")} alt="notReady" />
          )}
        </div>

        <div className="flex justify-center ">
          {data?.taskBlocks?.map((task, key) => {
            return (
              <div key={key} className="relative  mt-2 flex items-center se:mt-1 ">
                <img
                  className={`relative m-auto min-h-[86px] w-[330px] rounded-[14px] sm:min-h-[130px] sm:w-[555px] ${mt} object-fit`}
                  src={design === "0" ? task?.taskImageDesk : task?.newTaskImageDesk}
                  alt="Task Icon"
                />
                <p
                  className={`saira absolute  text-left text-[10px] font-medium leading-[12px] text-black ${
                    index === 1
                      ? `${design === "0" ? "right-[25px] top-[15px] w-[150px] sm:right-[45px] sm:top-[42px] sm:w-[125px]" : "right-[15px] top-[17px] w-[180px] text-[14px] leading-[16px] text-white sm:right-[25px] sm:top-[45px] sm:w-[135px]"}`
                      : index === 2
                        ? `${design === "0" ? "left-[35px] top-[15px]  w-[140px] sm:left-[40px] sm:top-[15px] sm:w-[100px]" : "left-[30px] top-[20px] w-[200px] text-[14px] leading-[16px] text-white sm:left-[25px] sm:top-[35px] sm:w-[140px]"}`
                        : index === 3
                          ? `${design === "0" ? "right-[35px] top-[15px] w-[160px] sm:right-[25px] sm:top-[20px] sm:w-[110px]" : "right-[35px] top-[18px] w-[205px] text-[14px] leading-[16px] text-white sm:right-[20px] sm:top-[32px] sm:w-[160px]"}`
                          : index === 4
                            ? `${design === "0" ? "left-[60px] top-[10px] w-[165px] sm:left-[100px] sm:top-[15px] sm:w-[280px]" : "left-[40px] top-[18px] w-[200px] text-[14px] leading-[16px] text-white sm:left-[70px] sm:top-[30px] sm:w-[340px]"}`
                            : ""
                  }`}
                >
                  {task?.taskText}
                </p>
              </div>
            );
          })}
        </div>
        {/*
            <div className='flex justify-center  relative z-50 max-w-[330px] w-full sm:max-w-[555px] m-auto mt-2'>
                <Link className='w-full' to={PartnerURL} target='_blank'><button className={`w-full bg-white  border-[2px] border-[#FFED63]  text-black text-[18px] saira font-semibold py-1 sm:py-2 ${design === '0' ? ' se:py-[6px] py-2 md:py-1 rounded-[50px] border-[2px] bg-white ' : 'se:py-[6px] py-2 md:py-2 rounded-[12px] border-none gradient-homepageBtn'}`}>{data?.taskButton}</button></Link>
            </div>
            */}
        <div className="flex justify-center">
          <p
            onClick={(e) => {
              copyPartnerLink();
              mixpanel.track("copy_link", {
                distinct_id: "not_set",
                is_referred: user?.referral_id ? "Yes" : "No",
                vegas_tickets: user?.raffle_tickets,
                points: user?.points,
                user_id: user?.id,
                USD_earned: user?.allTimeEarned,
                user_email: user?.email,
                page: "Double your Money",
              });
              moengage.track_event("copy_link", {
                distinct_id: "not_set",
                is_referred: user?.referral_id ? "Yes" : "No",
                vegas_tickets: user?.raffle_tickets,
                points: user?.points,
                user_id: user?.id,
                USD_earned: user?.allTimeEarned,
                user_email: user?.email,
                page: "Double your Money",
              });
            }}
            className={`saira gradient-link mb-[-5px] cursor-pointer pb-0  pt-1 text-center text-[14px] font-semibold underline`}
          >
            {linkCopied === true ? languageData?.CopyLinkDone : languageData?.CopyLink}
          </p>
        </div>
      </>
    );
  };

  const finishedState = () => {
    return (
      <div className="mx-1 flex cursor-pointer items-center justify-between sm:mx-3" onClick={(e) => setSelectedTask(index)}>
        <p className="saira text-[12px] font-medium md:text-[14px]">
          {index}. {data?.taskTitle}
        </p>
        {tasks?.includes(index) ? (
          <img className="h-[18px] w-[18px]" src={design === "0" ? done : require("../../images/NewDesign/Task/done.png")} alt="done" />
        ) : (
          <img className="h-[18px] w-[18px]" src={design === "0" ? notReady : require("../../images/NewDesign/Task/notReady.png")} alt="notReady" />
        )}
      </div>
    );
  };

  const inactiveState = () => {
    return (
      <div className="mx-1 flex cursor-pointer items-center justify-between  sm:mx-3" onClick={(e) => setSelectedTask(index)}>
        <p className="saira text-[12px] font-medium md:text-[14px]">
          {index}. {data?.taskTitle}
        </p>
        {tasks?.includes(index) ? (
          <img className="h-[18px] w-[18px]" src={design === "0" ? done : require("../../images/NewDesign/Task/done.png")} alt="done" />
        ) : (
          <img className="h-[18px] w-[18px]" src={design === "0" ? notReady : require("../../images/NewDesign/Task/notReady.png")} alt="notReady" />
        )}
      </div>
    );
  };

  const getBackground = () => {
    switch (cardState) {
      case "active":
        return background;
      case "finished":
        return "#EAEAEA33";
      case "inactive":
        return background;
      default:
        return background;
    }
  };
  const getPaddingBottom = () => {
    switch (cardState) {
      case "active":
        return "0";
      case "finished":
        return "20px";
      case "inactive":
        return "10px";
      default:
        return "0";
    }
  };
  const marginTop = () => {
    switch (cardState) {
      case "active":
        return "-37px";
      case "finished":
        return "-37px";
      case "inactive":
        return "-20px";
      default:
        return "0";
    }
  };

  return (
    <div
      style={{ background: getBackground(), paddingBottom: getPaddingBottom() }}
      className={`h-[225px] w-full rounded-t-[20px] ${rounded} mx-1 my-2 bg-[#EAEAEA]  bg-opacity-20  p-2 backdrop-blur-lg se:my-0 se:p-[6px]     ${index === lastTask + 1 ? (design === "0" ? " !mt-[-10px]  border-[3px] !border-[#FFD700]" : "!mt-[-10px]  border-[3px] !border-[#A2DBF0]") : ""}`}
    >
      {activeState()}
    </div>
  );
}

export default TaskCardDesktop;
