import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button'
import IconRow from '../../atoms/Iconrow'

import Producttile from '../Producttile/Producttile'

/// TODO: Define props for Filter
const Filter = ({data}) => {

    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(current => !current) 
        }
      

    //filter werkt! nu nog ongedaan maken...
    const [filtered, setFiltered] = useState(data)
    const FilterCategory =  (recordCategory) => {
      const n = data.filter( item => item.category === recordCategory)
      setFiltered(n)

    }

    console.log(filtered)

    return(
        <>
        <div className='Filter'>
            <Button text='icon' icon= {IconRow.filter} onClick= {() => FilterCategory('Heavy metal')}/>
            <Button text='icon' icon= {IconRow.sort} onClick= {() => alert('Klik klik!')}/>
        </div>
        {filtered.map((record, index)=> {
                    return(
                        <Producttile record={record} key={index}/>
                    )
                })
                }
        </>
    )

}

export default Filter