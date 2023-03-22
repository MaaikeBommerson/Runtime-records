import React from 'react'
import PropTypes from 'prop-types'
import DiscPayoff from '../../../resources/img/disc-payoff.svg'

/// TODO: Define props for Button
const SearchButton = () => {

    return(
        <button className="Searchbutton">
            <img src={DiscPayoff}/>
        </button>
    )
}

export default SearchButton

// icon button maken of search en shop 
// apart houden omdat de werking anders is. wss tweede handiger