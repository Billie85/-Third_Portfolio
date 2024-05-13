import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Navbar/Navbar.jsx'
import Header from './Header/Header.jsx'
import About from './About/About.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Navbar/>
        <Header/>
        <About/>
    </>
)
