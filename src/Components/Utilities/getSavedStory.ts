export interface savedStoryProps {
    _id: string;
    story: string;
    _v: number;
}

export const fetchSavedStories = async (): Promise<
    savedStoryProps[] | undefined
> => {
    const response = await fetch('http://localhost:8086/getSavedStories');
    if (!response.ok) {
        throw new Error('Failed to fetch saved stories');
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
        throw new Error('Invalid response data');
    }
    return data;
};
