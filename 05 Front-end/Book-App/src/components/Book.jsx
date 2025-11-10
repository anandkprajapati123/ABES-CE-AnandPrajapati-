import React from "react";
import "./Book.css";

function Book({ img, name, price, cartCount, setCartCount }) {
  function handleAdd(){
    if (cartCount >= 10){
      alert("Cart limit reached! You cannot add more than 10 items.");
    } else{
      setCartCount(cartCount + 1);
    }
  };

  function handleRemove(){
    if (cartCount <= 0){
      alert("Cart cannot be less than 0!");
    } else{
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div className="book">
      <img src={img} alt={name} className="book-img" />
      <h2>{name}</h2>
      <h3>Price: ₹{price}</h3>
      <div className="buttons">
        <button onClick={handleAdd} className="add">+</button>
        <span>{cartCount}</span>
        <button onClick={handleRemove} className="remove">-</button>
      </div>
    </div>
  );
}

export default Book;
