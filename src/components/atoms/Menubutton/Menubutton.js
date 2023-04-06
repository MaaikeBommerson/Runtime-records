import { useState, useEffect, useContext } from 'react'

import Menu from '../../organisms/Menu/Menu'
import PropTypes from "prop-types"
import {MenuContext} from "../../../contexts"

/// TODO: Define props for Menuitem
const Menubutton = (props) => {
    const { isActive, setIsActive } = useContext(MenuContext)

    return(
        <div className='Menubutton' 
        data-testid={props.testID}
        data-object-type={props.type ?? ""}
        

                onClick={function () {
                props.type === "menu-open" ? setIsActive(false) : setIsActive(true);
                }}>

            <div className='Menudiv'>
                <div className='Smallbar'></div>
                <div className='Longerbar'></div>
                <div className='Smallbar'></div>
            </div>
           <Menu />
        </div>
    )
}
const exceptionClasses = ["menu-open", "menu-closed"]

Menubutton.propTypes = {
    testID: PropTypes.string,
    type: PropTypes.oneOf(exceptionClasses),
  }

export default Menubutton