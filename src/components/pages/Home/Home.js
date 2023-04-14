
import Banner from '../../../components/molecules/Banner'
import Filterbar from '../../../components/organisms/Filterbar'

import Productsection from '../../../components/organisms/Productsection'

/// TODO: Define props for Home
const Home = ({data}) => {

    return(
    <>
      <Banner data= {data}/>
      <Filterbar/>

      <Productsection data={data}/>

    </>
    )

}

export default Home;

