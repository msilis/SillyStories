import InfoCard, { CardProps } from "../Card/card";

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
