import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react';

function Product() {
  let [plus , setplus] = useState(1)
  const location = useLocation()
  let sent = [location.state]
  console.log(location.state,"locatin");


  function add() {
    setplus(plus + 1)
}

  function less() {
  if (plus > 1) {
      setplus(plus - 1)
  }
}
  return (
    <div className='Product-css'>
       {
        sent.map((prodes)=>{
          return(
            <div>
              <p>name : {prodes.name}</p>
              <p>price : {prodes.price}</p>
              <img src= {prodes.image} />
              <button onClick={less}>-</button> 
          <span>{plus}</span>
          <button onClick={add}>+</button> 
          <button >add to cart</button> 
            </div>

          )
        })
       }
    </div>
  )
}

export default Product