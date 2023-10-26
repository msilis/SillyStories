import { type Story } from './story';

export interface FinishState {
    storyState: Story | undefined;
    editedStory: Story | undefined;
    setEditedStory: React.Dispatch<React.SetStateAction<Story | undefined>>;
}
