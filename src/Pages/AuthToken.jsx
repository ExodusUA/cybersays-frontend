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
      navigate("/login");

      try {
        const decoded = jwtDecode(urlToken);

        if (decoded.userId) {
          window.localStorage.setItem("token", urlToken);
          await moengage.add_unique_user_id(decoded.userId);
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

export default AuthToken;
