import { FinishState } from "../Interfaces/finishProps";
import style from "./finish.module.css";

export default function Finish(props: FinishState): React.ReactNode {
  return (
    <div>
      <h1>Here is your story:</h1>
      <p className={style.storyStyle}>{props.storyState}</p>
    </div>
  );
}
