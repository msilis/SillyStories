import { useEffect, useState } from "react";
import style from "./savedStories.module.css";
import { fetchSavedStories } from "../Utilities/getSavedStory";
import { SavedArray } from "../Interfaces/savedStories";
import { deleteStory } from "../Utilities/deleteStory";

export default function SavedStories() {
  const [savedStories, setSavedStories] = useState<SavedArray[]>([]);

  const getStories = async () => {
    const mySavedStories = await fetchSavedStories();
    setSavedStories(mySavedStories);
  };

  useEffect(() => {
    getStories();
  }, []);

  return (
    <div className={style.savedContainer}>
      <h2>Here are your saved stories.</h2>
      <div className={style.storyContainer}>
        {savedStories.map((story) => {
          return (
            <div className={style.storyItem} key={story._id}>
              <details>
                <summary>{story.story.substring(0, 100) + "..."}</summary>
                <pre className={style.detailsText}>{story.story}</pre>
                <button
                  onClick={() => {
                    const id = story._id;

                    deleteStory(id);
                  }}
                >
                  Delete
                </button>
              </details>
            </div>
          );
        })}
      </div>
    </div>
  );
}
