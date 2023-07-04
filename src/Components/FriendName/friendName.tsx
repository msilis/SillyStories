import InfoCard from "../Card/card";
import { CardProps } from "../Interfaces/cardProps";

export default function FriendName(): JSX.Element {
  const infoCardProps: CardProps = {
    cardTitle: "Write a friend's name:",
    placeholderText: "Friend's name",
    cardControl: "friendNameInput",
    next: "/color",
    back: "/",
  };

  console.log(infoCardProps, "infoCard props");

  return <InfoCard cardProps={infoCardProps} />;
}
