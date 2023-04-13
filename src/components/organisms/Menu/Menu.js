import { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom"

import PropTypes from 'prop-types'

import Header1 from '../../atoms/Header1'

import Logo from '../../atoms/Logo'
import Icon from '../../atoms/Icon'

import IconRow from '../../atoms/Iconrow'
import Button from '../../atoms/Button'


/// TODO: Define props for Menu

const Menu = ({style}) => {

    return(
        <>
        <div className='Menu' style={style}>
            <div className='menuitems'>
                <Link to='/Home'><Header1 text='Shop'/></Link>
                <Link to='/Shoppingcart'><Header1 text='Account'/></Link>
                <Link to='/Detail'><Header1 text='Info'/></Link>
                <Link to='/Detail'><Header1 text='Contact'/></Link>
            </div>
        </div>
      
        </>
    )

}

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!
// const sizes = [
//     "small",
//     "medium",
//     "large"
// ]

// const exceptionClasses = [
//     "button",
//     "regular"
// ]

// Menu.propTypes = {
//     testID: PropTypes.string,
//     type: PropTypes.oneOf(exceptionClasses),
//     size: PropTypes.oneOf(sizes),
// }

export default Menu