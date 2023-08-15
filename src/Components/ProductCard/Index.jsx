import React from 'react'
import './Style.css'

// eslint-disable-next-line react/prop-types
export default function ProductCard({ imageURL, price ,productLink}) {

  const handleOnClick = (e,link)=>{
    e.preventDefault()
    window.open(link);
  }
  return (
    <div className="product-card" onClick={e=>handleOnClick(e,productLink)}>
      <div className="product-image">
        <img src={imageURL} alt="" />
      </div>
      <div className="product-details">
        <span className="price">RP.{price}</span>
        <span className="buy">Buy</span>
      </div>
    </div>
  )
}
