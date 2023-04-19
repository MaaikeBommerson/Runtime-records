import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Producttile from '../../molecules/Producttile'

/// TODO: Define props for Suggested
const Suggested = ({data}) => {

    return(
        <div className='Suggested'>
            {data.map((record, index)=> {
                //hier moet een while loop in toegevoegd 
                //worden zodat hij bij de 4 producten stopt
                    return(
                        <Producttile record={record} key={index}/>
                    )
                })
                }
        </div>
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

Suggested.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Suggested