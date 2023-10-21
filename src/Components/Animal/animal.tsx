import InfoCard from '../Card/card'
import { CardProps } from '../Interfaces/cardProps'
import { AnimalProps } from '../Interfaces/animalProps'
import { CARD_TEXT } from '../../ui-text/ui-text'
import { PAGE_ROUTES } from '../../config/pageRoutes'

export default function Animal(props: AnimalProps): JSX.Element {
    const infoCardProps: CardProps = {
        cardTitle: CARD_TEXT.animalCardTitle,
        placeholderText: CARD_TEXT.animalPlaceholderText,
        cardControl: 'animalInput',
        back: PAGE_ROUTES.city,
        setStoryState: props.setStoryState,
    }

    return <InfoCard cardProps={infoCardProps} />
}
