import React, { useEffect, useState } from 'react'
import { postCartThunk, updateCartThunk } from '../../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { FaCartShopping } from "react-icons/fa6"
import './styles/infoCard.css'

const InfoCard = ({productId}) => {

  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const cart = useSelector(store => store.cart)

  const handleLess = () =>{
    if(quantity>1){
      setQuantity(quantity-1)
    }
  }

  const handlePlus = () =>{
    setQuantity(quantity+1)
  }

  const handleAddToCart = ()=>{

    const item = cart.filter(prod=> prod.productId === productId.id)

    if(item[0]){
      dispatch(updateCartThunk(...item, quantity)) 
    }
    else{
      dispatch(postCartThunk({
        quantity : quantity,
        productId : productId?.id
      }))
    }
  }
 
  

  return (
    <section>
        <div className='info-product'>
            <h1><span className='name-brand-productId'>{productId?.brand}</span><br /><span>{productId?.title}</span></h1>
            <p className='product-description'>{productId?.description}</p>
            <h3><span>Price</span><br /><span>{productId?.price}</span></h3>
        </div>
        <button onClick={handleLess}>-</button>
        <span>{quantity}</span>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleAddToCart}><FaCartShopping className='fa-cart'/></button>
        <button></button>
    </section>
  )
}

export default InfoCard