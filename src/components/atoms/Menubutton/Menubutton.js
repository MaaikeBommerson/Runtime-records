import { useState, useEffect, useContext} from 'react'

import { ShowMenu } from '../../../contexts'


import Menu from '../../organisms/Menu/Menu'
import Icon from '../Icon/Icon'
import IconRow from '../Iconrow/Iconrow'
import PropTypes from "prop-types"

/// TODO: Define props for Menuitem
const Menubutton = ({Clickhandler}) => {

    const [isActive, setIsActive] = useState(false)

    const handleClick = () => {
      setIsActive(current => !current) 
        Clickhandler ()
    }


        return(
        <div className='Menubutton' 
                onClick= {() => handleClick()} >

            <div className='Menudiv' 
                 style={{display: isActive ? 'none' : 'block'}}>
                <div className='Smallbar'></div>
                <div className='Longerbar'></div>
                <div className='Smallbar'></div>
                
            </div>
            <Icon text='icon' icon= {IconRow.close} className= 'close' 
                      style={{display: isActive ? 'block' : 'none'}} />
            <Menu style={{display: isActive ? 'block' : 'none'}}/>
        </div>
  
        )

    // if (type === 'menu-closed') { 

    //     return (
    //     <div className='Menubutton' 
    //          onClick= {handleClick} >

    //         <div className='Menudiv'>
    //             <div className='Smallbar'></div>
    //             <div className='Longerbar'></div>
    //             <div className='Smallbar'></div>
    //             <Menu style={{display: 'none'}}/>
    //         </div>
    //     </div>
    //     )
    // } else {

    //     <div className='Menubutton' 
    //          onClick= {handleClick} >

    //         <div className='Menudiv'>
    //             <Icon icon={IconRow.close} />
    //             <Menu style={{display: 'block'}}/>
    //         </div>
    //     </div>
    // }
}

export default Menubutton