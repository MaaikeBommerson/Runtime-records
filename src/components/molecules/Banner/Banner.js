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
        <div className='Infoblock'>
            <Header2 text= 'Adult life'/>
            <Header1 text='Book of Curses'/>
            <Paragraph content='This blistering punk-rock debut from a 55-year-old 
                            veteran of the scene delivers urgent music for 
                            evergreen unease. These are weary, angry songs, 
                            crafted with an insatiable verve and an almost
                            triumphant fury.' />
            <Subtitle text= 'post punk, indie, punk'/>
            <div className='Buttonbar'>
                <ShoppingButton/>
                <Button text='Read more'/>
            </div>
        </div>
        <div className='BannerLp'>
            <PriceTag price="22.50" />
            <Image className='Lp' src='https://media.s-bol.com/NPOyPV94QX2/1200x898.jpg'/>
        </div>
    </div>   
    )

}


export default Banner