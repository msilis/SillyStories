import { StoryEdit } from "../Interfaces/editProps";

const storyEdit = (props: StoryEdit) => {
  //Get story from state
  const storyToEdit = props.storyState;

  //Values from localStorage
  const nameValue = localStorage.getItem("friendNameInput") || "";
  const cityValue = localStorage.getItem("cityNameInput") || "";
  const colorValue = localStorage.getItem("colorInput") || "";
  const foodValue = localStorage.getItem("foodInput") || "";

  console.log(storyToEdit, "story to edit");
  return;
};

export { storyEdit };
