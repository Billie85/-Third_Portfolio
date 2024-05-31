import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/Header.jsx';
import About from './About/About.jsx';
import SecondHeader from './SecondHeader/SecondHeader.jsx';
import Contact from './Contact/Contact.jsx';
import Gif from '/gif.webp'
import Cursor from './CursorPointer/Cursor.jsx';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  
  if (windowWidth >= 150 && windowWidth <= 319) {
    return (
      <div>
        <img src={Gif} alt="Gif" />
    </div>
    );
  }

  return (
    <>
      <Cursor/>
      <SecondHeader />
      <About />
      <Header />
      <Contact />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
