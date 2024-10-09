import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartThunk, setCart } from '../store/cartSlice'
import CardProduct from '../components/cartPage/CardProduct'
import './styles/cartPage.css'
import useAuth from '../hooks/useAuth'
import getToken from '../utils/getToken'

const CartPage = () => {

  const cart = useSelector(store=> store.cart)
  const dispatch = useDispatch()
  const createBuy = useAuth()

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])
  
const totalBuy = () =>{
  return cart.reduce ((ac, cv) => ac + (cv.quantity * cv.product.price) ,0)
}

const buy = () =>{
  const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
  createBuy(url, '', getToken())
  dispatch(setCart([]))
}

  return (
    <div>
      {
        cart?.map(prodCart => (
          <CardProduct
            key={prodCart.id}
            prodCart = {prodCart}
          />
        ))
      }
      <div className='total-buy'>
        <h3>Total Buy: ${totalBuy()}</h3>
        <button onClick={buy}>Buy</button>
      </div>
    </div>
  )
}

export default CartPage