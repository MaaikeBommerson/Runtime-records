import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Outlet, Link } from "react-router-dom"

import Nav from '../../molecules/Nav'
import Footer from '../Footer'

/// TODO: Define props for Navigation
const Navigation = () => {

    return(
       <div className='Navigation'>
        <Nav />
        <Outlet/>
        <Footer />
       </div>
    )

}


export default Navigation