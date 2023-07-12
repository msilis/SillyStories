import { useEffect, useState } from "react";
import style from "./savedStories.module.css";
import { fetchSavedStories } from "../Utilities/getSavedStory";
import { SavedArray } from "../Interfaces/savedStories";

export default function SavedStories() {
  const [savedStories, setSavedStories] = useState<SavedArray[]>([]);

  const getStories = async () => {
    const mySavedStories = await fetchSavedStories();
    setSavedStories(mySavedStories);
  };

  useEffect(() => {
    getStories();
  }, []);

  console.log({ savedStories });

  return (
    <div className={style.savedContainer}>
      <h2>Here are your saved stories.</h2>
      <div className={style.storyContainer}>
        {savedStories.map((story) => {
          return (
            <div className={style.storyItem} id={story.id}>
              <details id={story.id}>
                <summary id={story.id}>
                  {story.story.substring(0, 100) + "..."}
                </summary>
                <p className={style.detailsText} id={story.id}>
                  {story.story}
                </p>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
}
