import { TOAST_TEXT } from '../../ui-text/ui-text'
import { method } from './sillyNetworkCall'
import { showErrorToast, showSuccessToast } from './toasts'

const deleteStory = (id: string) => {
    const storyId = { storyId: id }
    return fetch('http://localhost:8086/deleteStory', {
        method: method.post,
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(storyId),
    })
        .then((response) => {
            if (response.status === 200) {
                showSuccessToast(TOAST_TEXT.deleteSuccess)
                return response.json()
            } else {
                showErrorToast(TOAST_TEXT.deleteError)
            }
        })
        .catch((err) => {
            console.log(err)
            showErrorToast(TOAST_TEXT.deleteCatchError)
        })
}

export { deleteStory }
