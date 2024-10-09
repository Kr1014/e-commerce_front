import React from 'react'
import './styles/cartProduct.css'
import { deleteFromCartThunk, updateCartThunk } from '../../store/cartSlice'
import { useDispatch } from 'react-redux'

const CardProduct = ({ prodCart }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteFromCartThunk(prodCart.id))
    }

    const handleLess = () =>{
        if (prodCart?.quantity >1){
           return dispatch(updateCartThunk(prodCart, -1))
        }
    }

    const handlePlus = () =>{
       return dispatch(updateCartThunk(prodCart, 1))
    }

    return (
        prodCart.product &&
        <div>
            <figure>
                <img src={prodCart.product.images[0].url} alt="" className='img_product_cart' />
            </figure>
            <div>
                <h2>{prodCart?.product.title}</h2>
                <button onClick={handleLess}>-</button>
                <span>{prodCart?.quantity}</span>
                <button onClick={handlePlus}>+</button> <br />
                <span>Total Product: $<span></span>{prodCart?.product.price*prodCart?.quantity}</span>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default CardProduct