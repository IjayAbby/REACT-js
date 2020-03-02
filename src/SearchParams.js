import React, { useState } from "react";
import {ANIMALS} from '@frontendmasters/pet'


const searchParams = () => { //searchParams is a funtional component
  //replace location
  //useState = Hooks
  //usestate is where one can change the state of the file
  //location is the current state
  //updatelocation is the function to update
  const [location, updateLocation] = useState("Seattle,WA");
  const [animal, updateAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds, updateBreeds] = useState([]);
  

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
          >
            {ANIMALS.map(animal => {
              return <option key = {animal} value = {animal}>{animal}</option>
            })}
          </select>

        </label>
        <label htmlFor = "breed">
          Breed
          <select
          disabled= {!breeds.length}
          id = "breed"
          value ={breed}
          onChange = {(e) => updateBreeds(e.target.value)}>
            <option>ALL</option>
            {breeds.map((breed) => {
              return <option key = {breed} value = {breed}>{breed}</option>
            })}

          </select>

        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default searchParams;
