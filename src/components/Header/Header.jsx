import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='menu'>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/products'>Products</Link>
      <Link to='/profile'>Profile</Link>
      <Link to='/cart'>Cart</Link>
      <Link to='/register'>Register</Link>
    </nav>
  )
}

export default Header