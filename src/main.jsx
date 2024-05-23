import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Navbar/Navbar.jsx'
import Header from './Header/Header.jsx'
import About from './About/About.jsx'
import ImgDesign from './ImgDesign/ImgDesign.jsx'
import SecondHeader from './SecondHeader/SecondHeader.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <SecondHeader/>
        <About/>
        <ImgDesign/>
        <Header/>
    </>
)
