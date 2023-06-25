import style from "./App.module.css";
import Button from "./Components/Button/button";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
/* import { HandleGoClick } from "./Components/Utilities/startStories"; */

function App(): JSX.Element {
  const navigate = useNavigate();

  function StoryRoutes(): JSX.Element {
    return (
      <Routes>
        <Route path="/start" element={<StoryStart />}></Route>
      </Routes>
    );
  }

  function handleGoClick() {
    navigate("/start");
  }

  return (
    <div className={style.mainContainer}>
      <Header />
      <div className={style.goButton}>
        <Button buttonText={"Go!"} onClick={handleGoClick} />
      </div>
      <StoryRoutes />
    </div>
  );
}
import Header from "./Components/Header/header";
import StoryStart from "./Components/StoryStart/storyStart";

export default App;
