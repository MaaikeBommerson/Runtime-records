import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Image from '../../atoms/Image'
import PriceTag from '../../atoms/Pricetag'
import Subtitle from '../../atoms/Subtitle'
import Header3 from '../../atoms/Header3'
import Header4 from '../../atoms/Header4'
import ShoppingButton from '../../atoms/Shoppingbutton'

/// TODO: Define props for Producttile
const Producttile = () => {

    return(
        <div className= 'Producttile'>
            <Image className="Image" src= "https://as2.ftcdn.net/v2/jpg/01/13/79/75/1000_F_113797565_7b5L47LqnaZrd59swu0dtkhOFz4KYopV.jpg"/>
            <PriceTag price='22.50'/>
            <Subtitle text='Indie, Math rock, Noise rock'/>
            <Header3 text='Spiderland'/>
            <Header4 text='Slint'/>
            <ShoppingButton className='orange'/>
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