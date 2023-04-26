import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './resources/styles/main.css'

import Home from './components/pages/Home'
import Detail from './components/pages/Detail'
import Shoppingcart from './components/pages/Shoppingcart'
import Navigation from "./components/organisms/Navigation"

import ShoppingCartContext from './contexts'
import { filterContext } from "./contexts"


const App = () => {

  
  const records = [
    {id: 1, title: 'covername', band: 'Slint', category: 'Rock', price: 17.50},
    {id: 2, title: 'One more light', band: 'Linkin park', category: 'Rock', price: 20.00},
    {id: 3, title: 'Deutchland', band: 'Rammstein', category: 'Heavy metal', price: 22.50},
    {id: 4, title: 'AfterLife', band: 'FFDP', category: 'Heavy metal', price: 20.50}
  ]

  // Shoppingcart
  const [shoppingCartContent, setShoppingCartContent]= useState([])

  const addToShoppingCart = (record) => {
    setShoppingCartContent([...shoppingCartContent, record])
  }

  const [shoppingcart, setShoppingCart] = useState(records)
  const removeFromCart =  (recordId) => {

    const n = shoppingCartContent.filter( item => item.id !== recordId)
    setShoppingCartContent(n)
  }

  // Filteren
  const [filtered, setFiltered] = useState(records)
    const FilterCategory =  (recordCategory) => {
      const n = records.filter( item => item.category === recordCategory)
      setFiltered(n)
    }
    const ResetFilter = () => {
        setFiltered(records)
    }

    // Sorteren
    // waarom werkt dit niet?
    const [sorted, setSorted] = useState(filtered)
      const Sortitems =  () => {
        const s = [...filtered].sort((a, b) => a.price - b.price)
          setSorted(s) 
      }
      const ResetSort = () => {
        setSorted(filtered)
      }

      // ((a, b) => a.price > b.price ? 1 : -1)

  return (
    
    <ShoppingCartContext.Provider value={{ shoppingCartContent, addToShoppingCart, removeFromCart}}>
    <filterContext.Provider value={{ filtered, FilterCategory, ResetFilter, sorted, Sortitems, ResetSort}}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>

          <Route index element={<Home data={records}/>} />

          <Route path="/detail/:id" element={<Detail  data={records} />} />
          <Route path="/shoppingcart" element={<Shoppingcart data={records}/>} />
          <Route path="/contact" element={<Detail data={records}/>} />
        </Route>
      </Routes>
    </BrowserRouter >
    </filterContext.Provider>
    </ShoppingCartContext.Provider>

  )
}

export default App;
