import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from '../store'
import { getProductsThunk} from '../store/productSlice'
import ProductCard from '../components/homePage/ProductCard'
import "./styles/homePage.css"
import SelectCategory from '../components/homePage/SelectCategory'
import FormPrice from '../components/homePage/FormPrice'
import { useNavigate } from 'react-router-dom'
import { FaMoon } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6"
import HeaderNav from '../components/share/HeaderNav'
const body = document.querySelector('body')

const HomePage = () => {
  const products = useSelector(store => store.products)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const textInput = useRef()
  const [searchProduct, setsearchProduct] = useState("")
  const [selectValue, setSelectValue] = useState(0)
  const [formValue, setFormValue] = useState({
    from: 0,
    to: Infinity
  })

  const handleProduct = () => {
    return setsearchProduct(textInput.current.value.toLowerCase().trim())
  }

  const handleDark = () => {
    body.classList.toggle('dark')
  }

  const cbFilter = (prod) => {
    const { from, to } = formValue
    const ByName = prod.title.toLowerCase().includes(searchProduct)
    const ByCategory = +selectValue === 0 ? true : prod.categoryId == +selectValue
    const ByPrice = +prod.price > +from && +prod.price < +to
    return ByName && ByCategory && ByPrice
  }

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    dispatch(getProductsThunk(url))
  }, [])

  return (
    <div>
        {/* <button onClick={handleDark}><FaMoon /></button> */}
     
      <FormPrice
        setFormValue={setFormValue}
      />
      <div className='select-category'>
        <h3 className='category-h3'>Category</h3>
        <div className='line-category'></div>
        <SelectCategory
          setSelectValue={setSelectValue}
        />
      </div>
      <div className='content-search-product'>
        <input type="text" ref={textInput} onChange={handleProduct} className='search-product' placeholder={'What are you looking for?'} />
        <div className='content-FaMagnify'><FaMagnifyingGlass className='Magnifying-Glass' /></div>
      </div>
      <section className='productsContainer'>
        {
          products?.filter(cbFilter).map(prod => (
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

export default HomePage