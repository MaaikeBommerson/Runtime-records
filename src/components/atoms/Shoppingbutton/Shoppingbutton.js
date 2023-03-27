import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

import IconRow from '../../atoms/Iconrow'

/// TODO: Define props for Button
const ShoppingButton = () => {

    
    return(
        <div className="ShoppingButton">
            <Icon icon= {IconRow.arrow}/>
            <button >
                <Icon icon= {IconRow.shoppingcart} />
            </button>
        </div>
    )
}

export default ShoppingButton