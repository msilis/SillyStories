import InfoCard, { CardProps } from "../Card/card";

export default function FavoriteColor(): JSX.Element {
  const infoCardProps: CardProps = {
    cardTitle: "Give me a colour!",
    placeholderText: "Colour",
    cardControl: "colorInput",
    next: "/food",
    back: "/start",
  };

  return <InfoCard cardProps={infoCardProps} />;
}
