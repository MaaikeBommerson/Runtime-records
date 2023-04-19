import { useState, useEffect, useContext } from 'react'
import { Outlet, Link } from "react-router-dom"
import PropTypes from 'prop-types'

import Logo from '../../atoms/Logo'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button'
import Menubutton from '../../atoms/Menubutton/'
import IconRow from '../../atoms/Iconrow'

import ShoppingCartContext from '../../../contexts'

/// TODO: Define props for Nav
const Nav = () => {

    const [isActive, setIsActive] = useState(false)
    const ctx = useContext(ShoppingCartContext)

    const handleClick = () => {
      setIsActive(current => !current) }


    return(
        <nav>
            <Link to= '/'>
                <Logo color="black" active= {isActive}/>
            </Link>

            <div className='Navbar'>

                <div className='shopButton'>
                <Link to='/shoppingcart' >
                    <Button text='icon' icon= {IconRow.shoppingcart}/>
                    <h5 className='bg-highlight'>{ctx.shoppingCartContent.length}</h5>
                </Link>
                </div>
                <Menubutton type='menu-closed' Clickhandler= {handleClick}/>
            </div>
       </nav>
    )

}

export default Nav