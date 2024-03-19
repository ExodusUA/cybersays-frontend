import React, { useState, useEffect } from "react";
import close from "../../../images/CyberSaysPage/closeMenu.png";
import { useDesign } from "../../../Helpers/Design/DesignContext";
import userAPI from "../../../Requests/user";
import hero from "../../../images/NewDesign/partnersHero.png";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function Collaborate({ user, setOpen, languageData, userCountryData }) {
  const { design } = useDesign();

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [message, setMessage] = useState(null);
  const [userCountry, setUserCountry] = useState(null);
  const [who, setWho] = useState(null);
  const [optionWho, setOptionWho] = useState(0);
  const [URL, setURL] = useState(null);
  const [job, setJob] = useState(null);

  const [isDone, setIsDone] = useState(false);

  const handleSend = async () => {
    if (email === null || name === null || message === null) return alert("Please fill all the fields");

    let data = {
      email: email,
      name: name,
      message: message,
      phone: phone,
      url: URL,
      job: job,
      role: optionWho,
    };

    const res = await userAPI.messageCollaborate(email, data);

    if (res.status === 200) {
      setIsDone(true);
    }
  };
  const selectedWho = [
    {
      option: languageData?.collaborateWhoOption1,
    },
    {
      option: languageData?.collaborateWhoOption2,
    },
    {
      option: languageData?.collaborateWhoOption3,
    },
    {
      option: languageData?.collaborateWhoOption4,
    },
  ];
  useEffect(() => {
    if (userCountryData) {
      setUserCountry(userCountryData?.toLowerCase());
    }
  }, [userCountryData]);
  return (
    <div className="fixed top-0 z-[99999] h-screen w-screen bg-[#1E1E1E] bg-opacity-60 p-4 backdrop-blur-md ">
      <div className="m-auto max-w-[600px]">
        <div className="flex justify-end md:my-4">
          <img onClick={(e) => setOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../../../images/NewDesign/closeBtn.png")} alt="close" />
        </div>

        {isDone === false ? (
          <div className="(menuScroll) h-screen overflow-y-auto pb-[130px] lg:pb-[100px]">
            <>
              <h1 className="text-center text-[18px] font-semibold text-white lg:text-[32px]">{languageData?.collaborateTitle}</h1>
              <p className="saira gradient-linkDouble text-center text-[14px] font-medium leading-4">{languageData?.collaborateSubTitle} </p>
              <img className="my-2 w-full" src={hero} alt="hero" />
              <p className="saira my-1 text-[12px] font-medium">{languageData?.collaborateInput1}</p>
              <div className="flex justify-center">
                <input
                  className={`saira font-regular w-full max-w-[600px] bg-white p-3 text-[16px] text-black outline-none ${design === "0" ? "  rounded-[50px]" : " rounded-[12px] "}`}
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={languageData?.collaborateInput1}
                />
              </div>
              <p className="saira my-1 text-[12px] font-medium">{languageData?.collaboratePhone}</p>
              {userCountry !== null && (
                <PhoneInput
                  className="saira  w-full max-w-[600px] rounded-[12px] text-[16px]  font-semibold text-black outline-none"
                  style={{ width: "100%", padding: "5px", backgroundColor: "#F5F5F5" }}
                  defaultCountry={userCountry}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                />
              )}
              <p className="saira my-1 text-[12px] font-medium">{languageData?.collaborateInput2}</p>
              <div className="flex justify-center">
                <input
                  className={`saira font-regular w-full max-w-[600px] bg-white p-3 text-[16px] text-black outline-none ${design === "0" ? "  rounded-[50px]" : " rounded-[12px] "}`}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={languageData?.collaborateInput2}
                />
              </div>
              <p className="saira my-1 text-[12px] font-medium">{languageData?.collaborateURL}</p>
              <div className="flex justify-center">
                <input
                  className={`saira font-regular w-full max-w-[600px] bg-white p-3 text-[16px] text-black outline-none ${design === "0" ? "  rounded-[50px]" : " rounded-[12px] "}`}
                  type="text"
                  value={URL}
                  onChange={(e) => setURL(e.target.value)}
                  placeholder={languageData?.collaborateURL}
                />
              </div>
              <p className="saira my-1 text-[12px] font-medium">{languageData?.collaborateJob}</p>
              <div className="flex justify-center">
                <input
                  className={`saira font-regular w-full max-w-[600px] bg-white p-3 text-[16px] text-black outline-none ${design === "0" ? "  rounded-[50px]" : " rounded-[12px] "}`}
                  type="text"
                  value={job}
                  onChange={(e) => setJob(e.target.value)}
                  placeholder={languageData?.collaborateJob}
                />
              </div>
              <div>
                <p className="saira my-1 text-[12px] font-medium">{languageData?.collaborateWho}</p>
                <div className={` mt-1 border bg-white px-3 py-2 lg:py-3 ${design === "0" ? "rounded-[18px]" : "rounded-[12px]"}`}>
                  <div onClick={(e) => setWho(!who)} className={`flex  cursor-pointer items-center justify-between`}>
                    <div className="flex items-center">
                      <p className="saira text-[16px] font-normal text-[#1E1E1E]">{optionWho || languageData?.collaborateWhoSelect}</p>
                    </div>
                    <div className="ml-2">
                      {who ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M2 17L12 7L22 17" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                          <path d="M22 7.5L12 17.5L2 7.5" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
                {who && (
                  <>
                    <div className={`mt-2 border bg-white px-3 py-2 lg:py-3 ${design === "0" ? "rounded-[18px]" : "rounded-[12px]"}`}>
                      {selectedWho.map((item, index) => (
                        <div key={index} className="flex items-center gap-1">
                          <label className="checkbox-container ml-2 flex items-center">
                            <input
                              id={item.option}
                              name={item.option}
                              value={item.option}
                              checked={optionWho === item.option}
                              onChange={(e) => {
                                setOptionWho(item.option);
                                setWho(false);
                              }}
                              type="checkbox"
                            />
                            <span className="checkmark"></span>
                            <p htmlFor={item.option} className="saira text-[16px] font-normal text-[#1E1E1E]">
                              {item.option}
                            </p>
                          </label>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
              <p className="saira my-1 text-[12px] font-medium">{languageData?.collaborateInput3}</p>
              <div className="flex justify-center">
                <textarea
                  className={`saira font-regular h-[100px] w-full max-w-[600px] resize-none bg-white p-3 text-[16px] text-black outline-none ${design === "0" ? "  rounded-[12px]" : " rounded-[12px] "}`}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={languageData?.collaborateInput3}
                />
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  onClick={(e) => handleSend()}
                  className={`saira w-full  max-w-[600px]  border-[2px] bg-white py-2 text-[18px] font-semibold text-black  ${design === "0" ? "  rounded-[50px] border-[2px] border-[#FFED63] bg-white" : " gradient-homepageBtn rounded-[12px] border-none"}`}
                >
                  {languageData?.collaborateBtn}
                </button>
              </div>
            </>
          </div>
        ) : (
          <div className="flex h-[90vh] items-center">
            <div className={` rounded-[20px] bg-black bg-opacity-60 p-6 backdrop-blur-xl ${design === "0" ? " border-[#FFD700]" : "  border-[#A2DBF0]"} border`}>
              <div className="mb-2 flex justify-end">
                <img onClick={(e) => setOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../../../images/NewDesign/closeBtn.png")} alt="close" />
              </div>
              <svg className="m-auto my-4" width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M42.9981 73.501L78.2481 38.251L71.2481 31.251L42.9981 59.501L28.748 45.251L21.748 52.251L42.9981 73.501ZM49.9981 100.501C43.0814 100.501 36.5814 99.1877 30.4981 96.561C24.4147 93.9343 19.123 90.3727 14.623 85.876C10.123 81.376 6.56138 76.0843 3.93805 70.001C1.31471 63.9176 0.00138021 57.4176 -0.00195312 50.501C-0.00195312 43.5843 1.31138 37.0843 3.93805 31.001C6.56471 24.9176 10.1264 19.626 14.623 15.126C19.123 10.626 24.4147 7.06431 30.4981 4.44098C36.5814 1.81764 43.0814 0.50431 49.9981 0.500977C56.9147 0.500977 63.4147 1.81431 69.4981 4.44098C75.5814 7.06764 80.8731 10.6293 85.3731 15.126C89.8731 19.626 93.4364 24.9176 96.063 31.001C98.6897 37.0843 100.001 43.5843 99.9981 50.501C99.9981 57.4176 98.6847 63.9176 96.0581 70.001C93.4314 76.0843 89.8697 81.376 85.3731 85.876C80.8731 90.376 75.5814 93.9393 69.4981 96.566C63.4147 99.1926 56.9147 100.504 49.9981 100.501Z"
                  fill="#48EFAC"
                />
              </svg>
              <h1 className="w-full text-center text-[24px]  font-semibold text-[#48EFAC]">{languageData?.InfluencerThanks}</h1>

              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => setOpen(false)}
                  className={`saira mt-4  w-full bg-[white] p-2 px-6 py-3 text-[18px] font-semibold text-[#5f5f5f] ${design === "0" ? "  rounded-[50px] border-[2px] bg-white " : " gradient-homepageBtn rounded-[12px] border-none"}`}
                >
                  {languageData?.withdrawContinue}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collaborate;
