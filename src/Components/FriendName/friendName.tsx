import { CARD_TEXT } from '../../ui-text/ui-text'
import InfoCard from '../Card/card'
import { CardProps } from '../Interfaces/cardProps'

export default function FriendName(): JSX.Element {
  const infoCardProps: CardProps = {
    cardTitle: CARD_TEXT.friendCardTitle,
    placeholderText: CARD_TEXT.friendPlaceholderText,
    cardControl: 'friendNameInput',
    next: '/color', //TODO (ms) this will need a route file
    back: '/',
  }

  return <InfoCard cardProps={infoCardProps} />
}
