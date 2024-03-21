import React, { useState } from "react";
import close from "../../../images/CyberSaysPage/closeMenu.png";
import transaction from "../../../images/CyberSaysPage/TransactionLogo.png";
import { useDesign } from "../../../Helpers/Design/DesignContext";
import userAPI from "../../../Requests/user";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading";

function Earned({ setOpen, languageData, user, setTransactionsModal, userCountry }) {
  const { design } = useDesign();
  const [transactionsData, setTransactionsData] = useState(null);

  const { isLoading } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const res = await userAPI.getTransactions();
      setTransactionsData(res.data.transactions[0]);
      return res;
    },
  });

  const getMarkup = (type, datetime, amount, id, status) => {
    switch (type) {
      case "doubling_referral":
        return (
          <div className="mt-4 flex items-center justify-between ">
            <div className="flex items-center">
              <img className="mr-2 h-[32px] w-[32px] md:mr-4" src={transaction} alt="transaction" />
              <div className="w-[200px] md:w-[400px]">
                <p className="saira mb-2 text-[12px] font-semibold  leading-4 md:text-[14px]">{languageData?.ticketsSection1Left}</p>
                <p className="saira text-[12px] font-normal md:text-[14px] ">{moment.unix(Number(datetime)).format("DD MMMM, YYYY, hh:mm A")}</p>
              </div>
            </div>
            <div className="w-[100px] leading-[18px]">
              <p className="saira mb-1 text-right text-[20px] font-semibold text-[#93CC8E]">
                +{userCountry === "BR" || userCountry === "UA" ? "R$" : "$"}
                {amount}
              </p>
              <p className="saira text-right text-[12px]  font-normal">{languageData?.transactionsSection1Right}</p>
            </div>
          </div>
        );
      case "doubling":
        return (
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <img className="mr-2 h-[32px]  w-[32px] md:mr-4" src={transaction} alt="transaction" />
              <div className="w-[200px] md:w-[400px]">
                <p className="saira w-[200px] text-[12px] font-semibold leading-4 md:w-[unset] md:text-[14px]">{languageData?.transactionsSection1Left}</p>
                <p className="saira text-[12px] font-normal md:text-[14px]">{moment.unix(Number(datetime)).format("DD MMMM, YYYY, hh:mm A")}</p>
              </div>
            </div>
            <div className="w-[100px] leading-[18px]">
              <p className="saira mb-1 text-right text-[20px] font-semibold text-[#93CC8E]">
                +{userCountry === "BR" || userCountry === "UA" ? "R$" : "$"}
                {amount}
              </p>
              <p className="saira text-right text-[12px] font-normal">{languageData?.transactionsSection2Right}</p>
            </div>
          </div>
        );
      case "withdraw":
      case "paxum_withdraw":
      case "visa_withdraw":
      case "xoxoday_withdraw":
      case "imlive_withdraw":
        return (
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <img className="mr-2 h-[32px]  w-[32px] md:mr-4" src={transaction} alt="transaction" />
              <div className="w-[200px] md:w-[320px]">
                <p className="saira w-[130px] text-[10px] font-semibold leading-3 md:w-[unset] md:text-[14px] lg:leading-4">
                  {languageData?.transactionPendingTitle + " "}
                  <span className="saira">{type === "paxum_withdraw" ? "PIX" : type === "visa_withdraw" ? "Visa" : type === "xoxoday_withdraw" ? "Xoxoday" : type === "imlive_withdraw" ? "Partner" : "PIX"} </span>
                  {" " + status === 1 || status === 2 ? languageData?.transactionPendingSpan : status === 3 ? languageData?.transactionApprovedSpan : languageData?.transactionRejectedSpan}
                </p>
                <p className="saira text-[10px] font-light text-[#D7D7D7] md:text-[14px]">{moment.unix(Number(1)).format("DD MMMM, YYYY, hh:mm A")}</p>
                <p className="saira text-[10px] font-light leading-3 text-[#D7D7D7] md:text-[14px]">
                  {languageData?.transactionID} {id}
                </p>
              </div>
            </div>
            <div className="w-[150px] leading-[18px]">
              <p className={`saira mb-1 text-right text-[20px] font-semibold ${status === 1 || status === 2 ? "text-[#FF9636]" : status === 3 ? "text-[#50EA56]" : "text-[#FF3C3C]"}`}>
                +{userCountry === "BR" || userCountry === "UA" ? "R$" : "$"}10
              </p>
              <p className={`saira text-right text-[12px] font-normal ${status === 1 || status === 2 ? "text-[#FF9636]" : status === 3 ? "text-[#50EA56]" : "text-[#FF3C3C]"}`}>{languageData?.transactionWithdraw}</p>
            </div>
          </div>
        );
      case "competition":
        return (
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <img className="mr-2 h-[32px]  w-[32px] md:mr-4" src={transaction} alt="transaction" />
              <div className="w-[200px] md:w-[400px]">
                <p className="saira  w-[200px] text-[12px] font-semibold leading-4 md:w-[unset] md:text-[14px]">{languageData?.TransactionCompetitionWinner}</p>
                <p className="saira  text-[12px] font-normal md:text-[14px]">{moment.unix(Number(datetime)).format("DD MMMM, YYYY, hh:mm A")}</p>
              </div>
            </div>
            <div className="w-[100px] leading-[18px]">
              <p className="saira mb-1 text-right text-[20px] font-semibold text-[#93CC8E]">
                +{userCountry === "BR" || userCountry === "UA" ? "R$" : "$"}
                {amount}
              </p>
              <p className="saira text-right text-[12px]  font-normal">{languageData?.transactionsSection2Right}</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div onClick={(e) => setOpen(false)} className="fixed top-0 z-[99999] flex h-screen  w-screen items-center p-4 ">
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative m-auto w-full max-w-[600px] rounded-[12px] border-[1px] bg-[#0A1225B2] bg-opacity-70 p-2 backdrop-blur-md lg:px-4 ${design === "0" ? " border-[#FFD700]" : "  border-[#A2DBF0]"}`}
      >
        <div className="flex justify-end md:mt-4 ">
          <img onClick={(e) => setOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../../../images/NewDesign/closeBtn.png")} alt="close" />
        </div>
        <p className="gradient-linkDouble text-center text-[18px] font-semibold lg:text-[24px]">{userCountry === "BR" || userCountry === "UA" ? languageData?.earnedModalTitleBR : languageData?.earnedModalTitle}</p>
        <div className="m-auto h-[250px] w-full max-w-[345px] overflow-scroll md:max-w-[600px]">
          {isLoading === true || transactionsData === null ? (
            <div className="flex h-full items-center justify-center">
              <Loading />
            </div>
          ) : transactionsData?.length > 0 ? (
            transactionsData?.reverse().map((transaction, index) => {
              return getMarkup(transaction.type, transaction.datetime, userCountry === "BR" || userCountry === "UA" ? transaction.amount * 5 : transaction.amount, transaction.id, transaction.withdraw_status);
            })
          ) : (
            <div className="flex h-[200px] items-center justify-center">
              <p className="text-center text-[18px] font-semibold">{languageData?.noTransactions}</p>
            </div>
          )}
        </div>
        <div className=" flex justify-center">
          <p
            onClick={(e) => {
              setTransactionsModal(true);
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

export default Earned;
