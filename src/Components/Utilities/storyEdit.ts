import { type StoryEdit } from '../Interfaces/editProps';
import { type Story } from '../Interfaces/story';

const storyEdit = (props: StoryEdit): Story => {
    const Name = localStorage.getItem('friendNameInput') ?? '';
    const City = localStorage.getItem('cityNameInput') ?? '';
    const Color = localStorage.getItem('colorInput') ?? '';
    const Food = localStorage.getItem('foodInput') ?? '';
    const Animal = localStorage.getItem('animalInput') ?? '';

    const replacementValues = {
        Name,
        City,
        Color,
        Food,
        Animal,
    };

    const story = props.storyState ?? '';
    let editedStory = story;

    Object.entries(replacementValues).forEach(([key, value]) => {
        const pattern = new RegExp(`\\[${key}\\]`, 'g');
        if (typeof editedStory === 'string') {
            editedStory = editedStory.replace(pattern, value);
        }
    });
    return typeof editedStory === 'string'
        ? { _id: '', story: editedStory }
        : editedStory;
};

export { storyEdit };
