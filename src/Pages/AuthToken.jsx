import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthError from "./Auth/AuthError";
import { jwtDecode } from "jwt-decode";
import moengage from "@moengage/web-sdk";

function AuthToken() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  let urlToken = window.location.href.split("/")[4];

  useEffect(() => {
    async function checkToken() {
      if (!urlToken) return setError(true);
      //navigate("/login");

      let params = new URLSearchParams(window.location.search);
      let ifProcessed = params.get("processed");

      if (ifProcessed === "true") {
        try {
          const decoded = jwtDecode(urlToken);

          if (decoded.userId) {
            window.localStorage.setItem("token", urlToken);
            await moengage.add_unique_user_id(decoded.userId);

            let fbc = document.cookie.match(/_fbc=([^;]+)/);

            let queryParams = "";
            if (fbc) queryParams += `?fbclid=${fbc.split(".")[1]}`;

            navigate(`/${queryParams}`);
          }
        } catch (error) {
          setError(true);
        }
      } else {
        window.location.replace("https://cybersaysm-redirect.vercel.app?token=" + urlToken);
      }
    }
    checkToken();
  }, [urlToken]);

  return <AuthError error={error} />;
}

export default AuthToken;
