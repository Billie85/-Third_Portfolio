import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header/Header.jsx';
import About from './About/About.jsx';
import SecondHeader from './SecondHeader/SecondHeader.jsx';
import Contact from './Contact/Contact.jsx';
import Gif from '/gif.webp';
import Cursor from './CursorPointer/Cursor.jsx';

const App = () => {

  return (
    <>
      <Cursor />
      <SecondHeader />
      <About />
      <Header />
      <Contact />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
