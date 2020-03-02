import React, { useState ,useEffect} from "react";
import pet, {ANIMALS} from '@frontendmasters/pet';
import dropDown from "./dropdown";

const searchParams = () => { //searchParams is a funtional component
  //replace location
  //useState = Hooks
  //usestate is where one can change the state of the file
  //location is the current state
  //updatelocation is the function to update
  const [location, updateLocation] = useState("Seattle,WA");
  const [breeds, updateBreeds] = useState([]);
  const [animal, AnimalDropdown] = dropDown("Animal","dog",ANIMALS);
  const [breed,BreedDropdown,updateBreed] = dropDown("Breed","",breeds);
  
 //Function or class  components in react are written in capital letters eg AnimalDropdown

 useEffect(() => {
   updateBreeds([]);
   updateBreed('');
   pet.breeds(animal).then(({breeds})=> {
     const breedItems = breeds.map(({name})=> name);
     updateBreeds(breedItems)
   }, console.error)
 },[animal,updateBreed,updateBreeds])

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => updateLocation(e.target.value)}
          />
        </label>
       <AnimalDropdown/>  
       <BreedDropdown/>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default searchParams;
