import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Header3 from '../../atoms/Header3'
import Icon from '../../atoms/Icon'
import Link from '../../atoms/Link'
import IconRow from '../../atoms/Iconrow'



const Socialblock = () => {

    return(
        <div className='Socialblock'>
            <Header3 text='runtime records'/>
            <div className='sociallink'>
                <Icon className='Icon' icon= {IconRow.mail}/>
                <Link link='maillink' href='www.google.com'/>
            </div>
            <div className='sociallink'>
                <Icon className='Icon' icon= {IconRow.website}/>
                <Link link='Website' href='www.google.com'/>
            </div>
            <div className='sociallink'>
                <Icon className='Icon' icon= {IconRow.facebook}/>
                <Link link='Facebook' href='www.google.com'/>
            </div>
            <div className='sociallink'>
                <Icon className='Icon' icon= {IconRow.twitter}/>
                <Link link='twitter' href='www.google.com'/>
            </div>
            <div className='sociallink'>
                <Icon className='Icon' icon= {IconRow.instagram}/>
                <Link link='Instagram' href='www.google.com'/>
            </div>
        </div>
    )

}



export default Socialblock