import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/// TODO: Define props for Header1
const PriceTag = ({price}) => {

    return(
        <div className="price">{price}</div>
    )
}

export default PriceTag