import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Products from './components/Products/Products'
import Profile from './components/Profile/Profile'
import Cart from './components/Cart/Cart'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import { ProductsProvider } from './context/ProductsContext/ProductsState'

function App() {

  return (
    <>
      <ProductsProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/products' element={<Products />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ProductsProvider>
    </>
  )
}

export default App
