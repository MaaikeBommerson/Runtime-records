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

    const bannerRecord = data[Math.floor(Math.random()* data.length)]

    return(
    <div className='Banner'>
        <div className='Infoblock'>
            <Header2 text= {bannerRecord.artist}/>
            <Header1 text={bannerRecord.title}/>
            <Paragraph content={bannerRecord.info} />
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
            <Image className='Lp' src= {bannerRecord.img}/>
        </div>
    </div>   
    )

}


export default Banner