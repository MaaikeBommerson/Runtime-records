import { useState, useEffect, useContext } from 'react'
import { filterContext } from '../../../contexts'
import PropTypes from 'prop-types'

import Producttile from '../../molecules/Producttile'
import Filterbar from '../Filterbar/Filterbar'

/// TODO: Define props for Productsection
const Productsection = ({data}) => {

    const ctx = useContext(filterContext)

    //uitzoeken hoe ik map door filterCategory of zo
    return(
       <section className='Productsection'>
            <div className='Products'>
                {/* {ctx.filtered.map((record, index)=> {
                    return(
                        <Producttile record={record} key={index}/>
                    )
                })
                } */}
                { ctx.filtered.filter(record => {
                if (ctx.searchInput === '') {
                return record
                } else if (record.band.toLowerCase().includes(ctx.searchInput.toLowerCase())) {
                    return record
            }
            }).map((record, index)=> {
                    return(
                        <Producttile record={record} key={index}/>
                    )
                })
            }
             
            </div>

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