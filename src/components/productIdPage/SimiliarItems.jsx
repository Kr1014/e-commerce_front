import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import ProductCard from '../homePage/ProductCard'
import "./styles/similiarItems.css"

const SimiliarItems = ({categoryId,productId}) => {
  
    // console.log(categoryId)

    const [productByCategory, getProductByCategory] = useFetch()

    const cbFilter = (prod)=>{
      return prod.id !== +productId
    }

    useEffect(() => {
      if(categoryId){
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId}`
        getProductByCategory(url)
      }
    }, [categoryId])
    
    // console.log(productByCategory)

  return (
    <div className='content-similarItems'>
      <h3 className='title-similar-items'>Discover similiar items</h3>
       <section  className='similarContent'>
        {
          productByCategory?.filter(cbFilter).map(prod=>(
            <ProductCard
              key={prod.id}
              prod={prod}
            />
          ))
        }
       </section>
    </div>
  )
}

export default SimiliarItems