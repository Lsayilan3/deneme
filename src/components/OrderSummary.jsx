import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderSummary() {
    const navigate= useNavigate()
  return (
    <>
    <div>Order confirmed!</div>
    <button style={{marginTop:30}} onClick={()=> navigate(-1)}>Go back</button>
    </>
  )
}
