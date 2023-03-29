import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/// TODO: Define props for Header1
const Link = ({link, href}) => {

    return(
        <a href= {href} >{link}</a>
    )

}

export default Link