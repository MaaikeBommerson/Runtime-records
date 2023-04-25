import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import IconRow from '../../atoms/Iconrow'


/// TODO: Define props for Button
const Button = ({text, onClick, icon, style}) => {

    if (text === 'icon') {
            return(
                <button className= "Iconbutton Shadow" onClick= {onClick} style={style}>
                <Icon icon= {icon}/>
                </button>
            )
    } 
    else {
    return(
        <button className="Textbutton bg-highlight Shadow" onClick= {onClick}>
            {text} 
        </button>
    )}

}

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!
const sizes = [
    "small",
    "medium",
    "large"
]

const exceptionClasses = [
    "button",
    "regular"
]

Button.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Button