import React from "react";
import { useDesign } from "../Helpers/Design/DesignContext";
import promo_logos from "../images/Promo/promo-logos.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../Helpers/API";
import userAPI from "../Requests/user";
import { useQuery } from "@tanstack/react-query";
import PartnerLinks from "../Helpers/PartnerLinks";

function ChoosePromo({ languageData }) {
  const { design } = useDesign();

  const [userCountry, setUserCountry] = useState(null);
  const [partnerURL, setPartnerURL] = useState(null);
  const [userData, setUserData] = useState(null);

  useQuery({
    queryKey: ["userData"],
    queryFn: async () => {
      const res = await userAPI.getUserData();
      setUserData(res);
      return res;
    },
  });

  useEffect(() => {
    getUserCountry();
    async function getUserCountry() {
      const res = await API.getUserCountry();
      setUserCountry(res);
    }
  }, []);

  useEffect(() => {
    if (userData && userCountry) {
      let linkData = PartnerLinks.find((link) => link.CultureCode.indexOf(userCountry) !== -1);
      if (linkData === undefined) linkData = PartnerLinks.find((link) => link.CultureCode.indexOf("en") !== -1);

      let link = `https://imlive.com/wmaster2.ashx?QueryID=197&WID=${linkData.CybersaysWid}&linkID=701&from=freevideo6&cbname=CyberSays&c=${linkData.CultureCode}&promocode=${userData?.id}&func=signup`;

      setPartnerURL(link);
    }
  }, [userData, userCountry]);

  return (
    <section className="bg-promo-mobile lg:bg-promo-desktop h-screen w-screen overflow-y-scroll py-4 md:overflow-hidden">
      <div className="flex justify-center text-center">
        <Link to={"/"} target="_blank">
          <img className="m-auto w-[80%] max-w-[470px] md:w-full" src={promo_logos} alt="Promo Logos" />
        </Link>
      </div>

      <div className="px-2 text-center">
        <h1 className="inter mb-4 text-[18px] font-medium tracking-widest md:text-[34px]">{languageData?.promoTitle}</h1>
        <p className="inter m-auto max-w-[660px] text-[14px] font-light">{languageData?.promoSubtitle}</p>
      </div>

      <div className="mt-6 grid scale-[85%] grid-cols-1 justify-center gap-4 text-center md:mt-16 md:scale-100 lg:grid-cols-3">
        <Link to={partnerURL} target="_blank">
          <div className="bg-promo-card-1 relative m-auto h-[155px] w-[360px] rounded-xl bg-cover md:h-[180px] md:w-[350px] 2xl:h-[220px] 2xl:w-[430px]">
            <div className="z-1 absolute left-0 top-0 h-full w-full bg-black/20"></div>
            <div className="absolute left-0 right-0 top-[-10px] flex justify-center">
              <span className="saira  rounded-full bg-[#3FAE5D] px-2 py-1 text-[8px] font-medium uppercase md:text-[12px]">{languageData?.promoCardOffer}</span>
            </div>
            <div className="flex h-full items-center justify-center lg:gap-4">
              <p className="roboto-condensed promoTextGradient max-w-[200px] rotate-[-5deg] text-center text-[26px] md:text-[28px] md:leading-7 2xl:text-[50px] 2xl:leading-[50px]">{languageData?.promoCard1Title}</p>
              <div className="min-w-[200px]">
                <p className="saira my-2 text-center">{languageData?.promoCard1Cashback}</p>
                <div className="flex items-start gap-2">
                  <div className="text-center">
                    <p className="inter mb-1 max-w-[70px] rounded-full border-2 border-[#FFED63] bg-[#610057] p-2 py-1 text-[8px] font-bold tracking-wide md:text-[14px]">200%</p>
                    <p className="saira text-[10px] 2xl:text-[12px] "> {languageData?.promoCard1NotHappy}</p>
                    <p className="saira text-[10px] 2xl:text-[12px] ">
                      {languageData?.promoCard1Refund} {userCountry === "BR" || userCountry === "UA" ? "R$50" : "$10"}
                    </p>
                  </div>
                  <span className="saira mt-[5px] text-[12px] uppercase">{languageData?.promoCard3Or}</span>
                  <div className="w-[100px] text-center">
                    <p className="inter m-auto mb-1 max-w-[70px] rounded-full border-[3px] border-[#FFED63] bg-[#610057] p-2 py-1 text-[8px] font-bold tracking-wide md:text-[14px]">400%</p>
                    <p className="saira text-[10px] font-semibold 2xl:text-[12px]">{languageData?.promoCard1LoveIt}</p>
                    <p className="saira   relative right-2 text-[10px] font-semibold 2xl:text-[12px]">
                      {languageData?.promoCard1Credits}
                      {userCountry === "BR" || userCountry === "UA" ? "R$100" : "$20"}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center md:mt-4">
                  <button className="saira yellowButton px-1 text-[10px] md:px-2 md:py-1 2xl:text-[12px]">{languageData?.promoCard1GetIt}</button>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to={partnerURL} target="_blank">
          <div className="bg-promo-card-2 relative m-auto h-[155px] w-[360px] rounded-xl bg-cover md:h-[180px] md:w-[350px] 2xl:h-[220px] 2xl:w-[430px]">
            <div className="absolute left-0 right-0 top-[-10px] flex justify-center">
              <span className="saira  rounded-full bg-[#3FAE5D] px-2 py-1 text-[8px] font-medium uppercase md:text-[12px]">{languageData?.promoCardOffer}</span>
            </div>
            <div className="relative left-[40px] top-[20px] max-w-[200px] text-center md:top-[30px]">
              <p className="saira text-[16px] font-bold md:text-[20px]">{languageData?.promoCard2Title}</p>
              <p className="saira font-regular mt-2 text-[12px] leading-5 md:text-[14px]">{languageData?.promoCard2Subtitle}</p>
              <button className="saira yellowButton mt-2 px-1 text-[10px] md:px-2 md:py-1 2xl:text-[12px]">{languageData?.promoCard2Button}</button>
            </div>
          </div>
        </Link>
        <Link to={partnerURL} target="_blank">
          <div className="bg-promo-card-3 z-2 relative m-auto h-[155px] w-[360px] rounded-xl bg-cover backdrop-brightness-50 md:h-[180px] md:w-[350px] 2xl:h-[220px] 2xl:w-[430px]">
            <div className="z-1 absolute left-0 top-0 h-full w-full bg-black/20"></div>
            <div className="absolute left-0 right-0 top-[-10px] flex justify-center">
              <span className="saira rounded-full bg-[#3FAE5D] px-2 py-1 text-[8px] font-medium uppercase md:text-[12px]">{languageData?.promoCardOffer}</span>
            </div>
            <div className="relative left-[40px] top-[20px] max-w-[280px] text-center md:left-[70px]">
              <p className="saira text-[14px] font-bold 2xl:text-[20px]">{languageData?.promoCard3Title}</p>
              <p className="saira font-regular text-[10px] md:text-[12px] md:leading-5">{languageData?.promoCard3Text1}</p>
              <p className="saira font-regular text-[10px] md:text-[12px]">{languageData?.promoCard3Or}</p>
              <p className="saira font-regular text-[10px] md:text-[12px] md:leading-5">{languageData?.promoCard3Text2}</p>
              <button className="saira yellowButton px-1 text-[10px] md:px-2 md:py-1 2xl:text-[12px]">{languageData?.promoCard2Button}</button>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default ChoosePromo;
