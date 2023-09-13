import React, { useContext } from 'react'
import Endorsement from './Endorsement'
import { FormContext } from '../context/FormContext'
import { ThemeContext } from '../context/ThemeContext'
import { endorsementsInDb } from '../firebase/dbSetup'

export default function EndorsementsContainer() {
    const { endorsementsToDisplay, clearDatabase } = useContext(FormContext)
    const { theme } = useContext(ThemeContext)
    
    return (
        <>
            {endorsementsToDisplay.length ? 
                <section className="endorsements-container">
                    <h2>– Endorsements –</h2>
                    <Endorsement />
                    <button onClick={clearDatabase} className="btn btn-enabled db-btn clear-btn">Clear  database</button>
                </section> :
                <div className="user-message-wrapper">
                    <p className="user-message">No endorsements yet. Go ahead and write one!</p>
                </div>
            }
        </>
    )
    
}