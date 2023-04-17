import { useState, useEffect, useContext } from 'react'
import {NumericFormat} from 'react-number-format'
import { PatternFormat } from 'react-number-format'
import PropTypes from 'prop-types'

import Header3 from '../../atoms/Header1/Header1'
import PriceTag from '../../atoms/Pricetag/Pricetag'
import ShoppingButton from '../../atoms/Shoppingbutton/Shoppingbutton'
import Icon from '../../atoms/Icon/Icon'
import IconRow from '../../atoms/Iconrow/Iconrow'

import ShoppingCartContext from '../../../contexts'

/// TODO: Define props for Total
const Total = () => {

    const ctx = useContext(ShoppingCartContext)

    const result = ctx.shoppingCartContent.reduce((total, currentValue) => total = total + currentValue.price,0)

    return(
    <div className='Total'>
        <div className='Totalprice'>
            <Header3 text='Total order'/>
            <PriceTag price= {result} />
        </div>
        <div className='Buttonbar fg-highlight'
             onClick= {() => alert('Nu nog ff niet afrekenen!')}>
            <h4 >Checkout</h4>
            <Icon icon={IconRow.arrow} className='arrow'/>
            <Icon icon={IconRow.shoppingcart} className='shoppingcart bg-highlight shadow'/>
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