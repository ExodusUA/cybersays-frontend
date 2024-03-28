import React, { useEffect, useState } from "react";
import close from "../../../images/CyberSaysPage/closeMenu.png";
import transaction from "../../../images/CyberSaysPage/TransactionLogo.png";
import { useDesign } from "../../../Helpers/Design/DesignContext";
import userAPI from "../../../Requests/user";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import joker from "../../../images/CyberSaysPage/MyTicketJoker.png";
import coin from "../../../images/CyberSaysPage/MyTicketCoin.png";
import Loading from "../../Loading";
import InviteFriends from "../InviteFriends";

function Ticket({ setOpen, languageData, user, setTicketsModal, setSelectedButton, scrollToPage }) {
  const { design } = useDesign();
  const [ticketsData, setTicketsData] = useState(null);
  const [allData, setAllData] = useState(null);

  const { isLoading } = useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const res = await userAPI.getTickets();
      setTicketsData(res.data.tickets[0]);
      proccessData(res.data.tickets[0]);
      return res.data.tickets[0];
    },
  });

  useEffect(() => {
    if (ticketsData === null) return;

    proccessData(ticketsData);
  }, [ticketsData]);

  function proccessData(proccessData) {
    if (proccessData === null) return;

    let data = proccessData?.map((ticket) => {
      return {
        name: "ticket",
        type: ticket.type,
        datetime: ticket.datetime,
        amount: ticket.amount,
      };
    });

    let sorted = data?.filter((ticket) => {
      return moment.unix(Number(ticket.datetime)).format("DD MMMM, YYYY") === moment().format("DD MMMM, YYYY");
    });

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
    }
  };
  const getPointsMarkup = (type, datetime, amount) => {
    switch (type) {
      case "doubling_referral":
        return (
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px] md:mr-4" src={coin} alt="transaction" />
              <div className="w-[200px] md:w-[400px]">
                <p className="saira mb-1 w-[180px] text-[12px] font-semibold leading-4 md:w-[unset] md:text-[14px]">{languageData?.ticketsSection4Left}</p>
                <p className="saira text-[12px] font-normal md:text-[14px]">{moment.unix(Number(datetime)).format("DD MMMM, YYYY, hh:mm A")}</p>
              </div>
            </div>
            <div className="w-[100px]">
              <p className="saira text-right text-[20px] font-semibold text-[#CAB8E8]">+{amount}</p>
              <p className="saira text-right text-[12px]  font-normal">{languageData?.ticketsSection4Right}</p>
            </div>
          </div>
        );
      case "email_referral":
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
      case "buying_credits":
        return (
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px] md:mr-4" src={coin} alt="transaction" />
              <div className="w-[200px] md:w-[400px]">
                <p className="saira mb-1 w-[180px] text-[12px] font-semibold leading-4 md:w-[unset] md:text-[14px]">
                  {languageData?.ticketsSection6Left} {amount} {languageData?.ticketsSection6Left2}
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
    }
  };
  return (
    <div onClick={(e) => setOpen(false)} className="fixed top-0 z-[99999] flex h-screen  w-screen items-center p-4 ">
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative m-auto w-full max-w-[600px] rounded-[12px] border-[1px] bg-[#0A1225B2] bg-opacity-70 p-2 backdrop-blur-md lg:px-4  ${design === "0" ? " border-[#FFD700]" : "  border-[#A2DBF0]"}`}
      >
        <div className="flex justify-end md:mt-4 ">
          <img onClick={(e) => setOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../../../images/NewDesign/closeBtn.png")} alt="close" />
        </div>
        <p className="gradient-linkDouble text-center text-[18px] font-semibold lg:text-[24px]">{languageData?.TicketModalTitle}</p>
        <div className="m-auto h-[250px] w-full max-w-[345px] overflow-scroll md:max-w-[600px]">
          {isLoading === true || allData === null ? (
            <div className="flex h-full items-center justify-center">
              <Loading />
            </div>
          ) : allData?.length > 0 ? (
            allData !== null &&
            allData?.reverse().map((ticket) => {
              return ticket.name === "ticket" ? getTicketsMarkup(ticket.type, ticket.datetime, ticket.amount) : getPointsMarkup(ticket.type, ticket.datetime, ticket.amount);
            })
          ) : (
            <div className="flex h-[200px] items-center justify-center">
              <InviteFriends closeAll={setOpen} languageData={languageData} scrollToPage={scrollToPage} user={user} />
            </div>
          )}
        </div>
        <div className=" flex justify-center">
          <p
            onClick={(e) => {
              setSelectedButton("ticket");
              setTicketsModal(true);
              setOpen(false);
            }}
            className="gradient-link mt-2 cursor-pointer text-center text-[12px] font-semibold text-[#D9D9D9] underline"
          >
            {languageData?.earnedModalLink}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ticket;
