import React from "react";
import AnimalCard from "../components/AnimalCard";
import { useNavigate, useParams } from "react-router-dom";



const MainPage = ({ user, users, animals, sickList, setSickList, addSickList, removeFromSickList, setAnimals}) => {
  const nav = useNavigate();

  const {id} = useParams();

  // const myAnimal = animals.find((x) => x.id === Number(id))

  
  return (
    <div className="d-flex flex-wrap">
      
      {user &&
        animals.map((animal, i) => (
        <AnimalCard  animal={animal} sickList={sickList} setSickList={setSickList} addSickList={addSickList} removeFromSickList={removeFromSickList} key={i} />
        ))}

          
    </div>
  );
};

export default MainPage;
