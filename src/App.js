import './resources/styles/main.css'

import Nav from './components/molecules/Nav'
import Banner from './components/molecules/Banner'
import SearchBar from './components/molecules/Searchbar'
import Filter from './components/molecules/Filter'
import Productsection from './components/organisms/Productsection'
import Footer from './components/organisms/Footer'

import Producttile from './components/molecules/Producttile'




const App = () => {
  
  return (
    <>
      <Nav />
      <Banner />
      <SearchBar />
      <Filter />

      <Productsection />
      <Footer />

    </>
  )
}

export default App;
