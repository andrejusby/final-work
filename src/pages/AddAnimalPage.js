import React, { useRef } from "react";


const AddAnimalPage = ({  setAnimals }) => {
  const nameRef = useRef();
  const ageRef = useRef();
  const imageRef = useRef();
  const typeRef = useRef();

  function addAnimal() {
    setAnimals((current) => [
      ...current,
      {
        name: nameRef.current.value,
        age: ageRef.current.value,
        image: imageRef.current.value,
        type: typeRef.current.value,
        id: Math.round(Math.random() * 50000),
      },
    ]);
  }
  console.log(addAnimal);
  return (
    <div>
      <div className="inputs">
        <input type="text" ref={nameRef} id="name" placeholder="ANIMAL NAME" defaultValue={"Ali"}/>
        <input type="number" ref={ageRef} id="age" placeholder="ANIMAL AGE" defaultValue={6}/>
        <input
          type="text"
          ref={imageRef}
          id="image"
          placeholder="ANIMAL IMAGE"
          defaultValue={"https://picsum.photos/200/300"}
        />
        <input type="text" ref={typeRef} id="dog" placeholder="ANIMAL TYPE" defaultValue={"Dog"}/>
        <button className="register-button" onClick={addAnimal}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddAnimalPage;
