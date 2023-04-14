import { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { useParams } from "react-router-dom"

import Details from '../../molecules/Details/Details'
import Suggested from '../../organisms/Suggested/Suggested'



/// TODO: Define props for Detail
const Detail = ({data}) => {

    const [currentRecord, setCurrentRecord]= useState({})
    const { id } = useParams()
    

    useEffect( () => {
       const result= data.filter(item => item.id === parseInt(id))
       setCurrentRecord(result[0])
    }, [id])

    return( 
        <>
        <Details />
          <h1 >{currentRecord && currentRecord.title}</h1>
        <Suggested />
        </>
    )

}

export default Detail