const storyFetch = () => {
    return fetch('https://silly-stories-backend.onrender.com/randomStory')
        .then((response) => response.json())
        .then((data) => {
            return data.story
        })
        .catch((err) => {
            console.log(err)
            throw err
        })
}

export { storyFetch }
