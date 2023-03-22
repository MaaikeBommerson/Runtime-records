import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/// TODO: Define props for Header2
const Paragraph = ({content}) => {

    return(
        <p>{content}</p>
    )

}

/// TODO: add more utility classes if needed!

/// TODO: Adjust and extend!


const content = "Lorem ipsum verhaal waar ik niks van begrijp waar het over gaat en blabla bla"

Paragraph.propTypes = {
    content: content
}

export default Paragraph