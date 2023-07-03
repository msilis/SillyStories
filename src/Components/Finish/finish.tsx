import { FinishState } from "../Interfaces/finishProps";
import style from "./finish.module.css";
import { useEffect } from "react";
import { storyEdit } from "../Utilities/storyEdit";
import { StoryEdit } from "../Interfaces/editProps";

export default function Finish(
  props: FinishState & StoryEdit
): React.ReactNode {
  const displayStory = storyEdit({ storyState: props.storyState });

  useEffect(() => {
    storyEdit({ storyState: props.storyState });
  }, []);

  return (
    <div className={style.storyContainer}>
      <h1>Here is your story:</h1>
      <pre className={style.storyStyle}>{displayStory}</pre>
    </div>
  );
}
