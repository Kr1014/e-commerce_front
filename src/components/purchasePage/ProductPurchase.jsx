import React from 'react'
import './styles/prodPurchase.css'

const ProductPurchase = ({prodPur}) => {

    console.log(prodPur)

  return (
    <div>
        <figure>
            <img src={prodPur?.product.images[0].url} alt="" className='img_purchases'/>
        </figure>
        <div>
            <ul>
                <li>{prodPur?.product.brand}</li>
                <li>{prodPur?.product.title}</li>
                <li>{prodPur?.quantity}</li>
                <li>{prodPur?.product.price}</li>
                {/* <li>{prodPur?.product.}</li> */}
            </ul>
        </div>
    </div>
  )
}

export default ProductPurchase