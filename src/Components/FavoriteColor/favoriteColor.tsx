import { PAGE_ROUTES } from '../../config/pageRoutes'
import { CARD_TEXT } from '../../ui-text/ui-text'
import InfoCard from '../Card/card'
import { CardProps } from '../Interfaces/cardProps'

export default function FavoriteColor(): JSX.Element {
    const infoCardProps: CardProps = {
        cardTitle: CARD_TEXT.colorCardTitle,
        placeholderText: CARD_TEXT.colorPlaceholderText,
        cardControl: 'colorInput',
        next: PAGE_ROUTES.food,
        back: PAGE_ROUTES.start,
    }

    return <InfoCard cardProps={infoCardProps} />
}
