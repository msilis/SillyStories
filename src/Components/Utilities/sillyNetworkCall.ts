export const method = {
    post: 'POST',
    get: 'GET',
};

interface RandomStory {
    story: string;
    _id: string;
}

const storyFetch = async (): Promise<RandomStory> => {
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
