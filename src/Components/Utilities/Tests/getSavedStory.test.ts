import { fetchSavedStories, type savedStoryProps } from '../getSavedStory';
import { it, describe, expect, beforeEach, vi } from 'vitest';

describe('fetchSavedStories', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('fetches saved stories successfully', async () => {
        const mockResponse: savedStoryProps[] = [
            {
                _id: 'test-id-1',
                story: 'Test story 1',
                _v: 0,
            },
            {
                _id: 'test-id-2',
                story: 'Test story 2',
                _v: 0,
            },
        ];
        const mockFetch = vi.fn().mockResolvedValue({
            ok: true,
            json: vi.fn().mockResolvedValue(mockResponse),
        });
        global.fetch = mockFetch;

        const result = await fetchSavedStories();

        expect(mockFetch).toHaveBeenCalledWith(
            'http://localhost:8086/getSavedStories'
        );
        expect(result).toEqual(mockResponse);
    });

    it('throws an error if the fetch fails', async () => {
        const mockError = new Error('Failed to fetch');
        const mockFetch = vi.fn().mockRejectedValue(mockError);
        global.fetch = mockFetch;

        await expect(fetchSavedStories()).rejects.toThrow(
            'Failed to fetch saved stories'
        );
    });

    it('throws an error if the response data is not an array', async () => {
        const mockResponse = {
            _id: 'test-id',
            story: 'Test story',
            _v: 1,
        };
        const mockFetch = vi.fn().mockResolvedValue({
            ok: true,
            json: vi.fn().mockResolvedValue(mockResponse),
        });
        global.fetch = mockFetch;

        await expect(fetchSavedStories()).rejects.toThrow(
            'Invalid response data'
        );
    });

    it('throws an error if the response status is not ok', async () => {
        const mockFetch = vi.fn().mockResolvedValue({
            ok: false,
        });
        global.fetch = mockFetch;

        await expect(fetchSavedStories()).rejects.toThrow(
            'Failed to fetch saved stories'
        );
    });
});
