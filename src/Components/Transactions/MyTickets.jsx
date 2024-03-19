import React from "react";
import close from "../../images/CyberSaysPage/closeMenu.png";
import joker from "../../images/CyberSaysPage/MyTicketJoker.png";
import coin from "../../images/CyberSaysPage/MyTicketCoin.png";

function MyTickets() {
  return (
    <div className="fixed top-0 z-[60] h-screen w-screen bg-[#1E1E1E] bg-opacity-60 p-4 backdrop-blur-md ">
      <div className="flex justify-end">
        <img className="h-[24px] w-[24px] cursor-pointer" src={close} alt="close" />
      </div>
      <p className="text-center text-[18px] font-semibold">My Tickets & Points</p>
      <div className="m-auto mt-3 h-[470px] w-full max-w-[345px] overflow-scroll">
        <div className="mt-2 flex items-center justify-between">
          <img className="h-[32px] w-[32px]" src={joker} alt="transaction" />
          <div className="w-[200px]">
            <p className="saira mb-1 w-[200px] text-[12px] font-semibold leading-4">Your friend doubled their money!</p>
            <p className="saira text-[12px] font-normal">25 December, 2023, 5.05 AM</p>
          </div>
          <div className="w-[90px]">
            <p className="saira text-right text-[20px] font-semibold text-[#CAB8E8]">+30</p>
            <p className="saira text-right text-[12px] font-normal">Vegas tickets</p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <img className="h-[32px] w-[32px]" src={joker} alt="transaction" />
          <div className="w-[200px]">
            <p className="saira mb-1 text-[12px]  font-semibold leading-4">For X credit purchased on Partner!</p>
            <p className="saira text-[12px] font-normal ">25 December, 2023, 5.05 AM</p>
          </div>
          <div className="w-[100px]">
            <p className="saira text-right text-[20px] font-semibold text-[#CAB8E8]">+X</p>
            <p className="saira text-right text-[12px]  font-normal">Vegas tickets</p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <img className="h-[32px] w-[32px]" src={coin} alt="transaction" />
          <div className="w-[200px]">
            <p className="saira mb-1 w-[200px] text-[12px] font-semibold leading-4">Friend completed succfully double the money and to rceive points</p>
            <p className="saira text-[12px] font-normal">25 December, 2023, 5.05 AM</p>
          </div>
          <div className="w-[100px]">
            <p className="saira text-right text-[20px] font-semibold text-[#CAB8E8]">+X</p>
            <p className="saira text-right text-[12px]  font-normal">Points</p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <img className="h-[32px] w-[32px]" src={joker} alt="transaction" />
          <div className="w-[200px]">
            <p className="saira mb-1 w-[200px] text-[12px] font-semibold leading-4">Sent mail</p>
            <p className="saira text-[12px] font-normal">25 December, 2023, 5.05 AM</p>
          </div>
          <div className="w-[100px]">
            <p className="saira text-right text-[20px] font-semibold text-[#CAB8E8]">+X</p>
            <p className="saira text-right text-[12px]  font-normal">Vegas tickets</p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <img className="h-[32px] w-[32px]" src={coin} alt="transaction" />
          <div className="w-[200px]">
            <p className="saira mb-1 w-[200px] text-[12px] font-semibold leading-4">For X credit purchased on Partner!</p>
            <p className="saira text-[12px] font-normal">25 December, 2023, 5.05 AM</p>
          </div>
          <div className="w-[100px]">
            <p className="saira text-right text-[20px] font-semibold text-[#CAB8E8]">+X</p>
            <p className="saira text-right text-[12px]  font-normal">Points</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTickets;
