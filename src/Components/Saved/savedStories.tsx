import { useEffect, useState } from 'react';
import style from './savedStories.module.css';
import {
    fetchSavedStories,
    type savedStoryProps,
} from '../Utilities/getSavedStory';
import { type SavedArray } from '../Interfaces/savedStories';
import { deleteStory } from '../Utilities/deleteStory';

const getStories = async () => {
    const mySavedStories = await fetchSavedStories();
    return mySavedStories;
};

export default function SavedStories(): JSX.Element {
    const [savedStories, setSavedStories] = useState<SavedArray[]>([]);

    const mySavedStories = async (): Promise<savedStoryProps[] | undefined> => {
        try {
            const stories = await getStories();
            setSavedStories(stories);
            return stories;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        mySavedStories();
    }, []);

    return (
        <div className={style.savedContainer}>
            <h2>Here are your saved stories.</h2>
            <div className={style.storyContainer}>
                {savedStories.map((story) => {
                    return (
                        <div className={style.storyItem} key={story._id}>
                            <details>
                                <summary>
                                    {story.story.substring(0, 100) + '...'}
                                </summary>
                                <pre className={style.detailsText}>
                                    {story.story}
                                </pre>
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
