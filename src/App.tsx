import style from "./App.module.css";

import { Route, Routes, useNavigate } from "react-router-dom";
/* import { HandleGoClick } from "./Components/Utilities/startStories"; */

function App(): JSX.Element {
  const navigate = useNavigate();
  //State for inputs
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [food, setFood] = useState("");
  const [city, setCity] = useState("");
  const [animal, setAnimal] = useState("");

  function StoryRoutes(): JSX.Element {
    return (
      <Routes>
        <Route path="/" element={<Home onClick={handleGoClick} />}></Route>
        <Route path="/start" element={<FriendName />}></Route>
        <Route path="/color" element={<FavoriteColor />}></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/city" element={<City />}></Route>
        <Route path="/animal" element={<Animal />}></Route>
      </Routes>
    );
  }

  function handleGoClick() {
    console.log("handleGoClick fired");
    navigate("/start");
  }

  return (
    <div className={style.mainContainer}>
      <Header />
      <StoryRoutes />
    </div>
  );
}
import Header from "./Components/Header/header";
import FriendName from "./Components/FriendName/friendName";
import Home from "./Components/Home/home";
import { useState } from "react";
import FavoriteColor from "./Components/FavoriteColor/favoriteColor";
import Food from "./Components/Food/food";
import City from "./Components/City/city";
import Animal from "./Components/Animal/animal";

export default App;
