import React, { useEffect, useState } from 'react'
import Items from '../../components/items'
import "./style.css"

const Cart = () => {
  const[cartdata, setCartdata] = useState([])

  
   useEffect(()=>{
    const localCartdata = JSON.parse(localStorage.getItem("setlocalCartdata"));
    console.log("data in localstorage", localCartdata)
    console.log("hello beboooo...")
    setCartdata(localCartdata);
   },[])

   const showCartItems=(item)=>{
    return(
      <Items item={item}  button="Buy Now"/>
    )
   }

  return (
    <div className='container'>
      {cartdata && cartdata.map(showCartItems)}
      <div>
      </div>
    </div>
  )
}

export default Cart