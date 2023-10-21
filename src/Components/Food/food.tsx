import { CARD_TEXT } from '../../ui-text/ui-text'
import InfoCard from '../Card/card'
import { CardProps } from '../Interfaces/cardProps'

export default function Food(): JSX.Element {
  const infoCardProps: CardProps = {
    cardTitle: CARD_TEXT.foodCardTitle,
    placeholderText: CARD_TEXT.foodPlaceholderText,
    cardControl: 'foodInput',
    next: '/city',
    back: '/color',
  }

  return <InfoCard cardProps={infoCardProps} />
}
