import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import SearchBar from '../../molecules/Searchbar/Searchbar'
import Filter from '../../molecules/Filter'

/// TODO: Define props for Filterbar
const Filterbar = ({data}) => {

    return(
        <div className='Filterbar'>
            <SearchBar data={data}/>
            <Filter data= {data}/>
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

Filterbar.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
    size: PropTypes.oneOf(sizes),
}

export default Filterbar