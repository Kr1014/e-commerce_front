import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './styles/registerPage.css'

const RegisterPage = () => {
  const createUser = useAuth()
  const {handleSubmit, register, reset} = useForm()
  
  const submit = (data) =>{

    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    createUser(url, data)

    console.log(data)
    reset({
      firstName : "",
      lastName : "",
      email : "",
      password : "",
      phone : ""
    })
  }

  

  return (
    <div className='container-register'>
      <form onSubmit={handleSubmit(submit)} className='form-register'>
        <h1 className='h1-create'>Crea tu cuenta</h1>
        <div className='label-first-name label'>
          <label htmlFor="name">First name</label>
          <input {...register('firstName')} type="text" className='input'/>
        </div>
        <div className='label-last-name label'>
          <label htmlFor="lastName">Last name</label>
          <input {...register('lastName')} type="text" className='input'/>
        </div>
        <div className='label-email-register label'>
          <label htmlFor="email">Email</label>
          <input {...register('email')} type="phone" className='input'/>
        </div>
        <div className='label-password-register label'>
          <label htmlFor="password">Password</label>
          <input {...register('password')} type="password" className='input'/>
        </div>
        <div className='label-phone label'>
          <label htmlFor="phone">Phone</label>
          <input {...register('phone')} type="number" className='input'/>
        </div>
        <button className='button-register'>Registrar</button>
      </form>
    </div>
  )
}

export default RegisterPage