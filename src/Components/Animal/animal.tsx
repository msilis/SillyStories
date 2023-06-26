import InfoCard, { CardProps } from "../Card/card";
import { useNavigate } from "react-router-dom";

export default function Animal(): JSX.Element {
  const navigate = useNavigate();

  function nextClick() {
    navigate("/");
  }
  function backClick() {
    navigate("/city");
  }

  const infoCardProps: CardProps = {
    cardTitle: "I need the name of an animal!",
    placeholderText: "Animal name",
    cardControl: "animalInput",
    nextClick: nextClick,
    backClick: backClick,
  };

  return <InfoCard cardProps={infoCardProps} />;
}
