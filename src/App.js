import './resources/styles/main.css'

import Logo from './components/atoms/Logo'
import Header1 from './components/atoms/Header1'
import Header2 from './components/atoms/Header2'
import Paragraph from './components/atoms/Paragraph'
import Subtitle from './components/atoms/Subtitle'
import Button from './components/atoms/Button'
import ShoppingButton from './components/atoms/Shoppingbutton'
import Image from './components/atoms/Image'
import PriceTag from './components/atoms/Pricetag'
import Input from './components/atoms/Input'

const App = () => {
  return (
    <>
      <Logo color= "black" />
      <ShoppingButton></ShoppingButton>
      <Header2 text="This is h2"></Header2>
      <Header1 text="Hi there" ClassName="main-text-regular"></Header1>
      <Paragraph content="Gooi deze tekst er anders maar in voor nu"></Paragraph>
      <Subtitle text="Dit is een saaie subregel maar dan oranje"></Subtitle>
      <Button text="Klik hier" onClick= {() => alert('Klik klik!')}></Button>
      <PriceTag price= '22.50' />
      <Image className="Image" src= "https://as2.ftcdn.net/v2/jpg/01/13/79/75/1000_F_113797565_7b5L47LqnaZrd59swu0dtkhOFz4KYopV.jpg"></Image>
      <Image className="Image" src="https://img.kytary.com/eshop_nl/stredni_v4x/na/636706319220900000/a3be06e1/52854114/serato-performance-vinyl-bk.jpg"></Image>
      <Input type="text" placeholder="Search"  />

    </>
  )
}

export default App;
