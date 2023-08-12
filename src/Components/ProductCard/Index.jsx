import React from 'react'
import './Style.css'

export default function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src="https://images.ygoprodeck.com/images/cards/4280258.jpg" alt="" />
      </div>
      <div className="product-details">
        <span className="price">RP.150000</span>
        <span className="buy">Buy</span>
      </div>
    </div>
  )
}
