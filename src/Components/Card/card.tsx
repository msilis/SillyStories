import style from "./card.module.css";
import { useRef, RefObject } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { showToast } from "../Utilities/toasts";
import { storyFetch } from "../Utilities/sillyNetworkCall";
import { CardProps } from "../Interfaces/cardProps";

export default function InfoCard(props: { cardProps: CardProps }): JSX.Element {
  const navigate = useNavigate();

  //Input refs
  const inputValue: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  //Get values from localStorage to populate input fields
  const savedInputValue =
    localStorage.getItem(`${props.cardProps.cardControl}`) || "";

  //Next button
  const nextClick = () => {
    if (inputValue.current?.value === "") {
      showToast(`You need to enter a(n) ${props.cardProps.placeholderText}`);
    } else {
      navigate(`${props.cardProps.next}`);
      console.log(inputValue.current?.value);

      localStorage.setItem(
        `${props.cardProps.cardControl}`,
        inputValue.current?.value || "",
      );
    }
  };

  //Back button

  function backClick() {
    navigate(`${props.cardProps.back}`);
  }

  //Finish button
  async function finishClick() {
    try {
      const fetchedStory = await storyFetch();
      if (props.cardProps.setStoryState) {
        localStorage.setItem(
          `${props.cardProps.cardControl}`,
          inputValue.current?.value || "",
        );
        props.cardProps.setStoryState(fetchedStory);
        navigate("/finish");
      }
    } catch (err) {
      showToast("There was a problem");
      console.log(err);
    }
  }

  return (
    <Card className={style.cardContainer}>
      <Card.Body className={style.cardBody}>
        <Card.Title className={style.cardTitle}>
          {props.cardProps.cardTitle}
        </Card.Title>
        <Form.Group controlId={props.cardProps.cardControl}>
          <Form.Control
            type="text"
            defaultValue={savedInputValue || ""}
            placeholder={props.cardProps.placeholderText}
            className={style.input}
            ref={inputValue}
          />
        </Form.Group>
        <div className={style.buttonContainer}>
          <Button className={style.button} onClick={backClick}>
            Back
          </Button>
          {props.cardProps.cardControl === "animalInput" ? (
            <Button className={style.button} onClick={finishClick}>
              Finish
            </Button>
          ) : (
            <Button className={style.button} onClick={nextClick}>
              Next
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
