import { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import Input from '../../atoms/Input'
import SearchButton from '../../atoms/Searchbutton/Searchbutton'
import Producttile from '../Producttile/Producttile'
import { filterContext } from '../../../contexts'

/// TODO: Define props for Searchbar
const SearchBar = ({data}) => {

    const ctx = useContext(filterContext)
     
    return(
        <div className='Searchbar'>
            <Input onChange = {ctx.handleChange} value= {ctx.searchInput} />
            <SearchButton />
        </div>
    )

}


export default SearchBar