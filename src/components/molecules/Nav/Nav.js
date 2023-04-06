import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Logo from '../../atoms/Logo'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button'

import Menubutton from '../../atoms/Menubutton/'

import IconRow from '../../atoms/Iconrow'

/// TODO: Define props for Nav
const Nav = () => {

    return(
        <nav>
            <Logo color="black"/>
            <div className='Navbar'>
                <Button text='icon' onClick= {() => alert('Klik klik!')} icon= {IconRow.shoppingcart}/>
                <Menubutton />
            </div>
       </nav>
    )

}

export default Nav