import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Header1 from '../../atoms/Header1'

import Logo from '../../atoms/Logo'
import Icon from '../../atoms/Icon'
import IconRow from '../../atoms/Iconrow'
import Button from '../../atoms/Button'

/// TODO: Define props for Menu

const Menu = () => {

    return(
        <div className='Menu'>
            <nav className='MenuNav'>
            <Logo color='black'/>
            <div className='Navbar'>
                <Button text='icon' onClick= {() => alert('Klik klik!')} icon= {IconRow.shoppingcart}/>
                <Icon text='icon' icon={IconRow.close}/>
            </div>
            </nav>
            <div className='menuitems'>
                <Header1 text='shop'/>
                <Header1 text='Account'/>
                <Header1 text='Info'/>
                <Header1 text='Contact'/>
            </div>
        </div>
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