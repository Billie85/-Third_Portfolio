import ReactDOM from 'react-dom/client';
import './index.css';
import Cursor from './CursorPointer/Cursor.jsx';
import WelcomePage from './WelcomePage/WelcomePage.jsx';
import Tokyo42 from './Introduction/Tokyo42.jsx';
import Strengths from './Introduction/Strengths.jsx'
import Personality from './Introduction/Personality.jsx';
import Goal from './Introduction/Goal.jsx';
import Contact from './Contact/Contact.jsx';
import Project from './Project/Project.jsx';
import Message from './Introduction/Message.jsx';


const App = () => {
  return (
    <>
      <Cursor />
      <WelcomePage />

      <Tokyo42/>
      <Strengths/>
      <Personality/>
      <Goal/>
      <Message />
      <Project/>
      <Contact />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
