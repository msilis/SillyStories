import { showErrorToast, showSuccessToast } from "./toasts";

const deleteStory = (id: string) => {
  console.log(id);

  const storyId = { storyId: id };
  console.log({ storyId });
  return fetch("http://localhost:8086/deleteStory", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(storyId),
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        showSuccessToast("Story deleted sucessfully");
        return response.json();
      } else {
        showErrorToast("I couldn't delete your story.");
      }
    })
    .catch((err) => {
      console.log(err);
      showErrorToast("There was an issue deleting the story.");
    });
};

export { deleteStory };
