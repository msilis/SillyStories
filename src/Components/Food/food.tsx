import InfoCard, { CardProps } from "../Card/card";

export default function Food(): JSX.Element {
  const infoCardProps: CardProps = {
    cardTitle: "Write the name of a food:",
    placeholderText: "Food",
    cardControl: "foodInput",
    next: "/city",
    back: "/color",
  };

  return <InfoCard cardProps={infoCardProps} />;
}
