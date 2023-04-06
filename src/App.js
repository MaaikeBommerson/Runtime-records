import './resources/styles/main.css'

import Nav from './components/molecules/Nav'
import Footer from './components/organisms/Footer'
import Menu from './components/organisms/Menu'

import Home from './components/pages/Home'
import Detail from './components/pages/Detail'
import Shoppingcart from './components/pages/Shoppingcart'


const App = () => {
  
  return (
    <>
    <Nav />
    {/* <Menu /> */}
    <Home />
    <Footer />
    </>
  )
}

export default App;
