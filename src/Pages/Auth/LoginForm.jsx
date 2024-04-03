import React, { useRef } from "react";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { createUser, socialUserAuth } from "../../Requests/auth";
import GoogleAuth from "../../Components/Buttons/GoogleButton";
import OTPModal from "./OTPModal";
import { useNavigate } from "react-router-dom";
import AuthEmailNotification from "./AuthEmailNotification";
import Loader from "../../Components/Loader";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { getUserCountry } from "../../Requests/utills";
import DiscordButton from "../../Components/Buttons/DiscordButton";
import mixpanel from "mixpanel-browser";
import { useLanguage } from "../../Helpers/Languages/LanguageContext";
import moengage from "@moengage/web-sdk";

function LoginForm({ languageData, referralID }) {
  const { language } = useLanguage();

  const recaptchaRef = useRef();
  const navigate = useNavigate();

  const [activeModal, setActiveModal] = useState(null);
  const queryParams = new URLSearchParams(window.location.search);
  let refferalCode = referralID;

  let special = window.localStorage.getItem("uid");

  if (special === undefined || special === null) special = null;
  if (refferalCode === undefined || refferalCode === null) refferalCode = null;

  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const loginViaFacebook = async (email) => {
    setLoading(true);
    console.log("Facebook Email: ", email);
    const token = await recaptchaRef.current.executeAsync();
    socialAuth(email, token);
  };

  const loginViaGoogle = async (email) => {
    setLoading(true);
    console.log("Google Email: ", email);
    const token = await recaptchaRef.current.executeAsync();
    socialAuth(email, token);
  };

  async function socialAuth(email, token) {
    try {
      let userCountry = await getUserData();
      const res = await socialUserAuth(
        email,
        token,
        refferalCode,
        special,
        userCountry.country,
        language
      );
      await handleMixpanelEvent(true, "social");

      window.location.replace(
        "https://cybersaysm-redirect.vercel.app?token=" + res.token
      );

      /*
      localStorage.setItem("token", res.token);
      navigate("/");
      */
    } catch (error) {
      await handleMixpanelEvent(false, "social");
      console.log(error);
      setLoading(false);
    }
  }

  const getCurrentModal = () => {
    switch (activeModal) {
      case "otp":
        return (
          <OTPModal
            languageData={languageData}
            recaptchaRef={recaptchaRef}
            email={email}
            refferalCode={refferalCode}
            special={special}
          />
        );
      case "notification":
        return (
          <AuthEmailNotification languageData={languageData} email={email} />
        );
      default:
        return null;
    }
  };

  const getUserData = async () => {
    try {
      const res = await getUserCountry();
      return res.data.Data;
    } catch (error) {
      console.log(error);
    }
  };

  const params = new URLSearchParams(window.location.search);

  const emailParam = params.get("email");
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    //delete email params from url
    if (emailParam === "1") {
      setShowButtons(false);
    } else {
      setShowButtons(true);
    }
  }, [emailParam]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (email === "") return alert("Please enter your email");
    if (!email.includes("@")) return alert("Please enter a valid email");
    let userCountry = await getUserData();
    const token = await recaptchaRef.current.executeAsync();

    try {
      const res = await createUser(
        token,
        email,
        refferalCode,
        userCountry.country,
        language,
        special
      );

      await handleMixpanelEvent(true, "email");
      //navigate("https://cybersaysm-redirect.vercel.app?token=" + res.token);

      //setActiveModal("notification");
      navigate("/verify-login");
      setLoading(false);
    } catch (error) {
      handleMixpanelEvent(false, "email");
      setLoading(false);
      console.log(error);
      alert("Error: ", error.message);
    }
  };

  const handleMixpanelEvent = async (success, provider) => {
    mixpanel.track("login", {
      registered_width: provider,
      success: success,
    });
    moengage.track_event("login", {
      registered_width: provider,
      success: success,
    });
  };

  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          size="invisible"
        >
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="lg:m-left mt-2 grid w-full  grid-cols-1 rounded-[14px] border-[1px] border-[#DDBBFD] bg-[#83869b] bg-opacity-20 p-1 backdrop-blur-lg lg:block  lg:rounded-[24px] lg:p-5">
              <div className="relative  text-left">
                <input
                  onBlur={(e) => {
                    window.scrollTo(0, 0);
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  className="saira h-[52px] w-full rounded-[12px] px-4 text-gray"
                  placeholder={languageData?.authEnterEmail}
                />
                <button
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                  className="continue_button saira absolute right-1 top-1 h-[44px] w-full max-w-[125px] rounded-[12px] text-[14px] font-bold md:max-w-[155px] md:text-[16px]"
                >
                  {languageData?.authContinue}
                </button>
              </div>
              <div className={`${showButtons ? "" : "hidden"}`}>
                <div className="mt-2 flex w-full items-center justify-between gap-1 lg:mt-4 lg:gap-4">
                  <GoogleAuth
                    loginViaGoogle={loginViaGoogle}
                    languageData={languageData}
                  />
                  {/*<FacebookButton loginViaFacebook={loginViaFacebook} languageData={languageData} />*/}
                  <DiscordButton languageData={languageData} />
                </div>
              </div>
            </div>
          </form>
        </ReCAPTCHA>

        {getCurrentModal()}
        {loading && <Loader />}
      </GoogleOAuthProvider>
    </>
  );
}

export default LoginForm;
