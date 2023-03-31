import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Header3 from '../../atoms/Header3'
import Icon from '../../atoms/Icon'
import Link from '../../atoms/Link'
import IconRow from '../../atoms/Iconrow'


/// TODO: Define props for Footerblock
const Footerblock = () => {

    return(
        <div className='Footerblock'>
            <Header3 text='runtime records'/>
            <div className='linkblock'>
                <Link link='maillink' href='www.google.com'/>
            </div>
            <div className='linkblock'>
                <Link link='Website' href='www.google.com'/>
            </div>
            <div className='linkblock'>
                <Link link='Facebook' href='www.google.com'/>
            </div>
            <div className='linkblock'>
                <Link link='twitter' href='www.google.com'/>
            </div>
            <div className='linkblock'>
                <Link link='Instagram' href='www.google.com'/>
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

Footerblock.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Footerblock