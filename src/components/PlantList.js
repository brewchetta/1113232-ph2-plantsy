import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  return (
    <ul className="cards">{
      // render all the plants as PlantCards
      plants.map(plant => <PlantCard key={ plant.id } plant={ plant } /> )
    }</ul>
  );

}

export default PlantList;
