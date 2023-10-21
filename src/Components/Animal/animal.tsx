import InfoCard from '../Card/card'
import { CardProps } from '../Interfaces/cardProps'
import { AnimalProps } from '../Interfaces/animalProps'

export default function Animal(props: AnimalProps): JSX.Element {
  const infoCardProps: CardProps = {
    cardTitle: 'I need the name of an animal!',
    placeholderText: 'Animal name',
    cardControl: 'animalInput',
    back: '/city',
    setStoryState: props.setStoryState,
  }

  return <InfoCard cardProps={infoCardProps} />
}
