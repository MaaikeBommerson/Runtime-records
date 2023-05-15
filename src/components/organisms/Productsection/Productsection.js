import { useState, useEffect, useContext } from 'react'
import { filterContext } from '../../../contexts'
import PropTypes from 'prop-types'

import Producttile from '../../molecules/Producttile'
import Filterbar from '../Filterbar/Filterbar'
import Icon from '../../atoms/Icon/Icon'

/// TODO: Define props for Productsection
const Productsection = ({data}) => {

    const ctx = useContext(filterContext)
    const [page, setPage] = useState(0)

    const PageNumber = (recordNumber) => {
        setPage(recordNumber)
    }

    console.log(page)
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
                } else if (record.artist.toLowerCase().includes(ctx.searchInput.toLowerCase())) {
                    return record
            }
            }).slice(page, page+ 8).map((record, index)=> {
                    return(
                        <Producttile record={record} key={index}/>
                    )
                })
            }
             
            </div>
            <div className='Pages'>
                <div onClick = {() => PageNumber(0)}
                     className = {`Page ${ page === 0 ? 'active': '' }`}
                     >1</div>
                <div onClick = {() => PageNumber(8)}
                     className = {`Page ${ page === 8 ? 'active': '' }`}
                     >2</div>
                <div onClick = {() => PageNumber(16)}
                     className = {`Page ${ page === 16 ? 'active': '' }`}
                     >3</div>
            </div>
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