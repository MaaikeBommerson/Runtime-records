import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Producttile from '../../molecules/Producttile'

/// TODO: Define props for Productsection
const Productsection = () => {

    return(
       <section className='Productsection'>
            <Producttile />
            <Producttile />
            <Producttile />
            <Producttile />

            <div className='cijfers'>1 2 3 4</div>
       </section> 
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

Productsection.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Productsection