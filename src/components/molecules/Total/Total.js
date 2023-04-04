import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Header1 from '../../atoms/Header1/Header1'
import PriceTag from '../../atoms/Pricetag/Pricetag'
import ShoppingButton from '../../atoms/Shoppingbutton/Shoppingbutton'

/// TODO: Define props for Total
const Total = () => {

    return(
    <div className='Total'>
        <div className='Totalprice'>
            <Header1 text='Total order'/>
            <PriceTag />
        </div>
        <div className='Buttonbar fg-highlight'>
            <h4 >Checkout</h4>
            <ShoppingButton className='orange'/>
        </div>
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

Total.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Total