import React, { useState } from "react";
import {ANIMALS} from '@frontendmasters/pet'

const searchParams = () => {
  //replace location
  //useState = Hooks
  //location is the current state
  //updatelocation is the function to update
  const [location, updateLocation] = useState("Seattle,WA");
  const [animal, updateAnimal] = useState("");
  

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => updateLocation(e.target.value)}
          />
        </label>
        <label htmlFor ="animal">
          Animal
          <select
          id = "animal"
          value = {animal}
          onChange = {(e) => updateAnimal(e.target.value)}
          onBlur = {(e) => updateAnimal(e.target.value)}
          >
            {ANIMALS.map(animal => {
              return <option value = {animal}>{animal}</option>
            })}
          </select>

        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default searchParams;
