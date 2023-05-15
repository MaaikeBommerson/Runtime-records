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
const Details = ({data}) => {


    return(
        <div className='Details'>
            <div className='BannerLp'>
            <PriceTag price= {data && data.price} />
            <Image className='Lp' src= {data.img}/>
            </div>
            <div className='Infoblock'>
                <Header1 text= {data && data.title}/>
                <Header2 text= {data && data.artist}/>
                <Subtitle text= {data && data.category}/>

                <Paragraph content= {data.info} />

                <Paragraph content= {data.info2} />

                <div className='Buttonbar fg-highlight'>
                <h4 >Add to cart</h4>
                <ShoppingButton className='orange' data= {data}/>
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