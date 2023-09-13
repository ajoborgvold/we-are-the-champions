import React, { useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FormContext } from '../context/FormContext'
import { ThemeContext } from '../context/ThemeContext'


export default function Endorsement() {
    const { endorsementsToDisplay, handleLikeClick } = useContext(FormContext)
    const { theme } = useContext(ThemeContext)
            
    if (endorsementsToDisplay.length) {
        const endorsementEl = endorsementsToDisplay.map(item => {
            const itemId = item[0]
            const itemValue = item[1]
            
            return (
                <div key={itemId} className={`endorsement-wrapper endorsement-wrapper--${theme}`}>
                    <p className="bold">To {itemValue.to}</p>
                    <p>{itemValue.text}</p>
                    <div className="endorsement-bottom">
                        <p className="bold">From {itemValue.from}</p>
                            <div onClick={() => handleLikeClick(item)} className="icon-wrapper">
                                {itemValue.likes ? 
                                    <FaHeart className="heart-icon"/> : 
                                    <FaRegHeart className="heart-icon"/>
                                }
                            </div>
                        <p className="bold">{itemValue.likes}</p>
                    </div>
                </div>
            )
        })
        return endorsementEl
    }
            
    return (
        <div>
            {endorsementsToDisplay.length ? {endorsementEl} : null}
        </div>
    )
}