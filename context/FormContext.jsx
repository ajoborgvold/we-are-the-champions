import React, { createContext, useState, useEffect, useRef } from 'react'
import { push, onValue, ref, set, remove } from 'firebase/database'
import { endorsementsInDb, db } from '../firebase/dbSetup'

const FormContext = createContext()

function FormContextProvider({children}) {
    const [formData, setFormData] = useState({
        text: '',
        from: '',
        to: '',
        likes: 0
    })
    const [isPublishBtnEnabled, setIsPublishBtnEnabled] = useState(false)
    const [endorsementsToDisplay, setEndorsementsToDisplay] = useState([])
    const focusRef = useRef(null)
    
    useEffect(() => {
        if (formData.text && formData.from && formData.to) {
            setIsPublishBtnEnabled(true)
        }
        else {
            setIsPublishBtnEnabled(false)
        }
    }, [formData])
    
    useEffect(() => {
        onValue(endorsementsInDb, snapshot => {
            if (!snapshot.val()) {
                return
            }
            else {
                setEndorsementsToDisplay(Object.entries(snapshot.val()).reverse())
            }
        })
    }, [])
    
    function handleTextareaChange(e) {
        setFormData(prevData => ({...prevData, text: e.target.value}))
    }
    
    function handleInputFromChange(e) {
        setFormData(prevData => ({...prevData, from: e.target.value}))
    }
    
    function handleInputToChange(e) {
        setFormData(prevData => ({...prevData, to: e.target.value}))
    }
        
    function storeEndorsementInDb(e) {
        e.preventDefault()
        push(endorsementsInDb, formData)
        setFormData({
            text: '',
            from: '',
            to: '',
            likes: 0
        })
        focusRef.current.focus()
    }
    
    function handleLikeClick(item, e) {
        if (!e || e.key === 'Enter') {
            const updatedLikesCount = item[1].likes === 0 ? 1 : 0
            const itemInDb = ref(db, `endorsements/${item[0]}`)
            set(itemInDb, {...item[1], likes: updatedLikesCount})
        }
    }
    
    function clearDatabase() {
        remove(ref(db, 'endorsements'))
        setEndorsementsToDisplay([])
    }
            
    return (
        <FormContext.Provider value={{
            formData,
            handleTextareaChange,
            handleInputFromChange,
            handleInputToChange,
            isPublishBtnEnabled,
            storeEndorsementInDb,
            focusRef,
            endorsementsToDisplay,
            handleLikeClick,
            clearDatabase
        }}>
            {children}
        </FormContext.Provider>
    )
}

export { FormContext, FormContextProvider }