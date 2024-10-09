import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import getToken from '../utils/getToken'
import ProductPurchase from '../components/purchasePage/ProductPurchase'
import './styles/loginPage.css'

const PurchasePage = () => {

  const [purchases, getPurchases] = useFetch()

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    getPurchases(url, getToken())
  }, [])

  return (
    <div>
      {
        purchases?.map(prodPur=> (
          <ProductPurchase
            key={prodPur.id}
            prodPur = {prodPur}
          />
        ))
      }
    </div>
  )
}

export default PurchasePage