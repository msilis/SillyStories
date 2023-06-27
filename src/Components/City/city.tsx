import InfoCard, { CardProps } from "../Card/card";

export default function City(): React.ReactNode {
  const infoCardprops: CardProps = {
    cardTitle: "Give me the name of a city!",
    placeholderText: "City name",
    cardControl: "cityNameInput",
    next: "/animal",
    back: "/food",
  };

  return <InfoCard cardProps={infoCardprops} />;
}
