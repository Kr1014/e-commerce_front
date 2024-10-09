import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";

import "./styles/productCard.css"

const ProductCard = ({prod}) => {

    const navigate = useNavigate()

    const handleViewMore = ()=>{
        navigate(`/product/${prod.id}`)
    }

  return (
    <article className='productCard' onClick={handleViewMore} >
        <figure className='productCard_img'>
            <img src={prod.images[0].url} alt="" />
            <img src={prod.images[1].url} alt="" />
        </figure>
        <div className='line'></div>
        <div className='contentDescriptions'>
            <ul>
                <li><span className='productCard_brand'>{prod.brand}</span><br /><span className='productCard_title'>{prod.title}</span></li>
                <li className='contentPrice'><span className='productCard_priceName'>Price</span><br /><span className='productCard_price'>${prod.price}</span></li>
            </ul>
        </div>
        <div className='productCard_buttons'>
            <button className='round-button'><FaCartShopping className='fa-cart'/></button>
        </div >          
    </article>
  )
}

export default ProductCard