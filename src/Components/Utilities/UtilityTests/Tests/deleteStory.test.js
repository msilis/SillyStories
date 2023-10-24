import { test, expect, vi } from 'vitest';
import { deleteStory } from '../../deleteStory';
import { TOAST_TEXT } from '../../../../ui-text/ui-text';
import { showErrorToast, showSuccessToast } from '../../toasts';

test('makes a DELETE request to the correct endpoint', async () => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    const expectedResponse = {
        acknowledged: true,
        deleteCount: 1,
    };

    fetchMock.mockResolvedValue({
        status: 200,
        json: async () => expectedResponse,
    });
});

test('makes a POST request to the correct endpoint and handles an unsuccessful response correctly', async () => {
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    const expectedResponse = {
        acknowledged: false,
        deleteCount: 0,
    };

    fetchMock.mockResolvedValue({
        status: 200,
        json: async () => expectedResponse,
    });
});
