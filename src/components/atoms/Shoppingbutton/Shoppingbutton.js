import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

import IconRow from '../../atoms/Iconrow'

/// TODO: Define props for Button
const ShoppingButton = ({className}) => {

    if (className ==='orange') {

        return(
        <div className="ShoppingButton orange">
            <Icon  className= 'fg-highlight' icon= {IconRow.arrow}/>
            <button className='bg-highlight'>
                <Icon className='fg-highlight-light-50' icon= {IconRow.shoppingcart} />
            </button>
        </div>
        )
    } else {

        return(

        <div className="ShoppingButton white">
            <Icon icon= {IconRow.arrow}/>
            <button>
                <Icon icon= {IconRow.shoppingcart} />
            </button>
        </div>
        )
    }
    
    
}

export default ShoppingButton