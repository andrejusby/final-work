import React from "react";
import SickAnimalList from "../components/SickAnimalCard";

const FavoritePage = ({ animals, sickList, setSickList, removeFromSick }) => {
  return (
    <div>
      <div className="d-flex flex-wrap">
        {sickList.map((x, i) => (
          <SickAnimalList
            animals={animals}
            sickList={sickList}
            setSickList={setSickList}
            sickAnimalsId={x}
            removeFromSick={removeFromSick}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
