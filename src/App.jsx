
import './App.css'
import Navbar from './components/navbar'
import Banner from './components/Banner'
import Status from './components/Status'

function App() {

  return (
    <>
      <Navbar cartCount={0}></Navbar>
      <Banner></Banner>
      <Status></Status>
      


    
    </>
  )
}

export default App
