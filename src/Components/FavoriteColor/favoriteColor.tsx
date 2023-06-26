import InfoCard, { CardProps } from "../Card/card";
import { useNavigate } from "react-router-dom";

export default function FavoriteColor(): JSX.Element {
  const navigate = useNavigate();

  function nextClick() {
    navigate("/food");
  }

  function backClick() {
    navigate("/start");
  }

  const infoCardProps: CardProps = {
    cardTitle: "Give me a colour!",
    placeholderText: "Colour",
    cardControl: "colorInput",
    nextClick: nextClick,
    backClick: backClick,
  };

  return <InfoCard cardProps={infoCardProps} />;
}
