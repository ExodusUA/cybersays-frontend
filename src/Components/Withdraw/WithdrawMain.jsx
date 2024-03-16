import React from "react";
import { useDesign } from "../../Helpers/Design/DesignContext";
import SelectMethod from "./SelectMethod";

function WithdrawMain({ selectPayment, selectedPayment, userCountry, user, languageData, setImLiveSelected, setFlowStarted }) {
  const { design } = useDesign();

  return (
    <>
      <div>
        <p className="text-center text-[18px] font-semibold md:text-[32px]">{languageData?.withdrawTitle1}</p>
        <p className={`text-[12px] ${design === "0" ? "text-[#FFED63]" : "gradient-linkDouble font-semibold"} saira text-center font-medium`}>{languageData?.withdrawSubtitle}</p>
        <div className=" m-auto mt-3 flex  justify-center text-center">
          <div className={`bg-[#EAEAEA] bg-opacity-30 backdrop-blur-lg ${design === "0" ? "rounded-[30px]" : " rounded-[12px]"} px-8`}>
            <p className={`w-f text-[32px] ${design === "0" ? "text-[#FFED63]" : "gradient-linkDouble font-semibold"} saira mt-1 text-center font-bold leading-9`}>
              {userCountry === "BR" || userCountry === "UA" ? "R$" : "$"}
              {userCountry === "BR" || userCountry === "UA" ? user?.earned.toFixed(0) * 5 : user?.earned.toFixed(0)}
            </p>
            <p className="saira mb-2 text-center text-[12px] font-medium leading-3">{languageData?.withdrawPrice}</p>
          </div>
        </div>

        <div className=" ">
          <SelectMethod
            user={user}
            setFlowStarted={setFlowStarted}
            setImLiveSelected={setImLiveSelected}
            languageData={languageData}
            selectPayment={selectPayment}
            selectedPayment={selectedPayment}
            userCountry={userCountry}
          />
        </div>
      </div>
    </>
  );
}

export default WithdrawMain;
