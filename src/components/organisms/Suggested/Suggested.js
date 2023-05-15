import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Producttile from '../../molecules/Producttile'

/// TODO: Define props for Suggested
const Suggested = ({data, category}) => {


    const c = data.filter( record => record.category === category)
                
    c.sort(() => Math.random() - 0.5)
    
   

    // Hij laat nu wel ook het huidige product zien, dit moet eigenlijk niet.

    console.log(c)
    return(
        <div className='Suggested'>
            {c.slice(0,4).map((record, index)=> {
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