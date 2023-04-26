import { useState, useContext } from 'react'
import { filterContext } from '../../../contexts'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button'
import IconRow from '../../atoms/Iconrow'

import Producttile from '../Producttile/Producttile'

/// TODO: Define props for Filter
const Filter = ({data}) => {

    // filter openen en sluiten
    const [isActiveF, setIsActiveF] = useState(false)
    const [isActiveS, setIsActiveS] = useState(false)
    
    const filterClick = () => {
        setIsActiveF(current => !current) 

        if (isActiveS === true) {
            setIsActiveS(current => !current) 
        }
      }

    const ctx = useContext(filterContext)

    //sorteren
    const sortClick = () => {
        setIsActiveS(current => !current) 

        if (isActiveF === true) {
            setIsActiveF(current => !current) 
        }
    }

    console.log(isActiveF, isActiveS)

    return(
        <>
        <div className='Filter'>
            <div className= 'buttons'>
            <Button text='icon' icon= {IconRow.filter} onClick= {() => filterClick()}/>
            <Button text='icon' icon= {IconRow.sort} onClick= {() => sortClick()}
                    style={{display: isActiveS && !isActiveF ? 'none' : 'block'}}/>
            <Button text ='icon' icon= {IconRow.close} onClick= {() => sortClick()}
                    style={{display: isActiveS && !isActiveF ? 'block' : 'none'}} />
            </div>
            <div className='dropdown'
                 style={{display: isActiveF && !isActiveS ? 'block' : 'none'}}>
                <ul>
                    <li onClick= {() => ctx.ResetFilter()}> Geen filter</li>
                    <li onClick= {() => ctx.FilterCategory('Heavy metal')}>Heavy metal</li>
                    <li onClick= {() => ctx.FilterCategory('Rock')}>Rock</li>
                    <li onClick= {() => ctx.FilterCategory('Heavy metal')}>Niet bestaand</li>
                    <li className= 'last' onClick= {() => ctx.FilterCategory('Heavy metal')}>Niet bestaand</li>
                </ul>
            </div>
            <div className='dropdown'
                 style={{display: isActiveS && !isActiveF ? 'block' : 'none'}}>
                <ul>
                    <li onClick= {() => ctx.ResetSort()}> Geen sortering</li>
                    <li className= 'last' onClick= {() => ctx.Sortitems()}>Prijs</li>
                </ul>
            </div>
        </div>
        </>
    )

}

export default Filter