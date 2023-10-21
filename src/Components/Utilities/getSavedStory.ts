const fetchSavedStories = () => {
    return fetch('http://localhost:8086/getSavedStories')
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch((err) => {
            console.log(err)
            throw err
        })
}

export { fetchSavedStories }
