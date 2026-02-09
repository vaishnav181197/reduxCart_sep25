import './App.css'
import { Routes,Route } from 'react-router-dom'

import Landing from './Pages/Landing'
import Details from './Pages/Details'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'

import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='' element={<Landing/>}/>
        <Route path='details/:id' element={<Details/>}/>
        <Route path='wishlist' element={<Wishlist/>}/>
        <Route path='cart' element={<Cart/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
