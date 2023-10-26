import { type Story } from './story';

export interface AnimalProps {
    setStoryState: React.Dispatch<React.SetStateAction<Story | undefined>>;
}
