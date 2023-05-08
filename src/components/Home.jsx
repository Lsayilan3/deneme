import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

 const navigete =  useNavigate()
  return (
    <>
    <div>Home</div>
    <button style={{marginTop:30}} onClick={()=> navigete('order-summary',{replace: true})}>Place order</button>
    </>
  )
}
