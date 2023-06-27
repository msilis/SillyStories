import style from "./card.module.css";
import { useRef, RefObject } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { showToast } from "../Utilities/toasts";

export interface CardProps {
  cardTitle?: string;
  placeholderText?: string;
  cardControl?: string;
  next?: string;
  back?: string;
}

export default function InfoCard(props: { cardProps: CardProps }): JSX.Element {
  const navigate = useNavigate();

  //Input refs
  const inputValue: RefObject<HTMLInputElement> =
    useRef<HTMLInputElement>(null);

  //console
  console.log(props.cardProps.cardTitle);
  console.log(props.cardProps.next);
  console.log(props.cardProps.back);

  //Next button
  const nextClick = () => {
    if (inputValue.current?.value === "") {
      showToast(`You need to enter a(n) ${props.cardProps.placeholderText}`);
    } else {
      navigate(`${props.cardProps.next}`);
      console.log(inputValue.current?.value);

      localStorage.setItem(
        `${props.cardProps.cardControl}`,
        inputValue.current?.value || ""
      );
    }
  };

  //Back button

  function backClick() {
    navigate(`${props.cardProps.back}`);
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
            placeholder={props.cardProps.placeholderText}
            className={style.input}
            ref={inputValue}
          />
        </Form.Group>
        <div className={style.buttonContainer}>
          <Button className={style.button} onClick={backClick}>
            Back
          </Button>
          <Button className={style.button} onClick={nextClick}>
            Next
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
