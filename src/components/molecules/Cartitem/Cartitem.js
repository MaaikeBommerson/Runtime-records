import { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

import Image from '../../atoms/Image/Image'
import Header3 from '../../atoms/Header3/Header3'
import Header4 from '../../atoms/Header4/Header4'
import PriceTag from '../../atoms/Pricetag/Pricetag'
import Icon from '../../atoms/Icon/Icon'
import IconRow from '../../atoms/Iconrow/Iconrow'

import ShoppingCartContext from '../../../contexts'

/// TODO: Define props for Cartitem
const Cartitem = ({record}) => {

    const ctx = useContext(ShoppingCartContext)

    return(
        <div className='Cartitem'>
            <div className='Iteminfo'>
                <Image className="Image" src= {record.img}/>
                <div className='Titles'>
                    <Header3 text={record.title} />
                    <Header4 text= {record.artist}/>
                </div>
            </div>
            <div className='options'>
            <PriceTag price={record.price}/>
            <Icon className='delete' icon= {IconRow.delete}
                  onClick= {() => ctx.removeFromCart( record.id)}/>
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

Cartitem.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Cartitem