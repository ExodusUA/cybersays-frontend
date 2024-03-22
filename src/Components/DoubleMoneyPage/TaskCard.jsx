import React, { useEffect, useState } from "react";
import notReady from "../../images/CyberSaysPage/card_notReady.png";
import done from "../../images/CyberSaysPage/card_done.png";
import { Link } from "react-router-dom";
import { useDesign } from "../../Helpers/Design/DesignContext";
import mixpanel from "mixpanel-browser";
import moengage from "@moengage/web-sdk";

function TaskCard({ state, background, data, index, PartnerURL, rounded, open, manualSelect, setSelectedTask, tasks, user, languageData }) {
  const { design } = useDesign();

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
    if (tasks?.includes(3) === true && index === 3) {
      setSelectedTask(3);
    }

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

  const activeState = () => {
    return (
      <>
        <div className="mx-1 flex cursor-pointer items-center  justify-between sm:mx-3">
          <p className="saira flex items-center text-[12px] font-medium md:text-[14px]">
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
                  className={`w-[98%] sm:w-[555px] ${design === "0" ? "min-h-[86px]" : "min-h-[100px] iphone:min-h-[110px]"}  relative m-auto sm:min-h-[145px] `}
                  src={design === "0" ? task?.taskImage : task?.newTaskImage}
                  alt="Task Icon"
                />
                <p
                  className={`saira absolute text-left text-[10px] font-medium leading-[12px] text-black iphone:text-[12px] sm:text-[14px] sm:leading-[20px] ${
                    index === 1
                      ? `${design === "0" ? "right-[35px] top-[15px] w-[150px] iphone:right-[55px] iphone:top-[20px] sm:right-[45px] sm:top-[25px] sm:w-[265px]" : "right-[20px] top-[24px] w-[180px] text-white iphone:right-[33px] iphone:top-[20px] sm:right-[25px] sm:top-[30px] sm:w-[305px]"}`
                      : index === 2
                        ? `${design === "0" ? "left-[37px] top-[15px]  w-[140px] iphone:left-[50px] sm:left-[55px] sm:top-[25px] sm:w-[235px]" : "left-[32px] top-[25px]  w-[200px] text-white iphone:left-[50px] iphone:top-[25px] sm:left-[45px] sm:top-[35px] sm:w-[330px]"}`
                        : index === 3
                          ? `${design === "0" ? "right-[40px] top-[15px] w-[160px] iphone:right-[60px] sm:right-[65px] sm:top-[25px] sm:w-[270px]" : "right-[40px] top-[22px] w-[205px] text-white iphone:right-[50px] iphone:top-[20px] sm:right-[55px] sm:top-[30px] sm:w-[350px]"}`
                          : index === 4
                            ? `${design === "0" ? "left-[60px] top-[10px] w-[165px] sm:left-[100px] sm:top-[15px] sm:w-[280px]" : "left-[40px] top-[18px] w-[200px] text-white sm:left-[70px] sm:top-[30px] sm:w-[340px]"}`
                            : ""
                  }`}
                >
                  {task?.taskText}
                </p>
              </div>
            );
          })}
        </div>

        <div className="relative z-50 m-auto mt-[-20px] flex w-[98%] justify-center sm:max-w-[555px] md:mt-[-30px]">
          <Link className="w-full" to={PartnerURL} target="_blank">
            <button
              className={`saira w-full  border-[2px] border-[#FFED63]  bg-white py-1 text-[18px] font-semibold text-black sm:py-2 ${design === "0" ? " rounded-[50px] border-[2px] bg-white py-2 se:py-[6px] md:py-2 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
            >
              {data?.taskButton}
            </button>
          </Link>
        </div>
        <p
          onClick={(e) => {
            copyPartnerLink();
            mixpanel.track("copy_link", {
              distinct_id: user?.id,
              is_referred: user?.referral_id ? "Yes" : "No",
              vegas_tickets: user?.raffle_tickets,
              points: user?.points,
              user_id: user?.id,
              USD_earned: user?.allTimeEarned,
              user_email: user?.email,
              page: "Double your Money",
            });
            moengage.track_event("copy_link", {
              distinct_id: user?.id,
              is_referred: user?.referral_id ? "Yes" : "No",
              vegas_tickets: user?.raffle_tickets,
              points: user?.points,
              user_id: user?.id,
              USD_earned: user?.allTimeEarned,
              user_email: user?.email,
              page: "Double your Money",
            });
          }}
          className={`saira mb-[-5px] cursor-pointer py-2 pb-3 text-center text-[14px] font-semibold underline `}
        >
          {linkCopied === true ? languageData?.CopyLinkDone : languageData?.CopyLink}
        </p>
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
        return "40px";
      case "inactive":
        return "20px";
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
      style={{ background: getBackground(), paddingBottom: getPaddingBottom(), marginTop: marginTop() }}
      className={`w-full rounded-t-[20px] ${rounded} my-2 bg-[#EAEAEA] bg-opacity-20  p-2  backdrop-blur-lg se:my-1 se:p-[6px]  `}
    >
      {open !== true && getMarkup()}

      {open === true && activeState()}
    </div>
  );
}

export default TaskCard;
