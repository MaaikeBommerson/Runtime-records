import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Header1 from '../../atoms/Header1/Header1'
import Cartitem from '../../molecules/Cartitem'
import Total from '../../molecules/Total'

/// TODO: Define props for Shoppingcart
const Shoppingcart = (props) => {

    return(
        <div className='Shoppingcart'>
            <Header1 text='Shopping cart'/>
            <Cartitem />
            <Cartitem />
            <Cartitem />
            <Total />
            
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

Shoppingcart.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Shoppingcart