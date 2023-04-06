import './resources/styles/main.css'

import Navigation from './components/organisms/Navigation/Navigation'
import Footer from './components/organisms/Footer'
import Menu from './components/organisms/Menu/Menu'

import Home from './components/pages/Home'
import Detail from './components/pages/Detail'
import Shoppingcart from './components/pages/Shoppingcart'


const App = () => {
  
  return (
    <>
    <Navigation />
    <Home />
    <Footer />
    </>
  )
}

export default App;
