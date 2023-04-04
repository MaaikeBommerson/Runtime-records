import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Header1 from '../../atoms/Header1'
import Header2 from '../../atoms/Header2'
import Paragraph from '../../atoms/Paragraph'
import Subtitle from '../../atoms/Subtitle'

import Button from '../../atoms/Button/Button'
import ShoppingButton from '../../atoms/Shoppingbutton'

import PriceTag from '../../atoms/Pricetag'
import Image from '../../atoms/Image'

/// TODO: Define props for Details
const Details = () => {

    return(
        <div className='Details'>
            <div className='BannerLp'>
            <PriceTag price="22.50" />
            <Image className='Lp' src='https://media.s-bol.com/X63ZDOlyx4zl/550x550.jpg'/>
            </div>
            <div className='Infoblock'>
                <Header1 text='Book of Curses'/>
                <Header2 text= 'Adult life'/>
                <Subtitle text= 'post punk, indie, punk'/>

                <Paragraph content='This blistering punk-rock debut from a 55-year-old 
                            veteran of the scene delivers urgent music for 
                            evergreen unease. These are weary, angry songs, 
                            crafted with an insatiable verve and an almost
                            triumphant fury.' />

                <Paragraph content='This blistering punk-rock debut from a 55-year-old 
                            veteran of the scene delivers urgent music for 
                            evergreen unease.' />

                <div className='Buttonbar fg-highlight'>
                <h4 >Add to cart</h4>
                <ShoppingButton className='orange'/>
                </div>
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

Details.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Details