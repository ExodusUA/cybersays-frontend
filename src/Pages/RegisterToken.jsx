import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthError from "./Auth/AuthError";
import { jwtDecode } from "jwt-decode";
import { processUserRegistration } from "../Requests/auth";
import { useLanguage } from "../Helpers/Languages/LanguageContext";

function RegisterToken() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [error, setError] = useState(false);
  let urlToken = window.location.href.split("/")[4];

  useEffect(() => {
    async function checkToken() {
      if (!urlToken) return setError(true);
      navigate("/login");

      try {
        const res = await processUserRegistration(urlToken, language);
        if (res.status === 200) {
          window.localStorage.setItem("token", res.data.token);
          navigate("/");
        }
      } catch (error) {
        setError(true);
      }
    }
    checkToken();
  }, [urlToken]);

  return <AuthError error={error} />;
}

export default RegisterToken;
