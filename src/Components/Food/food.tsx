import InfoCard, { CardProps } from "../Card/card";
import { useNavigate } from "react-router-dom";

export default function Food(): JSX.Element {
  const navigate = useNavigate();

  function nextClick() {
    navigate("/city");
  }
  function backClick() {
    navigate("/color");
  }

  const infoCardProps: CardProps = {
    cardTitle: "Write the name of a food:",
    placeholderText: "Food",
    cardControl: "foodInput",
    nextClick: nextClick,
    backClick: backClick,
  };

  return <InfoCard cardProps={infoCardProps} />;
}
