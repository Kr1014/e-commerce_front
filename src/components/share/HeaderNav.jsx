import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'
import { CiUser } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { BiPurchaseTag } from "react-icons/bi";

const HeaderNav = () => {
  return (
    <div>
        <nav className='header-nav'>
            <h1 className='title-nav'><Link to={'/'} className='title-nav-2'>TechNexus</Link></h1>
            <ul className='nav-ul'>
                <li><Link to={'/login'}><CiUser className='ciUser'/></Link></li>
                <li><Link to={'/purchase'}><BiPurchaseTag className='ciUser'/></Link></li>
                <li><Link to={'/cart'}><FaCartShopping className='ciUser'/></Link></li>
            </ul>
        </nav>
        <div className='line-nav'></div>
    </div>
  )
}

export default HeaderNav