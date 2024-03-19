import React, { useEffect, useState } from "react";
import logoCyber from "../../images/CyberSaysPage/logoMain.png";
import TaskCard from "../../Components/DoubleMoneyPage/TaskCard";
import { useDesign } from "../../Helpers/Design/DesignContext";
import newlogoCyber from "../../images/NewDesign/newLogo_main.png";
import { Link } from "react-router-dom";
import TaskCardDesktop from "../../Components/DoubleMoneyPage/TaskCardDesktop";
import mixpanel from "mixpanel-browser";
import moengage from "@moengage/web-sdk";

function Double({ languageData, user, PartnerURL, setOpen, setDoubleComplete }) {
  const { design } = useDesign();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(0);

  const [taskStatus, setTaskStatus] = useState(null);

  const getTaskStatus = (task) => {
    if (user && user === undefined) return "inactive";
    if (user?.completed_tasks === null) return "inactive";

    let finishedTasks = JSON.parse(user?.completed_tasks) || [];

    let sortedTasks = finishedTasks.sort((a, b) => a - b);
    let lastTask = sortedTasks[sortedTasks.length - 1];

    if (finishedTasks.includes(task)) {
      return "finished";
    } else {
      if (lastTask === task + 1) {
        return "active";
      } else {
        return "inactive";
      }
    }
  };

  useEffect(() => {
    if (user && user !== undefined) {
      let taskStatusArray = [];

      for (let i = 1; i <= 4; i++) {
        taskStatusArray.push(getTaskStatus(i));
        setTaskStatus(taskStatusArray);
      }

      console.log("taskStatusArray", taskStatusArray);
    }
  }, [user, selectedTask]);
  const [lastTask, setLastTask] = useState(0);

  useEffect(() => {
    if (user === null) return setLastTask(0);

    let tasks = JSON.parse(user?.completed_tasks);
    if (tasks === null) {
      setLastTask(0);
      setSelectedTask(1);
      return;
    }
    let lastTask = tasks[tasks.length - 1];

    setSelectedTask(lastTask + 1);
    setLastTask(lastTask);
  }, [user]);

  useEffect(() => {
    console.log("selectedTask", selectedTask);
  }, [selectedTask]);

  const getButtonMarkup = (task) => {
    console.log("task", task);
    switch (task - 1) {
      case null:
      case undefined:
      case 0:
        return (
          <div className="w-full max-w-[430px] px-1">
            <p className="text-center text-[18px] font-semibold ">{languageData?.doubleBtnTitle}</p>
            <Link
              onClick={(e) => {
                //e.preventDefault()
                //handlePartnerRedirect()
              }}
              to={PartnerURL}
              target="_blank"
            >
              {" "}
              <button
                className={`saira my-1  flex w-full  items-center justify-center border-[#FFED63] text-[18px] font-semibold text-black ${design === "0" ? "rounded-[50px] border-[2px] bg-white py-1 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
              >
                {languageData?.doubleTaskBtn1}
              </button>
            </Link>
            <p className="saira text-center text-[14px] font-semibold">
              <span className=" saira gradient-linkDouble text-[14px] font-semibold">7 {languageData?.doubleBtnAway}</span> {languageData?.doubleBtnFrom}
            </p>
          </div>
        );
      case 1:
        return (
          <div className="w-full max-w-[430px] px-1">
            <p className="text-center text-[18px] font-semibold ">{languageData?.doubleBtnTitle}</p>
            <Link
              onClick={(e) => {
                //e.preventDefault()
                //handlePartnerRedirect()
              }}
              to={PartnerURL}
              target="_blank"
            >
              <button
                className={`saira my-1   flex  w-full items-center  justify-center border-[#FFED63] bg-white text-[18px] font-semibold text-black ${design === "0" ? "rounded-[50px] border-[2px] bg-white py-1 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
              >
                {languageData?.doubleTaskBtn2}
              </button>
            </Link>
            <p className="saira text-center text-[14px] font-semibold">
              <span className=" saira gradient-linkDouble text-[14px] font-semibold">5 {languageData?.doubleBtnAway}</span> {languageData?.doubleBtnFrom}
            </p>
          </div>
        );
      case 2:
        return (
          <div className="w-full max-w-[430px] px-1">
            <p className="text-center text-[18px] font-semibold ">{languageData?.doubleBtnTitle}</p>
            <Link
              onClick={(e) => {
                //e.preventDefault()
                //handlePartnerRedirect()
              }}
              to={PartnerURL}
              target="_blank"
            >
              <button
                className={`saira  my-1   flex  w-full items-center  justify-center border-[#FFED63] bg-white text-[18px] font-semibold text-black ${design === "0" ? "rounded-[50px] border-[2px] bg-white py-1 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
              >
                {languageData?.doubleTaskBtn3}
              </button>
            </Link>
            <p className="saira text-center text-[14px] font-semibold">
              <span className=" saira gradient-linkDouble text-[14px] font-semibold">3 {languageData?.doubleBtnAway}</span> {languageData?.doubleBtnFrom}
            </p>
          </div>
        );
      case 3:
        return (
          <div className="w-full max-w-[430px] px-1">
            <p className="text-center text-[18px] font-semibold ">{languageData?.doubleBtnTitle}</p>
            <Link
              onClick={(e) => {
                //e.preventDefault()
                //handlePartnerRedirect()
              }}
              to={PartnerURL}
              target="_blank"
            >
              <button
                className={`saira  my-1   flex  w-full items-center  justify-center border-[#FFED63] bg-white text-[18px] font-semibold text-black ${design === "0" ? "rounded-[50px] border-[2px] bg-white py-1 " : "gradient-homepageBtn rounded-[12px] border-none py-2 se:py-[6px] md:py-2"}`}
              >
                {languageData?.doubleBtnEndTask}
              </button>
            </Link>
          </div>
        );
    }
  };

  /*
    const handlePartnerRedirect = async () => {
        window.location.replace(PartnerURL);
        await new Promise(resolve => setTimeout(resolve, 100));
        window.open(window.location.href + '#double', '_blank');
    }
    */

  return (
    <div
      className={` h-screen w-screen ${design === "0" ? "bg-[url(./images/CyberSaysPage/mobile-bg-double.jpg)] md:bg-[url(./images/CyberSaysPage/bg-double.jpg)]" : " bg-[#200527]"}  relative z-10 bg-cover bg-center bg-no-repeat mac-center:flex`}
      onClick={() => setIsOpen(false)}
    >
      <div className="m-auto max-w-[1170px] px-4  pt-[57px] mac-center:!pt-0 md:pt-[80px]">
        <img
          className="double-img-width  relative z-50 m-auto w-[170px] se:mb-[-3%] se:w-[170px] iphone:mb-[-13px] iphone:w-[240px]  md:w-[320px] lg:mb-[-10px]"
          src={design === "0" ? logoCyber : newlogoCyber}
          alt="logoCyber"
        />
        <div className="m-auto mt-[10px] mac:max-w-[550px] md:mx-[120px] md:mt-0 md:max-w-[1200px]">
          <div className={`m-auto bg-[#EAEAEA] bg-opacity-20  px-4 py-2 text-center backdrop-blur-lg se:max-w-[280px]  iphone:max-w-[unset] md:py-2 ${design === "0" ? "rounded-[100px]" : "rounded-[14px]"}`}>
            <p className="text-[14px] font-semibold mac2:text-[14px] mac2:!leading-[22px] se:leading-4  iphone:text-[18px] iphone:leading-[unset] md:text-[28px]">{languageData?.doubleTitle}</p>
          </div>
        </div>

        <p
          className={`text-[12px] md:text-[14px] ${design === "0" ? "text-[#FFED63]" : "gradient-linkDouble font-semibold"}  double-subtitle contentForDouble mb-5 mt-0 flex cursor-pointer items-center justify-center text-center iphone:py-2 iphone2:mt-[60px] md:mt-[80px] md:py-2`}
        >
          {languageData?.doubleSubtitleSpan}
          <span className="mx-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3L4.66667 9L2 6" stroke="#81FFB3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
          {languageData?.doubleSubtitle}
        </p>
        <div className="m-auto block max-w-[600px] lg:hidden">
          {taskStatus !== null && (
            <>
              <TaskCard
                tasks={JSON.parse(user?.completed_tasks)}
                languageData={languageData}
                data={languageData?.tasks?.task1}
                setSelectedTask={setSelectedTask}
                state={taskStatus[0]}
                manualSelect={selectedTask !== null}
                open={selectedTask === 1}
                background={design === "0" ? "#B9A1E1" : "#4F97CB"}
                rounded={"rounded-t-[20px] "}
                index={1}
                PartnerURL={PartnerURL}
              />
              <TaskCard
                tasks={JSON.parse(user?.completed_tasks)}
                languageData={languageData}
                data={languageData?.tasks?.task2}
                setSelectedTask={setSelectedTask}
                state={taskStatus[1]}
                manualSelect={selectedTask !== null}
                open={selectedTask === 2}
                background={design === "0" ? "#93CC8E" : "#32B28C"}
                rounded={"rounded-t-[20px] "}
                index={2}
                PartnerURL={PartnerURL}
              />
              <TaskCard
                tasks={JSON.parse(user?.completed_tasks)}
                languageData={languageData}
                data={languageData?.tasks?.task3}
                setSelectedTask={setSelectedTask}
                state={taskStatus[2]}
                manualSelect={selectedTask !== null}
                open={selectedTask === 3}
                background={design === "0" ? "#EA7C7C" : "#D76666"}
                rounded={"rounded-[20px] !pb-[5px]"}
                index={3}
                PartnerURL={PartnerURL}
              />
              {/*<TaskCard user={user} tasks={JSON.parse(user?.completed_tasks)} data={languageData?.tasks?.task4} setSelectedTask={setSelectedTask} state={taskStatus[3]} manualSelect={selectedTask !== null} open={selectedTask === 4} background={design === '0' ? '#76C2E3' : '#9E64D8'} rounded={'rounded-[20px] !pb-[5px]'} index={4} PartnerURL={PartnerURL} />*/}
            </>
          )}
        </div>
        <div className="m-auto mt-[-10px] hidden max-w-[920px] lg:flex">
          {taskStatus !== null && (
            <>
              <TaskCardDesktop
                lastTask={lastTask}
                languageData={languageData}
                tasks={JSON.parse(user?.completed_tasks)}
                data={languageData?.tasks?.task1}
                setSelectedTask={setSelectedTask}
                state={taskStatus[0]}
                manualSelect={selectedTask !== null}
                open={selectedTask === 1}
                background={design === "0" ? "#B9A1E1" : "#4F97CB"}
                rounded={"rounded-[20px]"}
                mt={"mt-5"}
                index={1}
                PartnerURL={PartnerURL}
              />
              <TaskCardDesktop
                lastTask={lastTask}
                languageData={languageData}
                tasks={JSON.parse(user?.completed_tasks)}
                data={languageData?.tasks?.task2}
                setSelectedTask={setSelectedTask}
                state={taskStatus[1]}
                manualSelect={selectedTask !== null}
                open={selectedTask === 2}
                background={design === "0" ? "#93CC8E" : "#32B28C"}
                rounded={"rounded-[20px]"}
                index={2}
                PartnerURL={PartnerURL}
              />
              <TaskCardDesktop
                lastTask={lastTask}
                languageData={languageData}
                setDoubleComplete={setDoubleComplete}
                tasks={JSON.parse(user?.completed_tasks)}
                data={languageData?.tasks?.task3}
                setSelectedTask={setSelectedTask}
                state={taskStatus[2]}
                manualSelect={selectedTask !== null}
                open={selectedTask === 3}
                background={design === "0" ? "#EA7C7C" : "#D76666"}
                rounded={"rounded-[20px] !pb-[5px]"}
                index={3}
                PartnerURL={PartnerURL}
              />
              {/*<TaskCard user={user} tasks={JSON.parse(user?.completed_tasks)} data={languageData?.tasks?.task4} setSelectedTask={setSelectedTask} state={taskStatus[3]} manualSelect={selectedTask !== null} open={selectedTask === 4} background={design === '0' ? '#76C2E3' : '#9E64D8'} rounded={'rounded-[20px] !pb-[5px]'} index={4} PartnerURL={PartnerURL} />*/}
            </>
          )}
        </div>
        <div className="flex justify-center">
          <p
            onClick={(e) => {
              setOpen(true);
              mixpanel.track("way_to_get_paid", {
                distinct_id: "not_set",
                is_referred: user?.referral_id ? "Yes" : "No",
                vegas_tickets: user?.raffle_tickets,
                points: user?.points,
                user_id: user?.id,
                USD_earned: user?.allTimeEarned,
                user_email: user?.email,
                page: "Double your Money",
              });
              moengage.track_event("way_to_get_paid", {
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
            className={`saira mt-2 cursor-pointer text-center text-[12px] font-semibold underline iphone:text-[14px]  sm:text-[14px]  ${design === "0" ? "text-white" : "gradient-link flex justify-center"}`}
          >
            {languageData?.doublePaid}
          </p>
        </div>
        <div className="absolute left-1/2 m-auto flex w-full -translate-x-1/2 transform justify-center  px-3 se:bottom-[140px] iphone:bottom-[156px] sm:bottom-[80px] md:bottom-[112px]">
          {taskStatus && taskStatus[2] === "finished" ? getButtonMarkup(4) : getButtonMarkup(selectedTask)}
        </div>
        {/*
                <div className='bg-[#EAEAEA] bg-opacity-20 backdrop-blur-lg rounded-[20px] max-w-[600px] m-auto p-4'>
                    <p className='text-[20px] md:text-[32px] font-semibold text-center '>We have doubled your money!</p>
                    <img className='max-w-[200px] md:max-w-[400px] w-full m-auto mt-2' src={congrats} alt="congrats" />
                    <button className='w-full bg-white  border-[2px] border-[#FFED63] rounded-[50px] text-black text-[18px] saira font-semibold py-1 flex justify-center mt-3'>
                        Show me the next page!
                    </button>
                    <p className='text-[14px] font-medium text-center mt-2 saira leading-[16px] md:leading-[18px]'>Withdraw your money</p>
                </div>
                */}
      </div>

      {/*
                <div className='flex mobMax:!flex mac:hidden  absolute  se:bottom-[130px] iphone:bottom-[156px] sm:bottom-[80px] md:bottom-[112px] justify-center w-full  m-auto left-1/2 transform -translate-x-1/2 '>
                <TimeCounter title={languageData?.timeCounterTitle} languageData={languageData} />
            </div>
                */}
    </div>
  );
}

export default Double;
