import React from 'react'
import {useForm} from 'react-hook-form'
import './styles/formPrice.css'

const FormPrice = ({setFormValue}) => {

    const {handleSubmit, register, reset} = useForm()

    const submit = (data) =>{
        setFormValue({
          from  : data.from || 0,
          to : data.to || Infinity
        })
    }

  return (
    <form onSubmit={handleSubmit(submit)} className='form-price'>
      <h3 className='price-h3'>Price</h3>
      <div className='line-price'></div>
        <div>
            <label htmlFor="from" className='label-from-price'>From</label>
            <input {...register('from')}type="number" className='input-from-price'/>
        </div>
        <div>
            <label htmlFor="to" className='label-to-price'>To</label>
            <input {...register('to')} type="number" className='input-to-price'/>
        </div>
        <button className='buton-filter-price'>Filter price</button>
    </form>
  )
}

export default FormPrice