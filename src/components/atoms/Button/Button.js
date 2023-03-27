import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import IconRow from '../../atoms/Iconrow'


/// TODO: Define props for Button
const Button = ({text, onClick, icon}) => {

    if (text === 'icon') {
            return(
                <button classname= "Iconbutton" onClick= {onClick}>
                <Icon icon= {icon}/>
                </button>
            )
    } 
    else {
    return(
        <button className="Textbutton" onClick= {onClick}>
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