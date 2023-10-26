import { type Story } from './story';

export interface StoryEdit {
    storyState: Story | undefined;
    setEditedStory?: React.Dispatch<React.SetStateAction<Story | undefined>>;
}
