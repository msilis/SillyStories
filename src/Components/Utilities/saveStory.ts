import { SaveProps } from '../Interfaces/saveProps'
import { showErrorToast, showSuccessToast } from './toasts'

const saveStory = (displayStory: SaveProps) => {
    const storyData = {
        story: displayStory,
    }
    console.log(storyData)
    return fetch('http://localhost:8086/saveStory', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(storyData),
    })
        .then((response) => {
            if (response.status === 201) {
                showSuccessToast('Story saved!')
                return response.json()
            }
        })
        .catch((err) => {
            console.log(err)
            showErrorToast('There was an error saving your story.')
        })
}

export { saveStory }
