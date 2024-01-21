import React from "react";

const SickAnimalCard = ({
  animals,
  setSickList,
  sickAnimalId,
  removeFromSickList,
  removeFromSick,
  sickAnimalsId,
  post
}) => {

  console.log(sickAnimalsId);
  console.log(animals);
  
  const animal = animals.find(animal => animal.id === sickAnimalsId)
  
  
  function removeFromSickList() {
    setSickList((current) =>
      current.filter((currentFav) => {
        console.log(currentFav + " " + sickAnimalsId);
        return currentFav !== sickAnimalsId;
      })
    );
  }

  return (
    <div>
      <div className="animal-card">
        <img src={animal.image} alt="" />
        <div className="animal-information">
          <div>Name: {animal.name}</div>
          <div>Type: {animal.type}</div>
          <div>Age: {animal.age}</div>
          <button className="button-6" onClick={removeFromSickList}>REMOVE FROM SICK LIST</button>
        </div>
      </div>
    </div>
  );
};

export default SickAnimalCard;
