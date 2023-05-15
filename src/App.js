import { useState, useEffect } from "react"
import useDatabase from './hooks/useDatabase'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './resources/styles/main.css'

import Home from './components/pages/Home'
import Detail from './components/pages/Detail'
import Shoppingcart from './components/pages/Shoppingcart'
import Navigation from "./components/organisms/Navigation"

import ShoppingCartContext from './contexts'
import { filterContext } from "./contexts"

const App = () => {
  const [data, isLoaded] = useDatabase("records")
  const [filtered, setFiltered] = useState([])


  useEffect( () => {
    if(isLoaded) setFiltered(data)
  }, [data])
  
  const records = [
    {id: 1, title: 'covername', band: 'Slint', category: 'Rock', price: 17.50},
    {id: 2, title: 'One more light', band: 'Linkin park', category: 'Rock', price: 20.00},
    {id: 3, title: 'Rammstein', band: 'Rammstein', category: 'Heavy metal', price: 22.50},
    {id: 4, title: 'AfterLife', band: 'FFDP', category: 'Heavy metal', price: 20.50},
    {id: 5, title: 'N.A.T.I.O.N.', band: 'Bad wolves', category: 'Heavy metal', price: 23.50},
    {id: 6, title: 'Meteora', band: 'Linkin park', category: 'Rock', price: 18.00},
    {id: 7, title: 'Zeit', band: 'Rammstein', category: 'Heavy metal', price: 25.50},
    {id: 8, title: 'Thats the spirit', band: 'BMTH', category: 'Rock', price: 19.50}
  ]

  // Shoppingcart
  const [shoppingCartContent, setShoppingCartContent]= useState([])

  const addToShoppingCart = (record) => {
    setShoppingCartContent([...shoppingCartContent, record])
  }

  const [shoppingcart, setShoppingCart] = useState([])
  const removeFromCart =  (recordId) => {

    const n = shoppingCartContent.filter( item => item.id !== recordId)
    setShoppingCartContent(n)
  }

  // Filteren

    const FilterCategory =  (recordCategory) => {
      const n = data.filter( item => item.category === recordCategory)
      setFiltered(n)
    }
    const ResetFilter = () => {
        setFiltered(data)
    }

    // Sorteren
    // waarom werkt dit niet?
    // const [sorted, setSorted] = useState(filtered)
      const Sortitems =  () => {
        const s = [...filtered].sort((a, b) => a.price - b.price)
          setFiltered(s) 
      }
      const ResetSort = () => {
        setFiltered(data)
      }

      // Searchbar
      const [searchInput, setSearchInput] = useState('')
      const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      }

  return (
    
    <ShoppingCartContext.Provider value={{ shoppingCartContent, addToShoppingCart, removeFromCart}}>
    <filterContext.Provider value={{ filtered, FilterCategory, ResetFilter, Sortitems, ResetSort, searchInput, handleChange}}>

    <BrowserRouter>
      <Routes>
        { isLoaded &&
        <Route path="/" element={<Navigation />}>

          <Route index element={<Home data={data}/>} />

          <Route path="/detail/:id" element={<Detail  data={data} />} />
          <Route path="/shoppingcart" element={<Shoppingcart data={data}/>} />
          <Route path="/contact" element={<Detail data={data}/>} />
        </Route>
      }
      </Routes>
    </BrowserRouter >
    </filterContext.Provider>
    </ShoppingCartContext.Provider>


 )
}

export default App;
