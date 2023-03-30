import './resources/styles/main.css'

import Nav from './components/molecules/Nav'
import Banner from './components/molecules/Banner'
import Filterbar from './components/organisms/Filterbar'

import Productsection from './components/organisms/Productsection'
import Footer from './components/organisms/Footer'



const App = () => {
  
  return (
    <>
      <Nav />
      <Banner />
      <Filterbar/>

      <Productsection />
      <Footer />

    </>
  )
}

export default App;
