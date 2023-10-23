import { StoryEdit } from '../Interfaces/editProps';

const storyEdit = (props: StoryEdit) => {
    const Name = localStorage.getItem('friendNameInput') || '';
    const City = localStorage.getItem('cityNameInput') || '';
    const Color = localStorage.getItem('colorInput') || '';
    const Food = localStorage.getItem('foodInput') || '';
    const Animal = localStorage.getItem('animalInput') || '';

    const replacementValues = {
        Name,
        City,
        Color,
        Food,
        Animal,
    };

    const story = props.storyState;
    let editedStory = story;

    Object.entries(replacementValues).forEach(([key, value]) => {
        const pattern = new RegExp(`\\[${key}\\]`, 'g');
        editedStory = editedStory.replace(pattern, value);
    });
    return editedStory;
};

export { storyEdit };
