import React, { useState } from "react";

function NewPlantForm({ plants, setPlants }) {

  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    const newPlant = { name, price, image }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify( newPlant )
    })
    .then( res => res.json() )
    .then( data => {
      setPlants( [...plants, data] ) 
      setName("")
      setPrice("")
      setImage("")
    })

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ handleSubmit } >

        <input type="text" 
          name="name" 
          placeholder="Plant name" 
          value={name} 
          onChange={ event => setName(event.target.value) } />
        
        <input type="text" 
          name="image" 
          placeholder="Image URL"
          value={image}
          onChange={ event => setImage(event.target.value) } />
        
        <input type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price"
          value={ price }
          onChange={ event => setPrice(event.target.value) } />
        
        <button type="submit">Add Plant</button>
      
      </form>
    </div>
  );
}

export default NewPlantForm;
