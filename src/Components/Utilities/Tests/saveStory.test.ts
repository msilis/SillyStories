import { test, expect, vi } from 'vitest';
import { type SaveResponse, saveStory } from '../saveStory';
import { type SaveProps } from '../../Interfaces/saveProps';

test('makes a POST request to the correct endpoint and handles a successful response correctly', async () => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    const displayStory: SaveResponse = {
        story: 'My made up story',
        _id: '1234',
        _v: '0',
    };

    const expectedResponse = {
        story: 'My Story',
        _id: '1234',
        _v: '0',
    };

    fetchMock.mockResolvedValue({
        status: 201,
        json: async () => expectedResponse,
    });

    const actualResponse = await saveStory(
        displayStory as unknown as SaveProps
    );

    expect(fetchMock).toHaveBeenCalledWith('http://localhost:8086/saveStory', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ story: displayStory }),
    });

    expect(actualResponse).toEqual(expectedResponse);
});

test('makes a POST request to the correct endpoint and handles an unsuccessful response correctly', async () => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    const displayStory = {
        title: 'My Story',
        content: 'This is the content of my story.',
    };

    fetchMock.mockRejectedValue(new Error('Something went wrong'));

    const actualResponse = await saveStory(displayStory);

    expect(fetchMock).toHaveBeenCalledWith('http://localhost:8086/saveStory', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({ story: displayStory }),
    });

    expect(actualResponse).toBeUndefined();
});
