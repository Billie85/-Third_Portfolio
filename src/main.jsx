import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header/Header.jsx'
import About from './About/About.jsx'
import SecondHeader from './SecondHeader/SecondHeader.jsx'
import Game from './Game/Game.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <SecondHeader/>
        <About/>
        <Header/>
        <Game/>
    </>
)
