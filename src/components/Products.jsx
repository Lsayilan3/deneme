import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function Products() {
  return (
    <>
    <div>
      <input type='search' placeholder='Seacrh products'/>
    </div>
    <nav>
        <Link to='featured'>Featured</Link>
        <Link to='/products/new'>New</Link>
    </nav>
    <Outlet/>
    </>
  )
}
