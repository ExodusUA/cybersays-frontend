import React from "react";
import { useDesign } from "../Helpers/Design/DesignContext";
import promo_logos from "../images/Promo/promo-logos.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../Helpers/API";

function ChoosePromo({ languageData }) {
  const { design } = useDesign();

  const [userCountry, setUserCountry] = useState(null);

  useEffect(() => {
    getUserCountry();
    async function getUserCountry() {
      const res = await API.getUserCountry();
      setUserCountry(res);
    }
  }, []);

  return (
    <section className="bg-promo-desktop h-screen w-screen overflow-hidden py-4">
      <div className="flex justify-center text-center">
        <Link to="/imlive-promo">
          <img className="m-auto w-[80%] max-w-[470px] md:w-full" src={promo_logos} alt="Promo Logos" />
        </Link>
      </div>

      <div className="px-2 text-center">
        <h1 className="inter mb-4 text-[18px] font-medium tracking-widest md:text-[34px]">CHOOSE A PROMOTION</h1>
        <p className="inter m-auto max-w-[660px] text-[14px] font-light">
          Choose one of our latest promotions and explore new shows, models, and thrilling experiences! Dive into these fantastic deals and begin your adventure with beautiful models!
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 justify-center gap-4 px-4 text-center md:mt-16 md:grid-cols-2 xl:flex">
        <Link to="/imlive-promo">
          <div className="bg-promo-card-1 relative m-auto h-[155px] w-[360px] rounded-xl bg-cover md:h-[220px] md:w-[430px]">
            <div className="absolute left-0 right-0 top-[-10px] flex justify-center">
              <span className="saira  rounded-full bg-[#3FAE5D] px-2 py-1 text-[8px] font-medium uppercase md:text-[12px]">One-time offer</span>
            </div>
            <div className="flex h-full items-center justify-center gap-4">
              <p className="roboto-condensed promoTextGradient max-w-[200px] rotate-[-5deg] text-center text-[26px] md:text-[50px] md:leading-[50px]">Welcome Deal</p>
              <div>
                <p className="saira my-2 text-center">Cashback</p>
                <div className="flex items-start gap-2">
                  <div className="text-center">
                    <p className="inter mb-1 max-w-[70px] rounded-full border-2 border-[#FFED63] bg-[#610057] p-2 py-1 text-[8px] font-bold tracking-wide md:text-[14px]">200%</p>
                    <p className="saira text-[10px] md:text-[12px] ">Not happy?</p>
                    <p className="saira text-[10px] md:text-[12px] ">Refund {userCountry === "BR" || userCountry === "UA" ? "R$50" : "$10"}</p>
                  </div>
                  <span className="saira mt-[10px] text-[12px]">OR</span>
                  <div className="text-center">
                    <p className="inter m-auto mb-1 max-w-[70px] rounded-full border-[3px] border-[#FFED63] bg-[#610057] p-2 py-1 text-[8px] font-bold tracking-wide md:text-[14px]">400%</p>
                    <p className="saira text-[10px] font-semibold md:text-[12px]">Love it?</p>
                    <p className="saira text-[10px] font-semibold md:text-[12px]">+20 credits={userCountry === "BR" || userCountry === "UA" ? "R$100" : "$20"}</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <button className="saira yellowButton px-1 text-[10px] md:px-4 md:py-2 md:text-[12px]">Get it Now!</button>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/imlive-promo">
          <div className="bg-promo-card-2 relative m-auto h-[155px] w-[360px] rounded-xl bg-cover md:h-[220px] md:w-[430px]">
            <div className="absolute left-0 right-0 top-[-10px] flex justify-center">
              <span className="saira  rounded-full bg-[#3FAE5D] px-2 py-1 text-[8px] font-medium uppercase md:text-[12px]">One-time offer</span>
            </div>
            <div className="relative left-[40px] top-[20px] max-w-[200px] text-center md:top-[50px]">
              <p className="saira text-[16px] font-bold md:text-[20px]">Hot Offer!</p>
              <p className="saira font-regular mt-2 text-[12px] leading-5 md:text-[14px]">Discover models with Private Show discounts!</p>
              <button className="saira yellowButton mt-2 px-1 text-[10px] md:px-4 md:py-2 md:text-[12px]">Check Them Out!</button>
            </div>
          </div>
        </Link>
        <Link to="/imlive-promo">
          <div className="bg-promo-card-3 relative m-auto h-[155px] w-[360px] rounded-xl bg-cover md:h-[220px] md:w-[430px]">
            <div className="absolute left-0 right-0 top-[-10px] flex justify-center">
              <span className="saira rounded-full bg-[#3FAE5D] px-2 py-1 text-[8px] font-medium uppercase md:text-[12px]">One-time offer</span>
            </div>
            <div className="relative left-[120px] top-[20px] max-w-[220px] text-center md:left-[200px]">
              <p className="saira text-[14px] font-bold md:text-[20px]">Hot deal</p>
              <p className="saira font-regular text-[10px] md:text-[13px] md:leading-5">Try ImLive for a few bucks.... didn’t like it? Get 200% cashback</p>
              <p className="saira font-regular text-[10px] md:text-[13px]">or</p>
              <p className="saira font-regular text-[10px] md:text-[13px] md:leading-5">20 more credits for free that will give you 1+ hours of views</p>
              <button className="saira yellowButton px-1 text-[10px] md:px-4 md:py-2 md:text-[12px]">Check Them Out!</button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default ChoosePromo;
