import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import { useLanguage } from './Helpers/Languages/LanguageContext';
import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Auth from './Pages/Auth';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient()

  const urlParams = new URLSearchParams(window.location.search);
  const uid = urlParams.get('userid');

  mixpanel.init(process.env.REACT_APP_MIXPANEL_PROJECT_TOKEN);

  const targetURL = uid === null ? `https://imlive.com/wmaster.ashx?QueryID=197&WID=126670106835&linkID=701&from=freevideo6` : `https://imlive.com/wmaster.ashx?QueryID=197&WID=126670106835&linkID=701&from=freevideo6&promocode=${uid}`

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

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main languageData={languageData} targetURL={targetURL} uid={uid} />} />
          <Route path="/login" element={<Auth languageData={languageData} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
