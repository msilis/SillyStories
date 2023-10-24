import { fetchSavedStories } from '../../getSavedStory';
import { test, vi, expect } from 'vitest';

test('fetchSavedStories returns an array of savedStoryProps', async () => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    const expectedResponse = [
        {
            _id: '1234',
            story: 'Some story content goes here',
            _v: 5,
        },
        {
            _id: '5678',
            story: 'Some other story content goes here',
            _v: 3,
        },
    ];

    fetchMock.mockResolvedValue({
        status: 200,
        json: async () => expectedResponse,
    });

    const result = await fetchSavedStories();

    expect(fetchMock).toHaveBeenCalledWith(
        'http://localhost:8086/getSavedStories'
    );

    expect(result).toEqual(expectedResponse);
});

test('fetchSavedStories throws an error if response is not ok', async () => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    fetchMock.mockResolvedValue({
        status: 404,
        json: async () => ({}),
    });

    await expect(fetchSavedStories()).rejects.toThrow(
        'Failed to fetch saved stories'
    );
});

test('fetchSavedStories throws an error if response data is not an array', async () => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    fetchMock.mockResolvedValue({
        status: 200,
        json: async () => ({}),
    });

    await expect(fetchSavedStories()).rejects.toThrow('Invalid response data');
});
