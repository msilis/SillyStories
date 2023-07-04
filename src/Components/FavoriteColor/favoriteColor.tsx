import InfoCard from "../Card/card";
import { CardProps } from "../Interfaces/cardProps";

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
