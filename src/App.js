import Ding from './components/Ding'

const App = () => {
  return (
    <>
      <Ding text="Hello" display={true}/>
      <Ding text="World" display={false} />
    </>
  )
}

export default App;
