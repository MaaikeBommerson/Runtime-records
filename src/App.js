
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './resources/styles/main.css'

import Nav from './components/molecules/Nav'
import Footer from './components/organisms/Footer'
import Menu from './components/organisms/Menu'

import Home from './components/pages/Home'
import Detail from './components/pages/Detail'
import Shoppingcart from './components/pages/Shoppingcart'

import Path from "./views/Path"
// import Home from "./views/Home"
// import Detail from "./views/Detail"


const App = () => {
  
  return (
    <>
    {/* <Nav />
    <Footer /> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="/Account" element={<Home />} />
          <Route path="/Info" element={<Home />} />
          <Route path="/contact" element={<Detail />} />
          <Route path="/data/:slug/:id" element={ <Path /> } />
    
        </Route>
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App;
