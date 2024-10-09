import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductIdPage from './pages/ProductIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import PurchasePage from './pages/PurchasePage'
import ProtectedPage from './pages/ProtectedPage'
import HeaderNav from './components/share/HeaderNav'

function App() {

  return (
    <div>
      <HeaderNav/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/product/:id' element={<ProductIdPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route element={<ProtectedPage/>}>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='purchase' element={<PurchasePage/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App
