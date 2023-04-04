import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Producttile from '../../molecules/Producttile'

/// TODO: Define props for Suggested
const Suggested = () => {

    return(
        <div className='Suggested'>
            <Producttile />
            <Producttile />
            <Producttile />
            <Producttile />
        </div>
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

Suggested.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Suggested