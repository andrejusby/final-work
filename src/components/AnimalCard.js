import React from "react";
import { Link, useParams } from "react-router-dom";

const AnimalCard = ({
  animal,
  addSickList,
  sickList,
  setSickList,
  removeFromSickList,
  
 
  
}) => {
  
  const isThisFavorite = () => sickList.indexOf(animal.id) >= 0;

  function addToSickList() {
    setSickList((current) =>
      current.indexOf(animal.id) < 0 ? [...current, animal.id] : current
    );
  }
  const params = useParams;
  return (
    <div className="animal-card">
      
      <img src={animal.image} alt="" />
      <div className="animal-information">
        <div>Name: {animal?.name}</div>
        <div>Type: {animal.type}</div>
        <div>Age: {animal.age}</div>
        <button
          className="button-6" onClick={addToSickList} disabled={isThisFavorite()}> {isThisFavorite() ? 'ALREADY IN SICK LIST' : 'ADD TO SICK LIST'}</button>
      </div>

      {/* {!("id" in params) && (
          <div>
            {!hideFav ? (
              <button onClick={() => addSickList(animals)}>Add To Favorites</button>
            ) : (
              <button onClick={() => removeFromSickList(animals)}>
                Remove From Favorites
              </button>
            )}
            <Link to={`/animals/${animals.id}`}>
              <button>Open Product</button>
            </Link>
          </div>
        )} */}
    </div>
  );
};

export default AnimalCard;
