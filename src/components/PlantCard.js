import React, { useState } from "react";

function PlantCard({ plant }) {

  const [ isInStock, setIsInStock ] = useState( true )

  function handleClick() {
    setIsInStock( !isInStock )
  }

  return (
    <li className="card">
      <img src={ plant.image } alt={ plant.name } />
      <h4>{ plant.name }</h4>
      <p>Price: ${ plant.price }</p>
      <button className={isInStock ? "primary" : ""} onClick={handleClick}>{ isInStock ? "In Stock" : "Out of Stock"}</button>
    </li>
  );
}

// { isInStock ? (
//   <button className="primary" onClick={handleClick} >In Stock</button>
// ) : (
//   <button onClick={handleClick} >Out of Stock</button>
// )}
export default PlantCard;
