import { BUTTON_TEXT, CARD_TEXT } from '../../ui-text/ui-text';
import style from './home.module.css';
import { Card, Button } from 'react-bootstrap';

interface homeProps {
    onClick: () => void;
}

export default function Home(props: homeProps): JSX.Element {
    return (
        <Card className={style.cardContainer}>
            <Card.Body>
                <Card.Title>{CARD_TEXT.homeCardText}</Card.Title>
                <Button className={style.goButton} onClick={props.onClick}>
                    {BUTTON_TEXT.goButtonText}
                </Button>
            </Card.Body>
        </Card>
    );
}
