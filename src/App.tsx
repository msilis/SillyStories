import style from "./App.module.css";
import Button from "./Components/Button/button";

function App(): JSX.Element {
  return (
    <div className={style.mainContainer}>
      <Header />
      <div className={style.goButton}>
        <Button buttonText={"Go!"} />
      </div>
    </div>
  );
}
import Header from "./Components/Header/header";

export default App;
