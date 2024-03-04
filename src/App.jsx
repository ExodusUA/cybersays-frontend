import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLanguage } from './Helpers/Languages/LanguageContext';
import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Auth from './Pages/Auth';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Token from './Pages/Token';
import Main from './Pages/Main';
import Privacy from './Pages/Privacy';
import DiscordAuth from './Pages/Auth/DiscordAuth';
import { DesignProvider } from './Helpers/Design/DesignContext';
import Terms from './Pages/Terms';
import Policy from './Pages/Policy';
import ContestTerms from './Pages/ContestTerms';
import PromotionTerms from './Pages/PromotionTerms';
import AffiliationTerms from './Pages/AffiliationTerms';

function App() {

  useEffect(() => {
    if (window.localStorage.getItem('design') === null) {
      window.localStorage.setItem('design', '1');
      //window.location.reload();
    }
  }, []);

  const params = new URLSearchParams(window.location.search);

  if (params.get('email')) {
    window.localStorage.setItem('email', params.get('email'))
  }

  if (params.get('uid')) {
    window.location.href = '/login?ref=' + params.get('uid')
  };

  useEffect(() => {
    if (params.get('ref') !== null) {
      window.localStorage.setItem('ref', params.get('ref'))
    }

  }, []);

  const queryClient = new QueryClient()

  mixpanel.init(process.env.REACT_APP_MIXPANEL_PROJECT_TOKEN);

  const { language } = useLanguage();
  const [languageData, setLanguageData] = React.useState(null);

  const languages = {
    en: require('./Helpers/Languages/translations/en.json'),
    pt: require('./Helpers/Languages/translations/pt.json'),
    es: require('./Helpers/Languages/translations/es.json'),
  };

  useEffect(() => {
    let langData = languages[language];
    setLanguageData(langData);
  }, [language]);

  /* UTM SAVING */

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get('utm_source');
    const utm_medium = params.get('utm_medium');
    const utm_campaign = params.get('utm_campaign');
    const utm_term = params.get('utm_term');
    const utm_content = params.get('utm_content');

    if (utm_source) {
      window.localStorage.setItem('utm_source', utm_source);
    }

    if (utm_medium) {
      window.localStorage.setItem('utm_medium', utm_medium);
    }

    if (utm_campaign) {
      window.localStorage.setItem('utm_campaign', utm_campaign);
    }

    if (utm_term) {
      window.localStorage.setItem('utm_term', utm_term);
    }

    if (utm_content) {
      window.localStorage.setItem('utm_content', utm_content);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <DesignProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<Main languageData={languageData} />} />
            <Route path="/login" element={<Auth languageData={languageData} />} />
            <Route path="/auth/discord/callback" element={<DiscordAuth />} />
            <Route path="/privacy" element={<Privacy languageData={languageData} />} />
            <Route path="/token/*" element={<Token />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/contest-terms" element={<ContestTerms />} />
            <Route path="/promotion-terms" element={<PromotionTerms />} />
            <Route path="/affiliation-terms" element={<AffiliationTerms />} />
          </Routes>
        </BrowserRouter>
      </DesignProvider>
    </QueryClientProvider>
  );
}

export default App;