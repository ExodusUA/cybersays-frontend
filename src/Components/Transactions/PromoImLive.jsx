import React, { useState } from "react";
import close from "../../images/CyberSaysPage/closeMenu.png";
import PartnerLogo from "../../images/NewDesign/PartnerLogo.png";
import { useDesign } from "../../Helpers/Design/DesignContext";
import promoGirl from "../../images/NewDesign/promoGirl.png";
import promoGirlMessage from "../../images/NewDesign/promoGirl-message.png";

function PromoPartner({ languageData }) {
  const { design } = useDesign();

  return (
    <div
      className={`relative m-auto mt-2 w-full max-w-[350px] rounded-[12px] border-[2px] bg-new-bg-promo bg-cover bg-no-repeat px-2 md:max-w-[600px] lg:px-4 ${design === "0" ? " border-[#FFD700]" : "  border-[#A2DBF0]"}`}
    >
      <div className="m-auto w-full max-w-[350px]">
        <div className="mt-2 flex items-center justify-center">
          <img className="w-[120px]" src={promoGirl} alt="promoGirl" />
          <div className=" relative">
            <img className="w-[140px]" src={PartnerLogo} alt="PartnerLogo" />
            <p className="  saira gradient-linkDouble left-[-10px] top-[38px] mt-3 w-[200px] text-[14px] font-normal">{languageData?.promoPartnerDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoPartner;
