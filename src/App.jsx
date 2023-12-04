import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Pages/Main';
import { useLanguage } from './Helpers/Languages/LanguageContext';
import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import Auth from './Pages/Auth';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Token from './Pages/Token';

function App() {

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

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Main languageData={languageData} />} />
          <Route path="/login" element={<Auth languageData={languageData} />} />
          <Route path="/token/*" element={<Token  />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
