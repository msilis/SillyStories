import { useEffect, useState } from 'react';
import style from './savedStories.module.css';
import {
    fetchSavedStories,
    type savedStoryProps,
} from '../Utilities/getSavedStory';
import { type SavedArray } from '../Interfaces/savedStories';
import { deleteStory } from '../Utilities/deleteStory';

const getStories = async (): Promise<savedStoryProps[] | undefined> => {
    const mySavedStories = await fetchSavedStories();
    return mySavedStories;
};

export default function SavedStories(): JSX.Element {
    const [savedStories, setSavedStories] = useState<SavedArray[]>([]);

    const mySavedStories = async (): Promise<savedStoryProps[] | undefined> => {
        try {
            const stories = await getStories();
            setSavedStories(stories ?? []);
            return stories;
        } catch (error) {
            console.error(error);
            return undefined;
        }
    };

    const handleDeleteClick = async (story: SavedArray): Promise<void> => {
        const id = story._id;
        try {
            await deleteStory(id);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        void mySavedStories();
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
                                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                                    onClick={async () => {
                                        void handleDeleteClick(story);
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
