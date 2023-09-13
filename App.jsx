import React, { useContext } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import EndorsementsContainer from './components/EndorsementsContainer'
import { FormContextProvider } from './context/FormContext'
import { ThemeContext } from './context/ThemeContext'

export default function App() {  
    const { theme } = useContext(ThemeContext)
      
    return (
        <div className={`container container--${theme}`}>
            <Header />
            <main>
                <FormContextProvider>
                    <Form />
                    <EndorsementsContainer />
                </FormContextProvider>
            </main>
        </div>
    )
}