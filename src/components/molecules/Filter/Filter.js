import { useState, useEffect, useContext } from 'react'
import { filterContext } from '../../../contexts'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button'
import IconRow from '../../atoms/Iconrow'

import Producttile from '../Producttile/Producttile'

/// TODO: Define props for Filter
const Filter = ({data}) => {

    // filter openen en sluiten
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(current => !current) 

      }

    const ctx = useContext(filterContext)

    //dit doet niet wat het moet doen, filtert op title nu
    // const [sorted, setSorted] = useState(data)
    // const Sortitems =  (sortBy) => {
    //   const s = data.price.sort((a, b) => a-b)
    //   setSorted(s)
    // }
    // const ResetSort = () => {
    //     setSorted(data)
    // }

    // console.log(sorted)

    return(
        <>
        <div className='Filter'>
            <div className= 'buttons'>
            <Button text='icon' icon= {IconRow.filter} onClick= {() => handleClick()}/>
            <Button text='icon' icon= {IconRow.sort} onClick= {() => handleClick()}/>
            </div>
            <div className='dropdown'
                 style={{display: isActive ? 'block' : 'none'}}>
                <ul>
                    <li onClick= {() => ctx.ResetFilter()}> Geen filter</li>
                    <li onClick= {() => ctx.FilterCategory('Heavy metal')}>Heavy metal</li>
                    <li onClick= {() => ctx.FilterCategory('Rock')}>Rock</li>
                    <li onClick= {() => ctx.FilterCategory('Heavy metal')}>Niet bestaand</li>
                    <li className= 'last' onClick= {() => ctx.FilterCategory('Heavy metal')}>Niet bestaand</li>
                </ul>
            </div>
        </div>
        </>
    )

}

export default Filter