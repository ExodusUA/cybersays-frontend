import React, { useEffect, useState } from "react";
import close from "../../images/CyberSaysPage/closeMenu.png";
import joker from "../../images/CyberSaysPage/MyTicketJoker.png";
import coin from "../../images/CyberSaysPage/MyTicketCoin.png";
import { useQuery } from "@tanstack/react-query";
import userAPI from "../../Requests/user";
import moment from "moment";
import refferals from "../../images/CyberSaysPage/headerRefferals.png";
import { useDesign } from "../../Helpers/Design/DesignContext";
import InviteFriends from "./InviteFriends";

function TicketsHistory({ setOpen, languageData, user, setSelectedButton, selectedButton, scrollToPage }) {
  const { design } = useDesign();
  const [ticketsData, setTicketsData] = useState(null);
  const [pointsData, setPointsData] = useState(null);
  const [allData, setAllData] = useState(null);

  const [allTickets, setAllTickets] = useState(null);
  const [allPoints, setAllPoints] = useState(null);

  useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const res = await userAPI.getTickets();
      setTicketsData(res.data.tickets[0]);

      let allTickets = 0;

      res.data.tickets[0].map((ticket) => {
        allTickets += Number(ticket.amount);
      });

      proccessData(res.data.tickets[0]);
      setAllTickets(allTickets);

      return res.data.tickets[0];
    },
  });

  useQuery({
    queryKey: ["points"],
    queryFn: async () => {
      const res = await userAPI.getPoints();
      setPointsData(res.data.points[0]);

      let allPoints = 0;

      res.data.points[0].map((point) => {
        allPoints += Number(point.amount);
      });
      setAllPoints(allPoints);

      return res.data.points[0];
    },
  });

  useEffect(() => {
    if (ticketsData === null || pointsData === null) return;
    proccessData(selectedButton === "ticket" ? ticketsData : pointsData);
  }, [ticketsData, pointsData, selectedButton]);

  function proccessData(proccessData) {
    if (proccessData === null) return;

    let data = proccessData?.map((ticket) => {
      return {
        name: selectedButton === "ticket" ? "ticket" : "point",
        type: ticket.type,
        datetime: ticket.datetime,
        amount: ticket.amount,
      };
    });

    let sorted = data?.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
    setAllData(sorted);
  }

  const getTicketsMarkup = (type, datetime, amount) => {
    switch (type) {
      case "tickets_doubling_referral":
        return (
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px] md:mr-4" src={joker} alt="transaction" />
              <div className="w-[200px] md:w-[400px]">
                <p className="saira mb-1 w-[180px] text-[12px] font-semibold leading-4 md:w-[unset] md:text-[14px]">{languageData?.ticketsSection1Left}</p>
                <p className="saira text-[12px] font-normal md:text-[14px]">{moment.unix(Number(datetime)).format("DD MMMM, YYYY, hh:mm A")}</p>
              </div>
            </div>
            <div className="w-[90px]">
              <p className="saira text-right text-[20px] font-semibold text-[#CAB8E8]">+{amount}</p>
              <p className="saira text-right text-[12px] font-normal">{languageData?.ticketsSection1Right}</p>
            </div>
          </div>
        );
      case "tickets_email_referral":
        return (
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px] md:mr-4" src={joker} alt="transaction" />
              <div className="w-[200px] md:w-[400px]">
                <p className="saira mb-1 w-[180px] text-[12px] font-semibold leading-4 md:w-[unset] md:text-[14px]">{languageData?.ticketsSection2Left}</p>
                <p className="saira text-[12px] font-normal md:text-[14px]">{moment.unix(Number(datetime)).format("DD MMMM, YYYY, hh:mm A")}</p>
              </div>
            </div>
            <div className="w-[100px]">
              <p className="saira text-right text-[20px] font-semibold text-[#CAB8E8]">+{amount}</p>
              <p className="saira text-right text-[12px]  font-normal">{languageData?.ticketsSection2Right}</p>
            </div>
          </div>
        );
      case "tickets_imlive_bonus":
        return (
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px] md:mr-4" src={coin} alt="transaction" />
              <div className="w-[200px] md:w-[400px]">
                <p className="saira mb-1 w-[180px] text-[12px] font-semibold leading-4 md:w-[unset] md:text-[14px]">You received 5 tickets for withdrawing through Partner</p>
                <p className="saira text-[12px] font-normal md:text-[14px] ">{moment.unix(Number(datetime)).format("DD MMMM, YYYY, hh:mm A")}</p>
              </div>
            </div>
            <div className="w-[100px]">
              <p className="saira text-right text-[20px] font-semibold text-[#CAB8E8]">+{amount}</p>
              <p className="saira text-right text-[12px]  font-normal">{languageData?.ticketsSection6Right}</p>
            </div>
          </div>
        );
      case "tickets_buying_credits":
        return (
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px] md:mr-4" src={joker} alt="transaction" />
              <div className="w-[200px] md:w-[400px]">
                <p className="saira mb-1 w-[180px] text-[12px] font-semibold leading-4 md:w-[unset] md:text-[14px]">
                  {languageData?.ticketsSection3Left} {amount} {languageData?.ticketsSection3Left2}
                </p>
                <p className="saira text-[12px] font-normal md:text-[14px] ">{moment.unix(Number(datetime)).format("DD MMMM, YYYY, hh:mm A")}</p>
              </div>
            </div>
            <div className="w-[100px]">
              <p className="saira text-right text-[20px] font-semibold text-[#CAB8E8]">+{amount}</p>
              <p className="saira text-right text-[12px]  font-normal">{languageData?.ticketsSection3Right}</p>
            </div>
          </div>
        );
    }
  };

  const getPointsMarkup = (type, datetime, amount) => {
    switch (type) {
      case "points_doubling_referral":
        return (
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px] md:mr-4" src={coin} alt="transaction" />
              <div className="w-[200px] md:w-[400px]">
                <p className="saira mb-1 w-[180px] text-[12px] font-semibold leading-4 md:w-[unset] md:text-[14px]">{languageData?.ticketsSection1Left}</p>
                <p className="saira text-[12px] font-normal md:text-[14px]">{moment.unix(Number(datetime)).format("DD MMMM, YYYY, hh:mm A")}</p>
              </div>
            </div>
            <div className="w-[100px]">
              <p className="saira text-right text-[20px] font-semibold text-[#CAB8E8]">+{amount}</p>
              <p className="saira text-right text-[12px]  font-normal">{languageData?.ticketsSection4Right}</p>
            </div>
          </div>
        );
      case "points_email_referral":
        return (
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px] md:mr-4" src={coin} alt="transaction" />
              <div className="w-[200px] md:w-[400px]">
                <p className="saira mb-1 w-[180px] text-[12px] font-semibold leading-4 md:w-[unset] md:text-[14px]">{languageData?.ticketsSection5Left}</p>
                <p className="saira text-[12px] font-normal md:text-[14px]">{moment.unix(Number(datetime)).format("DD MMMM, YYYY, hh:mm A")}</p>
              </div>
            </div>
            <div className="w-[100px]">
              <p className="saira text-right text-[20px] font-semibold text-[#CAB8E8]">+{amount}</p>
              <p className="saira text-right text-[12px]  font-normal">{languageData?.ticketsSection5Right}</p>
            </div>
          </div>
        );
      case "points_buying_credits":
        return (
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px] md:mr-4" src={coin} alt="transaction" />
              <div className="w-[200px] md:w-[400px]">
                <p className="saira mb-1 w-[180px] text-[12px] font-semibold leading-4 md:w-[unset] md:text-[14px]">
                  {languageData?.ticketsSection6Left} {amount * 2} {languageData?.ticketsSection6Left2}
                </p>
                <p className="saira text-[12px] font-normal md:text-[14px] ">{moment.unix(Number(datetime)).format("DD MMMM, YYYY, hh:mm A")}</p>
              </div>
            </div>
            <div className="w-[100px]">
              <p className="saira text-right text-[20px] font-semibold text-[#CAB8E8]">+{amount}</p>
              <p className="saira text-right text-[12px]  font-normal">{languageData?.ticketsSection6Right}</p>
            </div>
          </div>
        );
      case "points_imlive_bonus":
        return (
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px] md:mr-4" src={coin} alt="transaction" />
              <div className="w-[200px] md:w-[400px]">
                <p className="saira mb-1 w-[180px] text-[12px] font-semibold leading-4 md:w-[unset] md:text-[14px]">You received 30 points for withdrawing through Partner</p>
                <p className="saira text-[12px] font-normal md:text-[14px] ">{moment.unix(Number(datetime)).format("DD MMMM, YYYY, hh:mm A")}</p>
              </div>
            </div>
            <div className="w-[100px]">
              <p className="saira text-right text-[20px] font-semibold text-[#CAB8E8]">+{amount}</p>
              <p className="saira text-right text-[12px]  font-normal">{languageData?.ticketsSection6Right}</p>
            </div>
          </div>
        );
      case "end_daily":
        return (
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px] md:mr-4" src={coin} alt="transaction" />
              <div className="w-[200px] md:w-[400px]">
                <p className="saira mb-1 w-[180px] text-[12px] font-semibold leading-4 md:w-[unset] md:text-[14px]">End Daily Competition</p>
                <p className="saira text-[12px] font-normal md:text-[14px] ">{moment.unix(Number(datetime)).format("DD MMMM, YYYY, hh:mm A")}</p>
              </div>
            </div>
            <div className="w-[100px]">
              <p className="saira text-right text-[20px] font-semibold text-red-600">-{amount}</p>
              <p className="saira text-right text-[12px]  font-normal">{languageData?.ticketsSection6Right}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed top-0 z-[60] h-screen w-screen bg-[#1E1E1E] bg-opacity-60 p-4 backdrop-blur-md ">
      <div className="m-auto flex max-w-[600px] justify-end md:my-4">
        <img onClick={(e) => setOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={close} alt="close" />
      </div>
      <p className="text-center text-[18px] font-semibold md:text-[32px]">{languageData?.ticketsTitle}</p>
      <div class=" my-2 flex justify-center">
        <div class={`m-auto flex  rounded-[14px] border-[1px] border-[#FDA62D]  `}>
          <div onClick={(e) => setSelectedButton("ticket")} className={`${selectedButton === "ticket" && "gradient-tourToggle"}  cursor-pointer rounded-[12px] px-[20px] py-[5px]  md:py-[6px]`}>
            <p className={`${selectedButton === "ticket" && "!text-black"} saira flex items-center text-[14px] font-bold text-white`}>
              {languageData?.ticketsToggle1}
              <img className="mx-[5px] h-[16px] w-[16px]" src={design === "0" ? joker : require("../../images/NewDesign/header/ticket.png")} alt="joker" /> {user?.raffle_tickets || 0}
            </p>
          </div>
          <div onClick={(e) => setSelectedButton("point")} className={`${selectedButton === "point" && "gradient-tourToggle"} cursor-pointer rounded-[12px] px-[20px] py-[5px] md:py-[6px]`}>
            <p className={`${selectedButton === "point" && "!text-black"} saira flex items-center text-[14px] font-bold text-white`}>
              {languageData?.ticketsToggle2}
              <img className="mx-[5px] h-[16px] w-[16px]" src={design === "0" ? refferals : require("../../images/NewDesign/header/points.png")} alt="refferals" /> {Number(user?.points).toFixed(0) || 0}
            </p>
          </div>
        </div>
      </div>

      <div className="m-auto mt-3 h-[470px] w-full max-w-[345px] overflow-scroll md:max-w-[600px]">
        {allData?.length > 0 ? (
          allData !== null &&
          allData?.map((ticket) => {
            return ticket.name === "ticket" ? getTicketsMarkup(ticket.type, ticket.datetime, ticket.amount) : getPointsMarkup(ticket.type, ticket.datetime, ticket.amount);
          })
        ) : (
          <div className="flex h-[470px] items-center justify-center">
            <InviteFriends closeAll={setOpen} languageData={languageData} scrollToPage={scrollToPage} user={user} />
          </div>
        )}
      </div>
    </div>
  );
}

export default TicketsHistory;
