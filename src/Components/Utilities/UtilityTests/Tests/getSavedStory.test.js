import { test, vi, expect } from 'vitest';
import { fetchSavedStories } from '../../getSavedStory';
import jest from 'jest-mock';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mockFetchSavedStories = async (status, data) => {
    const mockResponse = {
        status,
        json: async () => data,
    };

    console.log('this is coming from inside mockFetchSavedStories');
    global.fetch = jest.fn().mockResolvedValue(mockResponse);
    return fetchSavedStories();
};

test('fetchSavedStories returns an array of saved stories', async () => {
    const expectedResponse = [
        {
            _id: '64b27e7925d9975b222dee20',
            story: "In the whimsical town of riga, there was a young adventurer named sam. sam had a vibrant imagination and a love for all things colorful. Their favorite color was purple, the shade of magic.\n\nOne sunny morning, sam stumbled upon a magical garden known as the Flavorful Paradise. The garden was filled with extraordinary ingredients, including the rare pizza. sam couldn't wait to taste the enchanting delicacy!\n\nAs sam explored the garden, they encountered a playful creature—a friendly dog with a colorful personality. The dog became sam's loyal companion, joining them on whimsical escapades and bringing laughter and joy to their adventures.\n\nFilled with wonder, sam returned home, forever cherishing the whimsical town of riga, the magical colors of purple, the delightful taste of pizza, and the cherished friendship with their playful dog companion.",
            __v: 0,
        },
    ];

    const mockResponse = {
        status: 200,
        json: async () => [expectedResponse],
    };
    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    const result = await fetchSavedStories();

    expect(result).toEqual(expectedResponse);
});

test('fetchSavedStories throws an error if response is not ok', async () => {
    const mockResponse = {
        status: 404,
        json: async () => ({}),
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    await expect(fetchSavedStories()).rejects.toThrow(
        'Failed to fetch saved stories'
    );
});

test('fetchSavedStories throws an error if response data is not an array', async () => {
    const mockResponse = {
        status: 200,
        json: async () => ({}),
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse);

    await expect(mockFetchSavedStories()).rejects.toThrowError(
        new Error('Invalid response data')
    );
});
