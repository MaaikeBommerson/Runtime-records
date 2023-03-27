import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Input from '../../atoms/Input'
import SearchButton from '../../atoms/Searchbutton/Searchbutton'

/// TODO: Define props for Searchbar
const SearchBar = () => {

    return(
        <div className='Searchbar'>
            <Input type= 'text' placeholder= 'Search' />
            <SearchButton />
        </div>
    )

}


export default SearchBar