import { TOAST_TEXT } from '../../ui-text/ui-text';
import { type SaveProps } from '../Interfaces/saveProps';
import { method } from './sillyNetworkCall';
import { showErrorToast, showSuccessToast } from './toasts';

export interface SaveResponse {
    story: string;
    _id: string;
    _v: string;
}

const saveStory = async (
    displayStory: SaveProps
): Promise<SaveResponse | undefined> => {
    const storyData = {
        story: displayStory,
    };
    return await fetch('http://localhost:8086/saveStory', {
        method: method.post,
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(storyData),
    })
        .then(async (response) => {
            if (response.status === 201) {
                showSuccessToast('Story saved!');
                return await response.json();
            }
        })
        .catch((err) => {
            console.log(err);
            showErrorToast(TOAST_TEXT.saveStoryError);
        });
};

export { saveStory };
