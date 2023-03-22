import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/// TODO: Define props for Header1
const Image = ({className, src}) => {

    return(
        <img className={className} src={src}/>
    )

}

export default Image