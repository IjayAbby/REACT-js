import React, { useState ,useEffect} from "react";
import pet, {ANIMALS} from '@frontendmasters/pet';
import Results from "./Results"
import dropDown from "./dropdown";  //dropDown can be replaced with any name,no restrictions

const SearchParams = () => { //searchParams is a funtional component
  //replace location
  //useState = Hooks
  //usestate is where one can change the state of the file
  //location is the current state
  //updatelocation is the function to update
  const [location, updateLocation] = useState("Seattle,WA");
  const [breeds, updateBreeds] = useState([]);
  const [animal, AnimalDropdown] = dropDown("Animal","dog",ANIMALS); //custom state
  const [breed,BreedDropdown,updateBreed] = dropDown("Breed","",breeds); 
 //Function or class  components in react are written in capital letters eg AnimalDropdown
 const [pets,setPets] = useState([]);
 async function requestPets(){
   const {animals } =  await pet.animals({
     location,
     breed,
     type: animal
   }) 
   setPets (animals || []);
   console.log(animals);
 } 

 useEffect(() => {
   updateBreeds([]);
   updateBreed('');
   pet.breeds(animal).then(({breeds})=> {
     const breedItems = breeds.map(({name})=> name)
     updateBreeds(breedItems)
   }, console.error)
 },[animal,updateBreed,updateBreeds])

  return (
    <div className="search-params">
      <form onSubmit = {(e) => {
        e.preventDefault();
        requestPets();
      }}>
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
      <Results pets = {pets}/>
    </div>
  );
};

export default SearchParams;
