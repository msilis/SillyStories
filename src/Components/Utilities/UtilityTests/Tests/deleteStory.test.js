import { deleteStory } from '../../deleteStory';
import { test, vi, expect } from 'vitest';
import { fn } from 'jest-mock';

test('delete story successfully', async () => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    const storyId = '1234';
    const expectedResponse = {
        acknowledged: true,
        deleteCount: 1,
    };
    fetchMock.mockResolvedValue({
        status: 200,
        json: async () => expectedResponse,
    });

    const result = await deleteStory(storyId);

    expect(fetchMock).toHaveBeenCalledWith(
        'http://localhost:8086/deleteStory',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ storyId }),
        }
    );
    expect(result).toEqual(expectedResponse);
});

test('delete story with error', async () => {
    const fetchMock = fn();
    global.fetch = fetchMock;

    const storyId = '1234';
    const expectedError = new Error('Network error');
    fetchMock.mockRejectedValue(expectedError);

    await expect(deleteStory(storyId)).rejects.toThrow(expectedError);
});
