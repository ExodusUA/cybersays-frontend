import React, { useState, useEffect } from "react";
import banner from "../../images/NewDesign/withdraw/banner2.png";
import bannerDesk from "../../images/NewDesign/withdraw/banner2Desk.png";

function PartnerBanner({ languageData, setPartnerSelected, selectPayment, user }) {
  let windowWidth = window.innerWidth;
  const [bannerSrc, setBannerSrc] = useState(windowWidth < 640 ? banner : bannerDesk);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBannerSrc(banner);
      } else {
        setBannerSrc(bannerDesk);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div onClick={(e) => selectPayment("Partner")} className=" relative m-auto mb-[5px] mt-2  w-full max-w-[345px] sm:max-w-[600px] cursor-pointer ">
        {/*
                                <div onClick={e => selectPayment('visa')} className={`w-[160px] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] withdrawBg3 m-auto flex justify-center items-center relative mt-2 ${selectedPayment === 'visa' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                                <img className='w-[68px]' src={withdrawLogo3} alt="withdrawLogo1" />
                                <p className=' absolute bottom-1 text-center saira font-normal text-[14px]'>Visa prepaid card</p>
                            </div>
                                */}
        <img
          onClick={(e) => {
            setPartnerSelected(true);
          }}
          className=" relative z-10 m-auto w-full max-w-[345px] sm:max-w-[600px] "
          src={bannerSrc}
          alt="banner"
        />
        <p className=" saira absolute right-[0px] sm:right-[18px] top-[22px] sm:top-[30px] z-50 w-[140px] sm:w-[200px] text-[8px] sm:text-[12px] font-medium leading-[10px] text-[#A533FF] iphone:right-[0px] iphone:top-[25px] iphone:text-[9px] sm:leading-[14px]">
          {" "}
          <span className="saira font-extrabold text-[#A533FF]">{user?.Partner_username || ""} </span>
          {languageData?.withdrawBannerMessage}
        </p>
        <div className=" absolute right-[10px] sm:right-[40px] top-[75px] sm:top-[100px] z-10 w-[150px] sm:w-[200px] iphone:right-[15px] iphone:top-[90px]">
          <p className="saira text-center text-[12px] sm:text-[16px] font-bold leading-4 text-[#9430E3]">
            {languageData?.withdrawBannerSpan1} <span className="saira text-center text-[12px] sm:text-[16px] font-normal text-[#9430E3]">11111</span> {languageData?.withdrawBannerSpan2}{" "}
            <span className="saira text-center text-[12px] sm:text-[16px] font-medium text-black">{languageData?.withdrawBannerSpan3}</span>
          </p>
          <button className="saira mt-1 w-full cursor-pointer rounded-[9px] border-2 border-[#9430E3] py-[2px] text-[12px] font-extrabold text-[#9430E3] sm:hidden">{languageData?.withdrawBannerBtn}</button>
        </div>
        <img
          className=" absolute top-0 h-full max-h-[170px] min-h-full rounded-b-[10px] rounded-t-[10px] sm:w-[380px] sm:object-cover sm:object-top"
          src={user?.Partner_image || "https://i0.imlmediahub.com/imagesrv/imp_getimage?qu=77&mark=1&cctrl=public,max-age%3d2592000&is=imlfoh&wm=0&wi=640&fn=0648/1586648/158664801706298200.jpg"}
          alt=""
        />
        {/*
                        <div onClick={e => selectPayment('Partner')} className={`w-[95%] md:w-[295px] h-[140px] cursor-pointer rounded-[14px] bg-new-bg-promo bg-no-repeat bg-cover m-auto flex justify-center items-center relative ${selectedPayment === 'Partner' && (design === '0' ? 'outline outline-[2px] outline-[#FFED63]' : 'outline outline-[2px] outline-[#A2DBF0]')} `}>
                            <div>
                                <div className='flex items-center justify-center lg:mt-4'>
                                    <img className='w-[38px]' src={promoGirl} alt="promoGirl" />
                                    <img className='w-[111px]' src={PartnerLogo} alt="PartnerLogo" />
                                </div>
                                <p className=' text-center saira font-normal text-[14px] leading-[15px] mt-2 lg:mb-1'>Partner</p>
                                <p className=' text-center saira font-normal text-[10px] px-1 lg:px-0 lg:text-[12px] gradient-linkDouble leading-[15px]'>{languageData?.promoPartnerDesc}</p>
                            </div>
                        </div>
                        */}
      </div>
    </div>
  );
}

export default PartnerBanner;
