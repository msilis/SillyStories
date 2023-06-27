import InfoCard, { CardProps } from "../Card/card";

export default function Animal(): JSX.Element {
  const infoCardProps: CardProps = {
    cardTitle: "I need the name of an animal!",
    placeholderText: "Animal name",
    cardControl: "animalInput",
    next: "/finish",
    back: "/city",
  };

  return <InfoCard cardProps={infoCardProps} />;
}
