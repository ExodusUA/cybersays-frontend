import React, { useEffect, useState } from "react";
import close from "../../../images/CyberSaysPage/closeMenu.png";
import checkmarkImg from "../../../images/checkmarkWhite.png";
import { useNavigate } from "react-router-dom";
import userAPI from "../../../Requests/user";
import { useDesign } from "../../../Helpers/Design/DesignContext";

function Settings({ user, setOpen, languageData }) {
  const { design } = useDesign();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const [isSended, setIsSended] = useState(false);

  const [checkmark, setCheckmark] = useState(true);

  const [deleteStep, setDeleteStep] = useState(0);

  const navigate = useNavigate();

  const deleteAccountHandler = async () => {
    try {
      console.log(user);
      await userAPI.deleteUser(user.id);
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const changeUserData = async () => {
    if (email === "") return alert("Please fill all fields");
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) return alert("Please enter a valid email");
    try {
      const res = await userAPI.changeUserData(username, email, user.id);
      if (res.data.isUpdated === true) {
        setIsSended(true);
        setTimeout(() => {
          setIsSended(false);
        }, 3000);
      } else {
        alert("An error occured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 z-[99999] h-screen w-screen bg-[#1E1E1E] bg-opacity-60 p-4 backdrop-blur-md ">
      <div className="m-auto max-w-[600px]">
        <div className="flex justify-end md:my-4">
          <img onClick={(e) => setOpen(false)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../../../images/NewDesign/closeBtn.png")} alt="close" />
        </div>

        <div className="flex h-[80vh] w-full items-center justify-center align-middle">
          <div className="w-full">
            <h1 className="text-center text-[32px] text-white">{languageData?.settingsTitle}</h1>

            <p className="saira font-medium">
              My User ID: <span className="font-regular saira">{user.id}</span>
            </p>
            <div className="mt-4">
              <p className="saira text-[14px] text-white">{languageData?.settingsUserName}</p>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`w-full border bg-white ${design === "0" ? "rounded-[18px] border-[#FFED63]" : "rounded-[12px] border-[#A2DBF0]"}  saira input-fix mt-1 px-6 py-3 text-[#888888]`}
                placeholder="Username"
              />

              <p className="saira mt-6 text-[14px] text-white">{languageData?.settingsUserEmail}</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border bg-white ${design === "0" ? "rounded-[18px] border-[#FFED63]" : "rounded-[12px] border-[#A2DBF0]"} saira input-fix mt-1 px-6 py-3 text-[#888888]`}
                placeholder="E-mail"
              />

              <div className="mt-4 flex items-center gap-2">
                <input type="checkbox" name="notification" id="notification" hidden onChange={(e) => setCheckmark(!checkmark)} />
                <div className="flex h-[22px] w-[22px] items-center justify-center rounded-md border-2 border-white align-middle" onClick={(e) => setCheckmark(true)}>
                  {checkmark === true && <img className="w-3" src={checkmarkImg} alt="" />}
                </div>
                <label className="saira" htmlFor="notification">
                  {languageData?.settingsCheckbox}
                </label>
              </div>

              <div className="flex justify-center">
                <button
                  className={`w-full bg-[white] ${design === "0" ? "  rounded-[18px] border-[2px] bg-white text-[#5f5f5f]" : " gradient-homepageBtn rounded-[12px] border-none text-black"} saira mt-4 max-w-[350px] p-2 px-6 py-3   font-semibold`}
                  onClick={(e) => changeUserData()}
                >
                  {isSended ? languageData?.settingsBtnDone : languageData?.settingsBtn}
                </button>
              </div>
              <p className="saira mt-2 cursor-pointer text-center font-semibold text-[#FF4B60]" onClick={(e) => setDeleteStep(1)}>
                {languageData?.settingsDeleteStep}
              </p>
            </div>
          </div>

          {deleteStep === 1 ? (
            <div className={`absolute  max-w-[345px] rounded-[20px] border bg-black/50 p-6  backdrop-blur-lg ${design === "0" ? " border-[#FFED63]" : " border-[#A2DBF0]"}`}>
              <div className="mb-2 flex justify-end">
                <img onClick={(e) => setDeleteStep(0)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../../../images/NewDesign/closeBtn.png")} alt="close" />
              </div>
              <h1 className="text-center text-[16px] font-semibold text-white">{languageData?.settingsDeleteSure}</h1>

              <button
                onClick={(e) => setDeleteStep(2)}
                className={`w-full bg-[white]  ${design === "0" ? "  rounded-[18px]  bg-white text-[#5f5f5f]" : " gradient-homepageBtn rounded-[12px] border-none text-black"} saira mt-4 max-w-[350px] rounded-[50px] p-2 px-6 py-3 text-[18px] font-semibold text-[#5f5f5f]`}
              >
                Continue
              </button>
            </div>
          ) : deleteStep === 2 ? (
            <div className={`absolute  rounded-[20px] border bg-black/50 p-6 backdrop-blur-lg ${design === "0" ? " border-[#FFED63]" : " border-[#A2DBF0]"}`}>
              <div className="mb-2 flex justify-end">
                <img onClick={(e) => setDeleteStep(0)} className="h-[24px] w-[24px] cursor-pointer" src={design === "0" ? close : require("../../../images/NewDesign/closeBtn.png")} alt="close" />
              </div>
              <h1 className="text-center text-[16px] font-semibold text-[#FF4B60]">{languageData?.settingsDeleteSure2}</h1>

              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => setDeleteStep(0)}
                  className={`saira mt-4  w-full max-w-[350px] border bg-transparent p-2 px-6 py-3 ${design === "0" ? "  rounded-[50px] border-[#FFD700]" : " rounded-[12px] border-[#A2DBF0]"} text-[18px] font-semibold text-white`}
                >
                  {languageData?.settingsDeleteNo}
                </button>
                <button
                  onClick={(e) => deleteAccountHandler()}
                  className={`saira mt-4  w-full max-w-[350px] bg-[white] p-2 px-6 py-3 ${design === "0" ? "  rounded-[50px] border-[2px] bg-white " : " gradient-homepageBtn rounded-[12px] border-none"} text-[18px] font-semibold text-[#5f5f5f]`}
                >
                  {languageData?.settingsDeleteYes}
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Settings;
