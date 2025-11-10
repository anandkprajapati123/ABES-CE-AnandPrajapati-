import React from 'react'
import './Book.css'
import { useState } from 'react'

function Book(props) {
  const [count, setCount] = useState(0);
  function inc() {
    if(count>=10){
      alert("limits reached")
    }
    else{
      setCount(c => c + 1);
    }
  }
  function dec() {
    if(count<=0){
      alert("less than zero")
    }
    else{
      setCount(c => c - 1);
    }
  }

  return (
    <div id="book">
      <img src={props.img} alt="" height={100} width={100} />
      <h1>{props.name}</h1>
      <h1>{props.price}</h1>
      <div>
        <button onClick={inc}>+</button>
        <span>{count}</span>
        <button onClick={dec}>-</button>
      </div>
    </div>
  )
}

export default Book