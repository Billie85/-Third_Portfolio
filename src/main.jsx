import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/Header.jsx';
import About from './About/About.jsx';
import SecondHeader from './SecondHeader/SecondHeader.jsx';
import Contact from './Contact/Contact.jsx';
import Gif from '/gif.webp'
import Cursor from './CursorPointer/Cursor.jsx';
import styles from './main.module.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth  = window.innerWidth;
      setWindowWidth(newWindowWidth);
      setLoading(true);
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  if (loading) {
    return (
      <div className={styles.preloader}>
        <div className={styles.spinner}></div>
      </div>
    );
  }
  
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