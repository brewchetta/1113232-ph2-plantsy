import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  
  // state --> plants state
  const [ plants, setPlants ] = useState([])

  const [ search, setSearch ] = useState("")

  const filteredPlants = plants.filter( plant => plant.name.toLowerCase().includes( search.toLowerCase() ) )

  // useEffect --> stop the infinite looping

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])
  // dependency array --> tells us when the useEffect fires

  console.log(plants)

  return (
    <main>
      <NewPlantForm plants={plants} setPlants={setPlants} />
      <Search search={search} setSearch={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
