import { StoryEdit } from "../Interfaces/editProps";

const storyEdit = (props: StoryEdit) => {
  const storyToEdit = props.storyState;
  console.log(storyToEdit, "story to edit");
  return;
};

export { storyEdit };
