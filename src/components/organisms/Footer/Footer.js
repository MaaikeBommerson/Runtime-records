import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Footerblock from '../../molecules/Footerblock/Footerblock'
import Socialblock from '../../molecules/Socialblock/Socialblock'

/// TODO: Define props for Footer
const Footer = (props) => {

    return(
        <footer>
            <Socialblock />
            <Footerblock />
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