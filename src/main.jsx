import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/Header.jsx';
import About from './About/About.jsx';
import SecondHeader from './SecondHeader/SecondHeader.jsx';
import Gif from '../public/gif.webp'

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  if (windowWidth >= 150 && windowWidth <= 319) {
    console.log(windowWidth, ": display none");
    return (
      <div>
        <img src="/gif.webp" alt="Gif" />
    </div>
    );
  }

  return (
    <>
      <SecondHeader />
      <About />
      <Header />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
