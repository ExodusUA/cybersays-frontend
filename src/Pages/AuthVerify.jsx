import React from "react";
import AuthEmailNotification from "./Auth/AuthEmailNotification";

function AuthVerify({ languageData }) {
  return (
    <div>
      <AuthEmailNotification languageData={languageData} />
    </div>
  );
}

export default AuthVerify;
