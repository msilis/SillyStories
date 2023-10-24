export interface savedStoryProps {
    _id: string;
    story: string;
    _v: number;
}

const fetchSavedStories = async (): Promise<savedStoryProps | undefined> => {
    return await fetch('http://localhost:8086/getSavedStories')
        .then(async (response) => await response.json())
        .then((data) => {
            return data;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
};

export { fetchSavedStories };
