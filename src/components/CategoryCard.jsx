import React from 'react'

export default function CategoryCard(props) {
  return (
    <div className='categorycard'>
      <h6>{props.name}</h6>
      <img src={props.img} alt={props.name} id="imgc" />
    </div>
  )
}
