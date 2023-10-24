import { test, expect, vi } from 'vitest';
import { deleteStory } from '../../deleteStory';
import { TOAST_TEXT } from '../../../../ui-text/ui-text';
import { showErrorToast, showSuccessToast } from '../../toasts';

test('makes a POST request to the correct endpoint', async () => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    const storyId = '1234';

    await deleteStory(storyId);

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
});

test('handles a successful response correctly', async () => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    const storyId = '1234';
    const expectedResponse = {
        acknowledgede: true,
        deleteCount: 1,
    };

    fetchMock.mockResolvedValue({
        status: 200,
        json: async () => expectedResponse,
    });

    const actualResponse = await deleteStory(storyId);

    expect(actualResponse).toEqual(expectedResponse);
    expect(showSuccessToast).toHaveBeenCalledWith(TOAST_TEXT.deleteSuccess);
});

test('handles an unsuccessful response correctly', async () => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    const storyId = '1234';

    fetchMock.mockRejectedValue(new Error('Something went wrong'));

    const actualResponse = await deleteStory(storyId);

    expect(actualResponse).toBeUndefined();
    expect(showErrorToast).toHaveBeenCalledWith(TOAST_TEXT.deleteError);
});

test('catches errors correctly', async () => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    const storyId = '1234';

    fetchMock.mockRejectedValue(new Error('Something went wrong'));

    const actualResponse = await deleteStory(storyId);

    expect(actualResponse).toBeUndefined();
    expect(console.log).toHaveBeenCalledWith(new Error('Something went wrong'));
    expect(showErrorToast).toHaveBeenCalledWith(TOAST_TEXT.deleteCatchError);
});
