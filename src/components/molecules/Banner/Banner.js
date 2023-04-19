import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

import ShoppingCartContext from '../../../contexts'

import Header1 from '../../atoms/Header1'
import Header2 from '../../atoms/Header2'
import Paragraph from '../../atoms/Paragraph'
import Subtitle from '../../atoms/Subtitle'
import ShoppingButton from '../../atoms/Shoppingbutton'
import Button from '../../atoms/Button'

import PriceTag from '../../atoms/Pricetag'
import Image from '../../atoms/Image'

/// TODO: Define props for Banner
const Banner = ({data}) => {

    const bannerRecord = data[2]

    return(
    <div className='Banner'>
        <div className='Infoblock'>
            <Header2 text= {bannerRecord.band}/>
            <Header1 text={bannerRecord.title}/>
            <Paragraph content='This blistering punk-rock debut from a 55-year-old 
                            veteran of the scene delivers urgent music for 
                            evergreen unease. These are weary, angry songs, 
                            crafted with an insatiable verve and an almost
                            triumphant fury.' />
            <Subtitle text= {bannerRecord.category}/>
            <div className='Buttonbar'>
                <ShoppingButton data= {bannerRecord}/>
                <Link to= {'/detail/' + bannerRecord.id}>
                <Button text='Read more'/>
                </Link>
            </div>
        </div>
        <div className='BannerLp'>
            <PriceTag price= {bannerRecord.price} />
            <Image className='Lp' src='https://media.s-bol.com/NPOyPV94QX2/1200x898.jpg'/>
        </div>
    </div>   
    )

}


export default Banner