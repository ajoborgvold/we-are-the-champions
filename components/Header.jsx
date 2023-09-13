import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


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
            <img src="../assets/freddie.png" className={`header-img header-img--${theme}`} alt="Silhuet of Freddie Mercury" />
            <h1>We are the champions</h1>
        </header>
    )
}