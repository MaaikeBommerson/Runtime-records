import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Image from '../../atoms/Image'
import PriceTag from '../../atoms/Pricetag'
import Subtitle from '../../atoms/Subtitle'
import Header3 from '../../atoms/Header3'
import Header4 from '../../atoms/Header4'
import ShoppingButton from '../../atoms/Shoppingbutton'

/// TODO: Define props for Producttile
const Producttile = ({record}) => {

    return(
        <div className= 'Producttile'>
            <PriceTag price='22.50'/>
            <Image className="Image" src= "https://media.s-bol.com/X63ZDOlyx4zl/550x550.jpg"/>
            
            <Subtitle text='Indie, Math rock, Noise rock'/>
            <Header3 text='Spiderland'/>
            <div className='Shopitem'> 
                <Header4 text= {record.title} />
                <ShoppingButton className='orange' data={record}/>
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

Producttile.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Producttile