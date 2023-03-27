import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Logo from '../../atoms/Logo'
import ShoppingButton from '../../atoms/Shoppingbutton'
import Icon from '../../atoms/Icon'

import IconRow from '../../atoms/Iconrow'

/// TODO: Define props for Nav
const Nav = () => {

    return(
        <nav>
            <Logo color="black"/>
            <div className="Navbar">
            <Icon icon= {IconRow.shoppingcart} />
            <Icon icon= {IconRow.menu} />
            </div>
       </nav>
    )

}

export default Nav