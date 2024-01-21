import React from "react";
import SickAnimalCard from "./SickAnimalCard";

export const SickAnimalList = ({ animals, sickList, setSickList, removeFromSick, sickAnimalsId }) => {
    
    
  return (
    <div className="d-flex flex-wrap">
      {sickList &&
        sickList.map(current => 
          <SickAnimalCard
            animals={animals}
            setSickList={setSickList}
            sickAnimalId={current}
            removeFromSick={removeFromSick}
            sickAnimalsId={sickAnimalsId}
            
            
          />
        )}
    </div>
  );
};

export default SickAnimalList;
