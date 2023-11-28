import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './Helpers/Languages/LanguageContext';
import Main from './Pages/Main';
import Homepage from './Pages/Homepage';
import { useLanguage } from './Helpers/Languages/LanguageContext';
import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';

function App() {

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
    <BrowserRouter>
      <Routes>
        <Route path="/offer" element={<Main languageData={languageData} targetURL={targetURL} uid={uid} />} />
        <Route path="/" element={<Homepage languageData={languageData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
