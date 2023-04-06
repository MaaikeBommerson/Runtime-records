import { useState, useEffect, useContext} from 'react'

import Menu from '../../organisms/Menu/Menu'
import PropTypes from "prop-types"

/// TODO: Define props for Menuitem
const Menubutton = () => {

    const ShowMenu = () => {
        
    }

    return(
        <div className='Menubutton' 
             onClick= {() => alert('Nu moet eigenlijk het menu openen!')} 
            >

            <div className='Menudiv'>
                <div className='Smallbar'></div>
                <div className='Longerbar'></div>
                <div className='Smallbar'></div>
                <Menu />
            </div>
           
        </div>
    )
}


export default Menubutton