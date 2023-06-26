import InfoCard, { CardProps } from "../Card/card";
import { useNavigate } from "react-router-dom";

export default function FriendName(): JSX.Element {
  const navigate = useNavigate();

  function nextClick() {
    navigate("/color");
  }

  function backClick() {
    navigate("/");
  }

  const infoCardProps: CardProps = {
    cardTitle: "Write a friend's name:",
    placeholderText: "Friend's name",
    cardControl: "friendNameInput",
    nextClick: nextClick,
    backClick: backClick,
  };

  return <InfoCard cardProps={infoCardProps} />;
}
