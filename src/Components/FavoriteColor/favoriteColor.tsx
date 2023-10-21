import { CARD_TEXT } from '../../ui-text/ui-text'
import InfoCard from '../Card/card'
import { CardProps } from '../Interfaces/cardProps'

export default function FavoriteColor(): JSX.Element {
  const infoCardProps: CardProps = {
    cardTitle: CARD_TEXT.colorCardTitle,
    placeholderText: CARD_TEXT.colorPlaceholderText,
    cardControl: 'colorInput',
    next: '/food', // TODO (ms) This should be in a global route file
    back: '/start',
  }

  return <InfoCard cardProps={infoCardProps} />
}
