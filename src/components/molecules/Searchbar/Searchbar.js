import { useState, useContext } from 'react'
import PropTypes from 'prop-types'

import Input from '../../atoms/Input'
import SearchButton from '../../atoms/Searchbutton/Searchbutton'
import Producttile from '../Producttile/Producttile'
import { filterContext } from '../../../contexts'

/// TODO: Define props for Searchbar
const SearchBar = ({data}) => {

    const ctx = useContext(filterContext)
    // const [searchInput, setSearchInput] = useState('')
     
    return(
        <div>
        <div className='Searchbar'>
            <Input onChange = {ctx.handleChange} value= {ctx.searchInput} />
            <SearchButton />
        </div>
        {/* <div>
            { data.filter(record => {
                if (searchInput === '') {
                return record
                } else if (record.band.toLowerCase().includes(searchInput.toLowerCase())) {
                    return record
            }
            }).map((record, index)=> {
                    return(
                        <Producttile record={record} key={index}/>
                    )
                })
            }
        </div> */}
        </div>
    )

}


export default SearchBar