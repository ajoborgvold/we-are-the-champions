import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FormContext } from '../context/FormContext'

export default function Form() {
    const { 
        formData,
        handleTextareaChange,
        handleInputFromChange,
        handleInputToChange,
        isPublishBtnEnabled,
        storeEndorsementInDb,
        focusRef
    } = useContext(FormContext)
    
    const { theme } = useContext(ThemeContext)
    
    const btnClass = isPublishBtnEnabled ? 'btn-enabled' : 'btn-disabled'
            
    return (
        <form>
            <label htmlFor="endorsement">Write your endorsement here</label>
            <textarea 
                name="endorsement" 
                id="endorsement"
                value={formData.text} 
                onChange={e => handleTextareaChange(e)}
                placeholder="Write your endorsement here" 
                className={`textarea textarea--${theme}`}
                ref={focusRef}
            />
            <label htmlFor="input-from">Endorsement from</label>
            <input 
                type="text" 
                name="from" 
                id="input-from"
                value={formData.from} 
                onChange={e => handleInputFromChange(e)}
                placeholder="From" 
                className={`input input-from input--${theme}`}
            />
            <label htmlFor="input-to">Endorsement to</label>
            <input 
                type="text" 
                name="to" 
                id="input-to"
                value={formData.to} 
                onChange={e => handleInputToChange(e)}
                placeholder="To" 
                className={`input input-to input--${theme}`}
            />
            <button 
                onClick={e => storeEndorsementInDb(e)} 
                onKeyDown={e => e.key === 'Enter' && storeEndorsementInDb(e)}
                className={`btn db-btn publish-btn ${btnClass}`}
            >
                Publish
            </button>
        </form>
    )
}