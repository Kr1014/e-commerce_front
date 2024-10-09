import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import InfoCard from '../components/productIdPage/InfoCard'
import SimiliarItems from '../components/productIdPage/SimiliarItems'
import SliderImages from '../components/productIdPage/SliderImages'
import "./styles/productIdPage.css"

const ProductIdPage = () => {

  const [productId, getProductId] = useFetch()
  const param = useParams()

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}`
    getProductId(url)
  }, [param])

  // console.log(productId)

  return (
    <div className='container-idProduct-page'>
      <section className='contentSlideImages'>
        <SliderImages
            images = {productId?.images}
        />
      </section>
      {
        <InfoCard
          productId = {productId}
        />
      }
      {
        <SimiliarItems
          categoryId = {productId?.categoryId}
          productId = {productId?.id}
        />
      }
    </div>
  )
}

export default ProductIdPage