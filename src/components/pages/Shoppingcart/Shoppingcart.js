import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Cartitem from '../../molecules/Cartitem'
import Total from '../../molecules/Total'

/// TODO: Define props for Shoppingcart
const Shoppingcart = (props) => {

    return(
        <>
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Total />
            
        </>
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

Shoppingcart.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Shoppingcart