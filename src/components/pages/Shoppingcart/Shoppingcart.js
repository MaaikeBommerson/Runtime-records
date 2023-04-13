import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Header1 from '../../atoms/Header1/Header1'
import Cartitem from '../../molecules/Cartitem'
import Total from '../../molecules/Total'

import Button from '../../atoms/Button'

/// TODO: Define props for Shoppingcart



const Shoppingcart = () => {


    // wil een functie maken dat wanneer er op shoppingbutton wordt geklikt
    // er een getal bij optelt in het lijstje.

        const [count, setCount] = useState(0)

        const addItem = () => {
            setCount(count + 1)
    
        }
    
    return (
        <>
        <Button text='klik klik' onClick= {addItem} />
        <h1>{count}</h1>
        </>
    )

    // return(
    //     <div className='Shoppingcart'>
    //         <Header1 text='Shopping cart'/>
         
    //         <Cartitem />
    //         <Cartitem />
    //         <Cartitem />
    //         <Total />
            
    //     </div>
    // )

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

Shoppingcart.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Shoppingcart