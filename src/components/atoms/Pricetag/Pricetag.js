import { useState, useEffect } from 'react'
import { NumericFormat} from 'react-number-format'
import PropTypes from 'prop-types'

/// TODO: Define props for Header1
const PriceTag = ({price}) => {

    const formatNumber = (price) => {
        const formatter = new Intl.NumberFormat('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
        const s = formatter.format(price).toString().split('.')
        return([s[0],s[1]])
      }
    
      const [bedrag, centen] = formatNumber(price)

    return(
        <div className="price bg-highlight Shadow">
            <h5>
            {bedrag}
            <sup>.{centen}</sup>
            </h5>
        </div>
    )
}

export default PriceTag