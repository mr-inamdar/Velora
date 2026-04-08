import React from 'react'

export default function SearchOption(props) {
  return (
    <div className='searchOption'>
      <img src={props.img} alt="" id='soimg' />
      <div id="des">
        <h4 id="name">{props.name}</h4>
        <p id="brandName">{props.brand}</p>
      </div>
      <button id="veiwAllBtn" onClick={props.onClick} >Veiw All</button>
    </div>
  )
}
