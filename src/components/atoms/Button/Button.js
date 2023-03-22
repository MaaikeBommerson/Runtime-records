import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/// TODO: Define props for Button
const Button = ({text, onClick}) => {

    return(
        <button ClassName="button" onClick= {onClick}>
            {text}
        </button>
    )

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