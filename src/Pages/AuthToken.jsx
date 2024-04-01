import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthError from "./Auth/AuthError";
import { jwtDecode } from "jwt-decode";
import moengage from "@moengage/web-sdk";

function AuthToken() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  let urlToken = window.location.href.split("/")[4];
  console.log("urlToken", urlToken);

  useEffect(() => {
    async function checkToken() {
      if (!urlToken) return setError(true);

      const tokenParts = urlToken.split("?");
      const token = tokenParts[0];

      let ifProcessed = false;
      if (tokenParts.length > 1) {
        let params = new URLSearchParams(tokenParts[1]);
        ifProcessed = params.get("processed") === "true";
      }

      if (ifProcessed) {
        try {
          const decoded = jwtDecode(token);

          if (decoded.userId) {
            window.localStorage.setItem("token", token);
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
        window.location.replace("https://cybersaysm-redirect.vercel.app?token=" + token);
      }
    }
    checkToken();
  }, [urlToken]);

  return <AuthError error={error} />;
}

export default AuthToken;
