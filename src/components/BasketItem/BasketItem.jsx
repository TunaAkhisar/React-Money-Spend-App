import React from 'react'
import "./BacketItem.css"

const BasketItem = ({item,product}) => {
  return (
    <div className='basket-item'>
        {product.title} x {item.amount} <span>Unit Price : {product.price}</span><br></br>
    </div>
  )
}

export default BasketItem