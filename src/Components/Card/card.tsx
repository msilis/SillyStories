import style from "./card.module.css";
import { Card, Form, Button } from "react-bootstrap";

export interface CardProps {
  cardTitle?: string;
  placeholderText?: string;
  cardControl?: string;
  nextClick?: () => void;
  backClick?: () => void;
}

export default function InfoCard(props: { cardProps: CardProps }): JSX.Element {
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
          />
        </Form.Group>
        <div className={style.buttonContainer}>
          <Button className={style.button} onClick={props.cardProps.backClick}>
            Back
          </Button>
          <Button className={style.button} onClick={props.cardProps.nextClick}>
            Next
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
