import { type Dispatch, type SetStateAction } from 'react';
import { type Story } from './story';

export interface AnimalProps {
    setStoryState: Dispatch<SetStateAction<Story | undefined>>;
}
