import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './resources/styles/main.css'

import Home from './components/pages/Home'
import Detail from './components/pages/Detail'
import Shoppingcart from './components/pages/Shoppingcart'
import Navigation from "./components/organisms/Navigation"

import ShoppingCartContext from './contexts'


const App = () => {

  const [shoppingCartContent, setShoppingCartContent]= useState([])
  
  const records = [
    {id: 1, title: 'Slint'},
    {id: 2, title: 'Linkin park'},
    {id: 3, title: 'Rammstein'}
  ]

  const addToShoppingCart = (record) => {
    setShoppingCartContent([...shoppingCartContent, record])
  }

  return (
    
    <ShoppingCartContext.Provider value={{ shoppingCartContent, addToShoppingCart}}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home data={records}/>} />
          <Route path="/detail/:id" element={<Detail  data={records} />} />
          <Route path="/shoppingcart" element={<Shoppingcart data={records}/>} />
          <Route path="/contact" element={<Detail/>} />
        </Route>
      </Routes>
    </BrowserRouter >

    </ShoppingCartContext.Provider>

  )
}

export default App;
