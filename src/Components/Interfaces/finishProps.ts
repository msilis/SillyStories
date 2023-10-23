export interface FinishState {
  storyState: string;
  editedStory: string;
  setEditedStory: React.Dispatch<React.SetStateAction<string>>;
}
