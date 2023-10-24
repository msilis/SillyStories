import { fetchSavedStories } from '../../../Utilities/getSavedStory';
import { test, vi, expect } from 'vitest';

test('get saved story successfully', async () => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    const expectedResponse = {
        id: '1234',
        story: 'Some story content goes here',
        _v: 5,
    };

    fetchMock.mockResolvedValue({
        status: 200,
        json: async () => expectedResponse,
    });

    const result = await fetchSavedStories();

    expect(fetchMock).toHaveBeenCalledWith(
        'http://localhost:8086/getSavedStory',
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
        }
    );

    expect(result).toEqual(expectedResponse);
});
