import React from 'react'

export default function ProCard(props) {
  return (
    <div className='productcard' onClick={props.onClick}>
      <img src={props.img} alt="" id='proCardimg' />
      <div id="prodes">
        <p id="brand">{props.brand}</p>
        <h6 id="name">{props.name}</h6>
        <div id="rating">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-half"></i>
          <i class="bi bi-star"></i>
        </div>
        <p id="price">{props.price}</p>
        <div id="addtocart" onClick={() => props.addToCart(props.product)} ><i class="bi bi-cart-plus"></i></div>
      </div>
    </div>
  )
}
