import { useContext } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon'

import IconRow from '../../atoms/Iconrow'

import ShoppingCartContext from '../../../contexts'

/// TODO: Define props for Button
const ShoppingButton = ({className,data}) => {

    const ctx = useContext(ShoppingCartContext)

    if (className ==='orange') {

        return(
        <div className="ShoppingButton orange"
             onClick={() => ctx.addToShoppingCart(data)}>
            <Icon  className= 'Arrow fg-highlight' icon= {IconRow.arrow}/>
            <button className='bg-highlight Shadow'>
                <Icon className='fg-highlight-light-50' icon= {IconRow.shoppingcart} />
            </button>
        </div>
        )
    } else {

        return(
        <div className="ShoppingButton white">
            <Icon icon= {IconRow.arrow} className='Arrow'/>
            <button className='Shadow'
            onClick={() => ctx.addToShoppingCart( data)}
            >
                <Icon icon= {IconRow.shoppingcart} />
            </button>
        </div>
        )
    }
    

}

export default ShoppingButton