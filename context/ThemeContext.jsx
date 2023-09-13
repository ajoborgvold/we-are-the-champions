import React, { createContext, useState } from 'react'

const ThemeContext = createContext()

function ThemeContextProvider({children}) {
    const [theme, setTheme] = useState('dark')
    
    function toggleTheme() {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider }