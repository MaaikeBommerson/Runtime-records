import { useState, useEffect } from 'react'
import { Outlet, Link } from "react-router-dom"
import PropTypes from 'prop-types'

import Logo from '../../atoms/Logo'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button'

import Menubutton from '../../atoms/Menubutton/'

import IconRow from '../../atoms/Iconrow'

/// TODO: Define props for Nav
const Nav = () => {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
      setIsActive(current => !current) }

    return(
        <nav>
            <Logo color="black" active= {isActive}/>
            <div className='Navbar'>
                <Link to='/Shoppingcart' >
                    <Button text='icon' icon= {IconRow.shoppingcart}/>
                </Link>
                <Menubutton type='menu-closed' Clickhandler= {handleClick}/>
            </div>
       </nav>
    )

}

export default Nav