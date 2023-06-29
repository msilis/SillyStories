const storyFetch = () => {
  return fetch("http://localhost:8086/randomStory")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.story;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export { storyFetch };
