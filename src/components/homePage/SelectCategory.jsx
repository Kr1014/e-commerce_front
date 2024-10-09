import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/selectCategory.css'

const SelectCategory = ({setSelectValue}) => {

   const [allCategory, getAllCategories] = useFetch()
   const textSelect = useRef()

   useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
        getAllCategories(url)
   }, [])

   const handleSelect = () =>{
        return setSelectValue(textSelect.current.value)
   }

  return (
    <select onChange={handleSelect} ref={textSelect} className='select-category'>
        <option value={0}>All</option>
        {
            allCategory?.map(cate => (
                <option key= {cate.id}  value={cate.id}>{cate.name}</option>
            ))
        }
    </select>
  )
}

export default SelectCategory