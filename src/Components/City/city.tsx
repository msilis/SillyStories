import InfoCard, { CardProps } from "../Card/card";
import { useNavigate } from "react-router-dom";

export default function City(): JSX.Element {
  const navigate = useNavigate();

  function nextClick() {
    navigate("/animal");
  }

  function backClick() {
    navigate("/food");
  }

  const infoCardprops: CardProps = {
    cardTitle: "Give me the name of a city!",
    placeholderText: "City name",
    cardControl: "cityNameInput",
    nextClick: nextClick,
    backClick: backClick,
  };

  return <InfoCard cardProps={infoCardprops} />;
}
