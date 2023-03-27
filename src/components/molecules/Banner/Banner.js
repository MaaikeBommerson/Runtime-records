import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Header1 from '../../atoms/Header1'
import Header2 from '../../atoms/Header2'
import Paragraph from '../../atoms/Paragraph'
import Subtitle from '../../atoms/Subtitle'
import ShoppingButton from '../../atoms/Shoppingbutton'
import Button from '../../atoms/Button'

import PriceTag from '../../atoms/Pricetag'
import Image from '../../atoms/Image'

/// TODO: Define props for Banner
const Banner = () => {

    return(
    <div className='Banner'>
        <div>
            <Header2 text= 'Adult life'/>
            <Header1 text='Book of Curses'/>
            <Paragraph content='This blistering punk-rock debut from a 55-year-old 
                            veteran of the scene delivers urgent music for 
                            evergreen unease. These are weary, angry songs, 
                            crafted with an insatiable verve and an almost
                            triumphant fury.' />
            <Subtitle text= 'post punk, indie, punk'/>
            <div>
                <ShoppingButton/>
                <Button text='Read more'/>
            </div>
        </div>
        <div>
            <PriceTag price="22.50" />
            <Image className='Cover' src='https://media.s-bol.com/K8rGKporZlRl/550x543.jpg'/>
            <Image  className='Lp' src= 'https://img.kytary.com/eshop_nl/stredni_v4x/na/636706319220900000/a3be06e1/52854114/serato-performance-vinyl-bk.jpg' />
        </div>
    </div>   
    )

}


export default Banner