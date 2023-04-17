import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/// TODO: Define props for Header1
const PriceTag = ({price}) => {

    return(
        <div className="price bg-highlight Shadow"><h5>{price}</h5></div>
    )
}

export default PriceTag