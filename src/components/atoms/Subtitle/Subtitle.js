import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/// TODO: Define props for Subtitle
const Subtitle = (props) => {

    return(
        <div data-testid={ props.testID }
             data-object-type={ props.type ?? ""}
             className={ `Subtitle ${props.size} more utility classes` }>
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

Subtitle.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Subtitle