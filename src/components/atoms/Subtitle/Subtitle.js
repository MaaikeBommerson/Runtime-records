import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Subtitle = ({ text }) => {
    
  
    return (
        <h5 className='fg-highlight'>{text}</h5>
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

Subtitle.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Subtitle