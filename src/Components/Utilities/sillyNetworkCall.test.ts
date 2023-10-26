import { storyFetch } from './sillyNetworkCall';
import { describe, it, expect } from 'vitest';
import jest from 'jest-mock';

describe('storyFetch', () => {
    it('should fetch a random story', async () => {
        const story = await storyFetch();
        expect(story).toBeDefined();
    }, 40000);

    it('should throw an error if the fetch fails', async () => {
        const mockError = new Error('Failed to fetch');
        jest.spyOn(global, 'fetch').mockRejectedValue(mockError);

        await expect(storyFetch()).rejects.toThrow(mockError);

        (global.fetch as jest.Mock).mockRestore();
    });
});
