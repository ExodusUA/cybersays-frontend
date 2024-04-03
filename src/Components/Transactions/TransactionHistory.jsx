import React, { useState } from "react";
import close from "../../images/CyberSaysPage/closeMenu.png";
import transaction from "../../images/CyberSaysPage/TransactionLogo.png";
import { useQuery } from "@tanstack/react-query";
import userAPI from "../../Requests/user";
import moment from "moment";
import { useDesign } from "../../Helpers/Design/DesignContext";
import Loading from "../Loading";
import InviteFriends from "./InviteFriends";

function TransactionHistory({ setOpen, languageData, user, userCountry, setWithdrawModal, scrollToPage }) {
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

  async function getTransactionStatus(status) {
    switch (status) {
      case 1:
      case 2:
        return "Pending";
      case 3:
        return "Approved";
      case 4:
        return "Declined";
    }
  }

  const getMarkup = (type, datetime, amount, id, status, competition_rank) => {
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
      case "points_withdraw":
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
                <p className="saira text-[10px] font-light text-[#D7D7D7] md:text-[14px]">{moment.unix(Number(datetime)).format("DD MMMM, YYYY, hh:mm A")}</p>
                <p className="saira text-[10px] font-light leading-3 text-[#D7D7D7] md:text-[14px]">
                  {languageData?.transactionID} {id}
                </p>
              </div>
            </div>
            <div className="w-[150px] leading-[18px]">
              <p className={`saira mb-1 text-right text-[20px] font-semibold ${status === 1 || status === 2 ? "text-[#FF9636]" : status === 3 ? "text-[#50EA56]" : "text-[#FF3C3C]"}`}>
                -{userCountry === "BR" || userCountry === "UA" ? "R$" : "$"}
                {amount}
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
                <p className="saira  w-[200px] text-[12px] font-semibold leading-4 md:w-[unset] md:text-[14px]">
                  {languageData?.TransactionCompetitionWinner}
                  {competition_rank} {languageData?.TransactionCompetitionWinner2}
                </p>
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
    <div className="scrollbarHidden fixed top-0 z-[60] h-screen w-screen bg-[#1E1E1E] bg-opacity-60 p-4 backdrop-blur-md ">
      <div className="m-auto flex max-w-[600px] justify-end md:my-4">
        <img onClick={(e) => setOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../../images/NewDesign/closeBtn.png")} alt="close" />
      </div>
      <p className="text-center text-[18px] font-semibold md:text-[32px]">{languageData?.ransactionsTitle}</p>
      <div className="m-auto mt-3 h-[470px] w-full max-w-[345px] overflow-scroll md:max-w-[600px]">
        {isLoading === true || transactionsData === null ? (
          <div className="flex h-full items-center justify-center">
            <Loading />
          </div>
        ) : transactionsData?.length > 0 ? (
          transactionsData?.reverse().map((transaction, index) => {
            return getMarkup(
              transaction.type,
              transaction.datetime,
              userCountry === "BR" || userCountry === "UA" ? transaction.amount * 5 : transaction.amount,
              transaction.id,
              transaction.withdraw_status,
              transaction.competition_rank,
            );
          })
        ) : (
          <div className="flex h-[470px] items-center justify-center">
            <InviteFriends closeAll={setOpen} languageData={languageData} scrollToPage={scrollToPage} user={user} />
          </div>
        )}
        {/*
                 APPROVED 
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                        <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                        <div className='w-[200px] md:w-[320px]'>
                            <p className='text-[10px] md:text-[14px] font-semibold saira w-[130px] md:w-[unset] leading-3 lg:leading-4'>{languageData?.transactionApprovedTitle}
                                (payment method)
                                {languageData?.transactionApprovedSpan}</p>
                            <p className='text-[10px] md:text-[14px] text-[#D7D7D7] font-light saira'>{moment.unix((Number(1))).format('DD MMMM, YYYY, hh:mm A')}</p>
                            <p className='text-[10px] md:text-[14px] text-[#D7D7D7] font-light saira leading-3'>{languageData?.transactionID} </p>

                        </div>
                    </div>
                    <div className='w-[150px] leading-[18px]'>
                        <p className='text-[20px] text-[#50EA56] font-semibold saira text-right mb-1'>+{userCountry === 'BR' || userCountry === 'UA' ? 'R$' : '$'}10</p>
                        <p className='text-[12px] text-[#50EA56] font-normal saira  text-right'>{languageData?.transactionApprovedRight}</p>
                    </div>
                </div>
 */}

        {/*
                 PENDING 
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                        <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                        <div className='w-[200px] md:w-[320px]'>
                            <p className='text-[10px] md:text-[14px] font-semibold saira w-[130px] md:w-[unset] leading-3 lg:leading-4'>{languageData?.transactionPendingTitle}
                            (payment method)
                                {languageData?.transactionPendingSpan}</p>
                            <p className='text-[10px] md:text-[14px] text-[#D7D7D7] font-light saira'>{moment.unix((Number(1))).format('DD MMMM, YYYY, hh:mm A')}</p>
                            <p className='text-[10px] md:text-[14px] text-[#D7D7D7] font-light saira leading-3'>{languageData?.transactionID} </p>

                        </div>
                    </div>
                    <div className='w-[150px] leading-[18px]'>
                        <p className='text-[20px] text-[#FF9636] font-semibold saira text-right mb-1'>+{userCountry === 'BR' || userCountry === 'UA' ? 'R$' : '$'}10</p>
                        <p className='text-[12px] text-[#FF9636] font-normal saira  text-right'>{languageData?.transactionPendingRight}</p>
                    </div>
                </div>
*/}

        {/*
                 REJECTED
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex items-center'>
                        <img className='w-[32px] h-[32px]  mr-2 md:mr-4' src={transaction} alt="transaction" />
                        <div className='w-[200px] md:w-[320px]'>
                            <p className='text-[10px] md:text-[14px] font-semibold saira w-[130px] md:w-[unset] leading-3 lg:leading-4'>{languageData?.transactionRejectedTitle}
                            (payment method)
                                {languageData?.transactionRejectedSpan}</p>
                            <p className='text-[10px] md:text-[14px] text-[#D7D7D7] font-light saira'>{moment.unix((Number(1))).format('DD MMMM, YYYY, hh:mm A')}</p>
                            <p className='text-[10px] md:text-[14px] text-[#D7D7D7] font-light saira leading-3'>{languageData?.transactionID} </p>

                        </div>
                    </div>
                    <div className='w-[150px] leading-[18px]'>
                        <p className='text-[20px] text-[#FF3C3C] font-semibold saira text-right mb-1'>-{userCountry === 'BR' || userCountry === 'UA' ? 'R$' : '$'}10</p>
                        <p className='text-[12px] text-[#FF3C3C] font-normal saira  text-right'>{languageData?.transactionRejectedRight}</p>
                    </div>
                </div>
                */}
      </div>

      <div className="flex justify-center">
        <button
          onClick={(e) => {
            setWithdrawModal(true);
            setOpen(false);
          }}
          className={`saira mt-3  w-full max-w-[370px] border-[2px] bg-white py-2 text-[18px] font-semibold text-black ${design === "0" ? " rounded-[50px] border-[2px] bg-white " : " gradient-homepageBtn rounded-[12px] border-none"}`}
        >
          {languageData?.withdrawBtn}
        </button>
      </div>
    </div>
  );
}

export default TransactionHistory;
