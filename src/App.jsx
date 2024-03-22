import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLanguage } from "./Helpers/Languages/LanguageContext";
import React, { useEffect } from "react";
import mixpanel from "mixpanel-browser";
import Auth from "./Pages/Auth";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Main from "./Pages/Main";
import DiscordAuth from "./Pages/Auth/DiscordAuth";
import { DesignProvider } from "./Helpers/Design/DesignContext";
import moengage from "@moengage/web-sdk";
import Admin from "./Pages/Admin";
import RegisterToken from "./Pages/RegisterToken";
import AuthToken from "./Pages/AuthToken";

function App() {
  moengage.initialize({
    app_id: "GL6LO1GVSQI7L67UCUGV3MRJ",
    debug_logs: 0,
    cluster: "DC_2",
    enableSPA: true,
  });

  /* UTM SAVING */
  const params = new URLSearchParams(window.location.search);
  useEffect(() => {
    const utm_source = params.get("utm_source");
    const utm_medium = params.get("utm_medium");
    const utm_campaign = params.get("utm_campaign");
    const utm_term = params.get("utm_term");
    const utm_content = params.get("utm_content");

    if (utm_source) {
      window.localStorage.setItem("utm_source", utm_source);
    }

    if (utm_medium) {
      window.localStorage.setItem("utm_medium", utm_medium);
    }

    if (utm_campaign) {
      window.localStorage.setItem("utm_campaign", utm_campaign);
    }

    if (utm_term) {
      window.localStorage.setItem("utm_term", utm_term);
    }

    if (utm_content) {
      window.localStorage.setItem("utm_content", utm_content);
    }
  }, []);

  mixpanel.init(process.env.REACT_APP_MIXPANEL_PROJECT_TOKEN, {
    utm_campaign: params.get("utm_campaign") || window.localStorage.getItem("utm_campaign"),
    utm_source: params.get("utm_source") || window.localStorage.getItem("utm_source"),
    utm_medium: params.get("utm_medium") || window.localStorage.getItem("utm_medium"),
    utm_term: params.get("utm_term") || window.localStorage.getItem("utm_term"),
    utm_content: params.get("utm_content") || window.localStorage.getItem("utm_content"),
  });

  const ref = window.location.pathname.split("/")[1];

  useEffect(() => {
    if (ref !== null && ref !== undefined && ref !== "" && ref !== "login") {
      window.localStorage.setItem("ref", ref);
    }

    if (params.get("uid") !== null) {
      window.localStorage.setItem("uid", params.get("uid"));
    }

    if (window.localStorage.getItem("design") === null) {
      window.localStorage.setItem("design", "1");
      //window.location.reload();
    }
  }, []);

  if (params.get("email")) {
    window.localStorage.setItem("email", params.get("email"));
  }

  if (params.get("uid")) {
    window.location.href = "/login" + params.get("uid");
  }

  useEffect(() => {
    if (params.get("ref") !== null) {
      window.localStorage.setItem("ref", params.get("ref"));
    }
  }, []);

  const queryClient = new QueryClient();

  const { language } = useLanguage();
  const [languageData, setLanguageData] = React.useState(null);

  const languages = {
    en: require("./Helpers/Languages/translations/en.json"),
    pt: require("./Helpers/Languages/translations/pt.json"),
    es: require("./Helpers/Languages/translations/es.json"),
  };

  useEffect(() => {
    let langData = languages[language];
    setLanguageData(langData);
  }, [language]);

  return (
    <QueryClientProvider client={queryClient}>
      <DesignProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Main languageData={languageData} />} />
            <Route path="/welcome/*" element={<Main languageData={languageData} />} />
            <Route path="/login" element={<Auth languageData={languageData} />} />
            <Route path="/auth/discord/callback" element={<DiscordAuth />} />
            <Route path="/register/*" element={<RegisterToken />} />
            <Route path="/auth/*" element={<AuthToken />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </DesignProvider>
    </QueryClientProvider>
  );
}

export default App;
