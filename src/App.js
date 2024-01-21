import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import Toolbar from "./components/Toolbar";

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import AddAnimalPage from "./pages/AddAnimalPage";
import FavoritePage from "./pages/FavoritePage";

import PostPage from "./pages/PostPage";



function App() {
  const primaryUsers = [
    {
      username: "Max",
      password: "max1",
    },
    {
      username: "John",
      password: "john1",
    },
  ];

  const primaryAnimals = [
    {
      name: "Tom",
      age: 31,
      image: "https://i.imgflip.com/322jqg.jpg",
      type: "Cat",
      id: 1111112,
    },
    {
      name: "Hank",
      age: 8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-68BCIaW0Iiam8wgn9vWs3vcGMHtg1yMTBg&usqp=CAU",
      type: "Dog",
      id: 1111113,
    },
    {
      name: "Tyson",
      age: 11,
      image:
        "https://media.4-paws.org/5/b/8/b/5b8bca3f74342210ccca652c651f2d7e23288753/VIER%20PFOTEN_2019-12-13_209-2890x2000.jpg",
      type: "Cat",
      id: 1111118,
    },
  ];

  const [users, setUsers] = useState(primaryUsers);
  const [animals, setAnimals] = useState(primaryAnimals);
  const [errors, setErrors] = useState([]);
  const [userRegisterInn, setRegisterInn] = useState();
  const [userLoggedInn, setUserLoggedIn] = useState();
  const [loginError, setLoginError] = useState();
  const [sickList, setSickList] = useState([]);

  function addSickList(item) {
    let isInSick = sickList.find((x) => x.id === item.id);
    if (isInSick) return;

    setSickList([...sickList, item]);
  }

  function removeFromSickList(item) {
    let myList = sickList.filter((x) => x.id !== item.id);

    setSickList([...myList]);
  }

  return (
    <div>
      <BrowserRouter>
        <Toolbar
          userLoggedInn={userLoggedInn}
          setUserLoggedIn={setUserLoggedIn}
          sickList={sickList}
        />

        <div className="page">
          <Routes>
            <Route
              path="/"
              element={
                <RegisterPage
                  users={users}
                  setUsers={setUsers}
                  errors={errors}
                  setErrors={setErrors}
                  setRegisterInn={setRegisterInn}
                  
                />
              }
            ></Route>
            <Route
              path="/login"
              element={
                <LoginPage
                  users={users}
                  setUserLoggedIn={setUserLoggedIn}
                  loginError={loginError}
                  setLoginError={setLoginError}
                />
              }
            ></Route>
            <Route
              path="/main"
              element={
                <MainPage
                  user={userLoggedInn}
                  users={users}
                  animals={animals}
                  sickList={sickList}
                  setSickList={setSickList}
                  addSickList={addSickList}
                  removeFromSickList={removeFromSickList}
                />
              }
            ></Route>
            <Route
              path="/add"
              element={<AddAnimalPage setAnimals={setAnimals} />}
            ></Route>
            <Route
              path="/favorite"
              element={
                <FavoritePage
                  animals={animals}
                  sickList={sickList}
                  setSickList={setSickList}
                  removeFromSick={removeFromSickList}
                />
              }
            ></Route>

            <Route path="/animal/:id" element={<PostPage animals={animals}/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
