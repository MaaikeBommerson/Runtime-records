import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Nav from '../../molecules/Nav/Nav'
import Menu from '../Menu/Menu'
/// TODO: Define props for Navigation
const Navigation = () => {

    return(
        <div className='Navigation'>
            <Nav>
            <Menu />
            </Nav>
            
        </div>
    )
//wordt tot nu toe niet gebruikt
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

Navigation.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Navigation