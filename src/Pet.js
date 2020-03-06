import React from "react";
import {Link} from "@reach/router";

// export default function ({name,animal,breed}){
//     return React.createElement('div',null, [
//         React.createElement('h1',null,name),
//         React.createElement('h2',null,animal),
//         React.createElement('h2',null,breed)
//         ]);
// }
//Creating a function component called Pet
const Pet = (props) => {
  const {name,animal,breed,media,location,id} = props;
  let data = "";
  if (media.length){
    data = media[0].small;
  }
  console.log(media);
  return (
    <Link to= {`/details/${id}`} className = 'pet'>

    <div className = "image-container">
      <img src = {data} alt = {name} />
      </div>
      <div className = "info">
      <h1>{name}</h1>
      <h2>{`${animal}-${breed}-${location}`}</h2>
      
    </div>
    </Link>
  );
};
export default Pet;
