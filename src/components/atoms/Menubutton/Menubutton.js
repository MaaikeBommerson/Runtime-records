import { useState, useEffect, useContext} from 'react'

import Menu from '../../organisms/Menu/Menu'
import Icon from '../Icon/Icon'
import IconRow from '../Iconrow/Iconrow'
import PropTypes from "prop-types"

/// TODO: Define props for Menuitem
const Menubutton = ({type}) => {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(current => !current) }

        return(
        <div className='Menubutton' 
                onClick= {handleClick} >

            <div className='Menudiv'>
                <div className='Smallbar'></div>
                <div className='Longerbar'></div>
                <div className='Smallbar'></div>
                
                <Menu style={{display: isActive ? 'none' : 'block'}}/>
            </div>
        </div>

            
        )

    if (type === 'menu-closed') { 

        return (
        <div className='Menubutton' 
             onClick= {handleClick} >

            <div className='Menudiv'>
                <div className='Smallbar'></div>
                <div className='Longerbar'></div>
                <div className='Smallbar'></div>
                <Menu style={{display: 'none'}}/>
            </div>
        </div>
        )
    } else {

        <div className='Menubutton' 
             onClick= {handleClick} >

            <div className='Menudiv'>
                <Icon icon={IconRow.close} />
                <Menu style={{display: 'block'}}/>
            </div>
        </div>
    }
}

export default Menubutton