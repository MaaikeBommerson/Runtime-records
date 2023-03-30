import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/Button'
import IconRow from '../../atoms/Iconrow'

/// TODO: Define props for Filter
const Filter = () => {

    return(
        <div className='Filter'>
            <Button text='icon' icon= {IconRow.filter} onCLick= {() => alert('Klik klik!')}/>
            <Button text='icon' icon= {IconRow.save} onClick= {() => alert('Klik klik!')}/>
        </div>
    )

}

export default Filter