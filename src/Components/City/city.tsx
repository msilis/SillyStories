import { CARD_TEXT } from '../../ui-text/ui-text'
import InfoCard from '../Card/card'
import { CardProps } from '../Interfaces/cardProps'

export default function City(): React.ReactNode {
  const infoCardprops: CardProps = {
    cardTitle: CARD_TEXT.cityCardTitle,
    placeholderText: CARD_TEXT.cityCPlaceholderText,
    cardControl: 'cityNameInput',
    next: '/animal',
    back: '/food',
  }

  return <InfoCard cardProps={infoCardprops} />
}
