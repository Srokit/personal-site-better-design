import { useEffect, useState } from 'react';
import {useCookies} from 'react-cookie';

import logo from './logo.svg';

import SplashScreen from './splashscreen';
import ResumePage from './resume-page';

import './App.css';

const REMOVE_SS_SECONDS = 7;
// 1 week
const HAVE_SEEN_SS_COOKIE_TTL_SEC = 60 * 60 * 24 * 7;

function App() {

  const [showingSS, setShowingSS] = useState(true);

  const [cookies, setCookie] = useCookies(['haveSeenSS']);

  useEffect(() => {
    setTimeout(() => {
      setShowingSS(false);
    }, REMOVE_SS_SECONDS * 1000);
    if (!(cookies.haveSeenSS)) {
      setCookie('haveSeenSS', true,
          { path: '/' , maxAge: HAVE_SEEN_SS_COOKIE_TTL_SEC});
    } else {
      setShowingSS(false);
    }
  }, []);

  return (
    <div className="App">
      <ResumePage />
      { (showingSS) ? <SplashScreen /> : null }
    </div>
  );
}

export default App;
