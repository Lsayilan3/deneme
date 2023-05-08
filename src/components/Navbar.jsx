import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {useAuth} from './auth'

export default function Navbar() {
 
  const navLinkStyles = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' :'normal',
      textDecoration : isActive ?'none' : 'underline',
    }
  }

  const auth = useAuth()

  return (
    <nav className='primary-nav'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <NavLink  style={navLinkStyles}  to="/">Homee</NavLink>
      <NavLink  style={navLinkStyles} to="/about">Aboutt</NavLink>

      <NavLink style={navLinkStyles}  to="/products">Products</NavLink>

      <NavLink style={navLinkStyles}  to="/profile">Profile</NavLink>

      {!auth.user && (
         <NavLink style={navLinkStyles}  to="/category">Login</NavLink>
      )}
    </nav>
  )
}
