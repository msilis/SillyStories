import { type FinishState } from '../Interfaces/finishProps'
import style from './finish.module.css'
import { useEffect } from 'react'
import { storyEdit } from '../Utilities/storyEdit'
import { type StoryEdit } from '../Interfaces/editProps'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { type SaveResponse, saveStory } from '../Utilities/saveStory'
import { type SaveProps } from '../Interfaces/saveProps'
import { PAGE_ROUTES } from '../../config/pageRoutes'

export default function Finish(
    props: FinishState & StoryEdit
): React.ReactNode {
    const displayStory = storyEdit({ storyState: props.storyState })
    const navigate = useNavigate()

    useEffect(() => {
        storyEdit({ storyState: props.storyState })
        // Disable empty array eslint complaint -- I really do want it to run only once!
    }, [])

    // New story click functionality
    const newClick = (): void => {
        navigate(PAGE_ROUTES.home)
    }

    // Save button functionality
    const saveClick = async (): Promise<SaveResponse | undefined> => {
        const saveProps: SaveProps = {
            displayStory,
        }
        return await saveStory(saveProps)
    }

    return (
        <div className={style.storyContainer}>
            <h1>Here is your story:</h1>
            <pre className={style.storyStyle}>{displayStory}</pre>
            <div className={style.buttonContainer}>
                <Button className={style.button} onClick={newClick}>
                    New Story
                </Button>
                <Button
                    className={style.button}
                    onClick={() => {
                        void saveClick()
                    }}
                >
                    Save
                </Button>
            </div>
        </div>
    )
}
