import { TOAST_TEXT } from "../../ui-text/ui-text";
import { SaveProps } from "../Interfaces/saveProps";
import { method } from "./sillyNetworkCall";
import { showErrorToast, showSuccessToast } from "./toasts";

const saveStory = (displayStory: SaveProps) => {
  const storyData = {
    story: displayStory,
  };
  return fetch("http://localhost:8086/saveStory", {
    method: method.post,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(storyData),
  })
    .then((response) => {
      if (response.status === 201) {
        showSuccessToast("Story saved!");
        return response.json();
      }
    })
    .catch((err) => {
      console.log(err);
      showErrorToast(TOAST_TEXT.saveStoryError);
    });
};

export { saveStory };
