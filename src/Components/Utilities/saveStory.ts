import { SaveProps } from "../Interfaces/saveProps";

const saveStory = (displayStory: SaveProps) => {
  const storyData = {
    story: displayStory,
  };
  console.log(storyData);
  return fetch("http://localhost:8086/saveStory", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(storyData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
};

export { saveStory };
