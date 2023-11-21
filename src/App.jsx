import { LanguageProvider } from './Helpers/Languages/LanguageContext';
import Main from './Pages/Main';

function App() {
  return (
    <LanguageProvider>
      <Main />
    </LanguageProvider>
  );
}

export default App;
