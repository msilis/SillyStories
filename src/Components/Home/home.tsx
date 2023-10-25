import style from './home.module.css';
import { Card, Button } from 'react-bootstrap';

interface homeProps {
    onClick: () => void;
}

export default function Home(props: homeProps): JSX.Element {
    return (
        <Card className={style.cardContainer}>
            <Card.Body>
                <Card.Title>Let&apos;s get started!</Card.Title>
                <Button className={style.goButton} onClick={props.onClick}>
                    Go!
                </Button>
            </Card.Body>
        </Card>
    );
}
