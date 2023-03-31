import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Footerblock from '../../molecules/Footerblock/Footerblock'
import Socialblock from '../../molecules/Socialblock/Socialblock'
import Logo from '../../atoms/Logo'

/// TODO: Define props for Footer
const Footer = (props) => {

    return(
        <footer>
            <div className='footertext'>
                <Socialblock />
                <Footerblock />
            </div>
            <Logo color='orange'/>
        </footer>
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

Footer.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Footer