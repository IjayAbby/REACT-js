import React from "react";

// export default function ({name,animal,breed}){
//     return React.createElement('div',null, [
//         React.createElement('h1',null,name),
//         React.createElement('h2',null,animal),
//         React.createElement('h2',null,breed)
//         ]);
// }
//Creating a function component called Pet
const Pet = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};
export default Pet;
