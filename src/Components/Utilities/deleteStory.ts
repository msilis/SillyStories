import { TOAST_TEXT } from '../../ui-text/ui-text';
import { method } from './sillyNetworkCall';
import { showErrorToast, showSuccessToast } from './toasts';

export interface deleteApiProps {
    acknowledgede: boolean;
    deleteCount: number;
}

const deleteStory = async (id: string): Promise<deleteApiProps | undefined> => {
    const storyId = { storyId: id };
    return await fetch('http://localhost:8086/deleteStory', {
        method: method.post,
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(storyId),
    })
        .then((response) => {
            if (response.status === 200) {
                showSuccessToast(TOAST_TEXT.deleteSuccess);
                return response.json();
            } else {
                showErrorToast(TOAST_TEXT.deleteError);
            }
        })
        .catch((err) => {
            console.log(err);
            showErrorToast(TOAST_TEXT.deleteCatchError);
        });
};

export { deleteStory };
