import style from "./storyStart.module.css";
import InputForm from "../InputForm/inputForm";

export default function StoryStart(): JSX.Element {
  return (
    <div className={style.storyStartContainer}>
      <h3>Let's start here:</h3>
      <InputForm />
    </div>
  );
}
