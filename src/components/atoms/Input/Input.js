import PropTypes from 'prop-types'
import { useContext } from 'react'
import { filterContext } from '../../../contexts'

/// TODO: Define props for Header1
const Input = ({onChange, value}) => {

    return(
        <input className="Input" 
                type= 'text' 
                placeholder= 'Search'
                onChange = {onChange}
                value = {value}/>
    )
}

export default Input