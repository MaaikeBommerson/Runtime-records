import PropTypes from 'prop-types'

/// TODO: Define props for Header1
const Input = ({type, placeholder}) => {

    return(
        <input className="Input" 
                type= {type} 
                placeholder= {placeholder}/>
    )
}

export default Input