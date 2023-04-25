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
    const filterClick = () => {
        setIsActiveF(current => !current) 

      }

    const ctx = useContext(filterContext)

    //sorteren

    const [isActiveS, setIsActiveS] = useState(false)
    // const [sorted, setSorted] = useState(data)

    const sortClick = () => {
        setIsActiveS(current => !current) 
    }

    // if (isActiveS === false) {
    //     const s = [...data].sort((a, b) => a.price > b.price ? 1 : -1)
    //     setSorted(s)

    // } else {
    //     setSorted(data)
        
    // }
    // }
    const [sorted, setSorted] = useState(data)
    const Sortitems =  () => {
      const s = [...data].sort((a, b) => a.price > b.price ? 1 : -1)
      setSorted(s)
    }

    const ResetSort = () => {
        setSorted(data)
    }

    console.log(sorted)

    return(
        <>
        <div className='Filter'>
            <div className= 'buttons'>
            <Button text='icon' icon= {IconRow.filter} onClick= {() => filterClick()}/>
            <Button text='icon' icon= {IconRow.sort} onClick= {() => sortClick()}
                    style={{display: isActiveS ? 'none' : 'block'}}/>
            <Button text ='icon' icon= {IconRow.close} onClick= {() => sortClick()}
                    style={{display: isActiveS ? 'block' : 'none'}} />
            </div>
            <div className='dropdown'
                 style={{display: isActiveF ? 'block' : 'none'}}>
                <ul>
                    <li onClick= {() => ctx.ResetFilter()}> Geen filter</li>
                    <li onClick= {() => ctx.FilterCategory('Heavy metal')}>Heavy metal</li>
                    <li onClick= {() => ctx.FilterCategory('Rock')}>Rock</li>
                    <li onClick= {() => ctx.FilterCategory('Heavy metal')}>Niet bestaand</li>
                    <li className= 'last' onClick= {() => ctx.FilterCategory('Heavy metal')}>Niet bestaand</li>
                </ul>
            </div>
            <div className='dropdown'
                 style={{display: isActiveS ? 'block' : 'none'}}>
                <ul>
                    <li onClick= {() => ResetSort()}> Geen sortering</li>
                    <li onClick= {() => Sortitems('price')}>Prijs</li>
                    <li onClick= {() => Sortitems('band')}>Band</li>
                    <li className= 'last' onClick= {() => Sortitems('title')}>Album</li>
                </ul>
            </div>
        </div>
        </>
    )

}

export default Filter