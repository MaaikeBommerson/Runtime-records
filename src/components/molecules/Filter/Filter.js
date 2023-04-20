import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button'
import IconRow from '../../atoms/Iconrow'

import Producttile from '../Producttile/Producttile'

/// TODO: Define props for Filter
const Filter = ({data}) => {

    //filter werkt! nu nog ongedaan maken...
    const [filtered, setFiltered] = useState(data)
    const FilterCategory =  (recordCategory) => {
      const n = data.filter( item => item.category === recordCategory)
      setFiltered(n)
    }
    const ResetFilter = () => {
        setFiltered(data)
    }

    return(
        <>
        <div className='Filter'>
            <Button text='icon' icon= {IconRow.filter} onClick= {() => ResetFilter}/>
            <div className='dropdown'>
                <ul>
                    <li onClick= {() => ResetFilter()}>Geen filter</li>
                    <li onClick= {() => FilterCategory('Heavy metal')}>Heavy metal</li>
                    <li onClick= {() => FilterCategory('Rock')}>Rock</li>
                    <li onClick= {() => FilterCategory('Heavy metal')}>Niet bestaand</li>
                    <li className= 'last' onClick= {() => FilterCategory('Heavy metal')}>Niet bestaand</li>
                </ul>
            </div>
            <Button text='icon' icon= {IconRow.sort} onClick= {() => alert('Klik klik!')}/>
        </div>
        {/* {filtered.map((record, index)=> {
                    return(
                        <Producttile record={record} key={index}/>
                    )
                })
                } */}
        </>
    )

}

export default Filter