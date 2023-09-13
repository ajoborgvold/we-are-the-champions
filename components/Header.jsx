import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import freddieMercuryImg from '../assets/freddie.png'

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext)
        
    return (
        <header>
            <button 
                onClick={toggleTheme} 
                className="btn btn-enabled theme-btn"
            >
                {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <img src={freddieMercuryImg} className={`header-img header-img--${theme}`} alt="Silhuet of Freddie Mercury" />
            <h1>We are the champions</h1>
        </header>
    )
}