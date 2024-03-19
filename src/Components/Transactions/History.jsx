import React from "react";
import close from "../../images/CyberSaysPage/closeMenu.png";
import transaction from "../../images/CyberSaysPage/TransactionLogo.png";

function History() {
  return (
    <div className="fixed top-0 z-[60] h-screen w-screen bg-[#1E1E1E] bg-opacity-60 p-4 backdrop-blur-md ">
      <div className="flex justify-end">
        <img className="h-[24px] w-[24px] cursor-pointer" src={close} alt="close" />
      </div>
      <p className="text-center text-[18px] font-semibold">Transaction History</p>
      <div className="m-auto mt-3 h-[470px] w-full max-w-[345px] overflow-scroll">
        <div className="mt-2 flex items-center justify-between">
          <img className="h-[32px] w-[32px]" src={transaction} alt="transaction" />
          <div className="w-[200px]">
            <p className="saira w-[200px] text-[12px] font-semibold leading-4">Doubling you money and enjoying Partner!</p>
            <p className="saira text-[12px] font-normal">25 December, 2023, 5.05 AM</p>
          </div>
          <div className="w-[90px]">
            <p className="saira text-right text-[20px] font-semibold text-[#93CC8E]">+10$</p>
            <p className="saira text-right text-[12px] font-normal">Doubling money</p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <img className="h-[32px] w-[32px]" src={transaction} alt="transaction" />
          <div className="w-[200px]">
            <p className="saira text-[12px] font-semibold  leading-4">Your friend doubled his money!</p>
            <p className="saira text-[12px] font-normal ">25 December, 2023, 5.05 AM</p>
          </div>
          <div className="w-[100px]">
            <p className="saira text-right text-[20px] font-semibold text-[#93CC8E]">+1$</p>
            <p className="saira text-right text-[12px]  font-normal">Doubling money</p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <img className="h-[32px] w-[32px]" src={transaction} alt="transaction" />
          <div className="w-[200px]">
            <p className="saira w-[200px] text-[12px] font-semibold leading-4">Your won competition</p>
            <p className="saira text-[12px] font-normal">25 December, 2023, 5.05 AM</p>
          </div>
          <div className="w-[100px]">
            <p className="saira text-right text-[20px] font-semibold text-[#93CC8E]">+X$</p>
            <p className="saira text-right text-[12px]  font-normal">Competition</p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <img className="h-[32px] w-[32px]" src={transaction} alt="transaction" />
          <div className="w-[200px]">
            <p className="saira w-[200px] text-[12px] font-semibold leading-4">Money withdraw</p>
            <p className="saira text-[12px] font-normal">25 December, 2023, 5.05 AM</p>
          </div>
          <div className="w-[100px]">
            <p className="saira text-right text-[20px] font-semibold text-[#FF6D6D]">-10$</p>
            <p className="saira text-right text-[12px]  font-normal">Withdraw</p>
          </div>
        </div>
      </div>
      <button className="saira mt-3  w-full rounded-[50px] border-[2px] border-[#FFED63] bg-white py-2 text-[18px] font-semibold text-black">Withdraw</button>
    </div>
  );
}

export default History;
