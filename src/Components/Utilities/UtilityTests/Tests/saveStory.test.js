import { test, expect, vi } from 'vitest'
import { saveStory } from '../../saveStory'

test('makes a POST request to the correct endpoint', async () => {
    const fetchMock = vi.fn()
    global.fetch = fetchMock

    const storyData = {
        story: 'My Story',
        _id: '1234',
    }

    await saveStory(storyData)

    expect(fetchMock).toHaveBeenCalledWith('http://localhost:8086/saveStory', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(storyData),
    })
})
