import style from "./App.module.css";
import { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Header from "./Components/Header/header";
import FriendName from "./Components/FriendName/friendName";
import Home from "./Components/Home/home";
import FavoriteColor from "./Components/FavoriteColor/favoriteColor";
import Food from "./Components/Food/food";
import City from "./Components/City/city";
import Animal from "./Components/Animal/animal";
import Finish from "./Components/Finish/finish";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  //remove values from localStorage if there are any

  const clearStorage = () => {
    if (localStorage.getItem("friendNameInput") !== null) {
      localStorage.removeItem("friendNameInput");
    }
    if (localStorage.getItem("colorInput") !== null) {
      localStorage.removeItem("colorInput");
    }
    if (localStorage.getItem("animalInput") !== null) {
      localStorage.removeItem("animalInput");
    }
    if (localStorage.getItem("cityNameInput") !== null) {
      localStorage.removeItem("cityNameInput");
    }
    if (localStorage.getItem("foodInput") !== null) {
      localStorage.removeItem("foodInput");
    }
  };

  function StoryRoutes(): JSX.Element {
    return (
      <Routes>
        <Route path="/" element={<Home onClick={handleGoClick} />}></Route>
        <Route path="/start" element={<FriendName />}></Route>
        <Route path="/color" element={<FavoriteColor />}></Route>
        <Route path="/food" element={<Food />}></Route>
        <Route path="/city" element={<City />}></Route>
        <Route path="/animal" element={<Animal />}></Route>
        <Route path="/finish" element={<Finish />}></Route>
      </Routes>
    );
  }

  useEffect(() => {
    if (location.pathname === "/") {
      clearStorage();
    }
  }, [location.pathname]);

  function handleGoClick() {
    console.log("handleGoClick fired");
    navigate("/start");
  }

  return (
    <div className={style.mainContainer}>
      <Header />
      <StoryRoutes />
      <ToastContainer />
    </div>
  );
}

export default App;
