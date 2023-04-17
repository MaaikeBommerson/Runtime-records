import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Image from '../../atoms/Image/Image'
import Header3 from '../../atoms/Header3/Header3'
import Header4 from '../../atoms/Header4/Header4'
import PriceTag from '../../atoms/Pricetag/Pricetag'
import Icon from '../../atoms/Icon/Icon'
import IconRow from '../../atoms/Iconrow/Iconrow'

/// TODO: Define props for Cartitem
const Cartitem = ({record}) => {

    return(
        <div className='Cartitem'>
            <div className='Iteminfo'>
                <Image className="Image" src= "https://media.s-bol.com/X63ZDOlyx4zl/550x550.jpg"/>
                <div className='Titles'>
                    <Header3 text='One More Light' />
                    <Header4 text= {record.title}/>
                </div>
            </div>
            <div className='options'>
            <PriceTag price='22.50'/>
            <Icon className='delete' icon= {IconRow.delete}/>
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