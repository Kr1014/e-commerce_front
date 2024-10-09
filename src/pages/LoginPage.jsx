import React from 'react'
import {useForm} from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'

const LoginPage = () => {

  const {handleSubmit, register, reset} = useForm()
  const createToken = useAuth()

  const submit = (data) =>{
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
    createToken(url, data)
    reset ({
      email: "",
      password : ""
    })
  }

  return (
    <div className='padre-container-form'>
      <div  className='container-form'>
        <form onSubmit={handleSubmit(submit)} className='form_login'>
          <h1>Inicia sesion</h1>
          <div className='label-email'>
            <label htmlFor="user">Email</label>
            <input {...register('email')} type="email" id='user' className='input_name'/>
          </div>
          <div className='label-password'>
            <label htmlFor="key">Password</label>
            <input type="password" id='key' {...register('password')} className='input_password'/>
          </div>
          <button className='button-login'>Login</button>
          <a href="dadad" className='forget-password'>¿Olvidaste tu contraseña?</a>
          {/* <Link to={"/register"}>Crea tu cuenta de TechNexus aquí</Link> */}
        </form>
      </div>
      <div className='newUser'>
          <h4 className='h4-new'>¿Eres nuevo en TechNexus?</h4>
          <button className='create-new-user'><Link to={"/register"} className='create-new-user'>Crea tu cuenta TechNexus</Link> </button>
      </div>
    </div>
  )
}

export default LoginPage