import { type Story } from '../Interfaces/story';

export const method = {
    post: 'POST',
    get: 'GET',
};

const storyFetch = async (): Promise<Story | undefined> => {
    return await fetch('https://silly-stories-backend.onrender.com/randomStory')
        .then(async (response) => await response.json())
        .then((data) => {
            return data.story;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

export { storyFetch };
