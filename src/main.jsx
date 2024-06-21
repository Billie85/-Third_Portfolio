import ReactDOM from 'react-dom/client';
import './index.css';
import AboutMe from './AboutMe/AboutMe.jsx';
import Introduction from './Introduction/Introduction.jsx';
import WelcomePage from './WelcomePage/WelcomePage.jsx';
import Contact from './Contact/Contact.jsx';
import Cursor from './CursorPointer/Cursor.jsx';
import Personality from './Personality/Personality.jsx';

const App = () => {

  return (
    <>
      <Cursor />
      <WelcomePage />
      <Personality />
      <Introduction />
      <AboutMe />
      <Contact />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
