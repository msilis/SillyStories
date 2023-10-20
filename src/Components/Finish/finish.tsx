import { FinishState } from "../Interfaces/finishProps";
import style from "./finish.module.css";
import { useEffect } from "react";
import { storyEdit } from "../Utilities/storyEdit";
import { StoryEdit } from "../Interfaces/editProps";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Finish(
  props: FinishState & StoryEdit,
): React.ReactNode {
  const displayStory = storyEdit({ storyState: props.storyState });
  const navigate = useNavigate();

  useEffect(() => {
    storyEdit({ storyState: props.storyState });
    //Disable empty array eslint complaint -- I really do want it to run only once!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //New story click functionality
  const newClick = () => {
    navigate("/");
  };

  return (
    <div className={style.storyContainer}>
      <h1>Here is your story:</h1>
      <pre className={style.storyStyle}>{displayStory}</pre>
      <div className={style.newStory}>
        <Button className={style.button} onClick={newClick}>
          New Story
        </Button>
      </div>
    </div>
  );
}
