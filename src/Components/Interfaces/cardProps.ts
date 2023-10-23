export interface CardProps {
    cardTitle?: string
    placeholderText?: string
    cardControl?: string
    next?: string
    back?: string
    setStoryState?: React.Dispatch<React.SetStateAction<string>>
    storyState?: string
}
