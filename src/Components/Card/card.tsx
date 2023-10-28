import style from './card.module.css';
import { useRef, type RefObject, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { showErrorToast } from '../Utilities/toasts';
import { storyFetch } from '../Utilities/sillyNetworkCall';
import { type CardProps } from '../Interfaces/cardProps';
import { type ButtonClick } from '../Interfaces/buttonClick';
import { PAGE_ROUTES } from '../../config/pageRoutes';
import { BUTTON_TEXT, TOAST_TEXT } from '../../ui-text/ui-text';

export default function InfoCard(props: { cardProps: CardProps }): JSX.Element {
    const navigate = useNavigate();

    // Input refs
    const inputValue: RefObject<HTMLInputElement> =
        useRef<HTMLInputElement>(null);

    // Get values from localStorage to populate input fields
    const savedInputValue =
        localStorage.getItem(`${props.cardProps.cardControl}`) ?? '';

    // Next button
    const nextClick: ButtonClick = () => {
        const inputValueValue = inputValue.current?.value ?? '';
        if (inputValueValue === '') {
            showErrorToast(
                `You need to enter a(n) ${props.cardProps.placeholderText}`
            );
        } else {
            navigate(`${props.cardProps.next}`);

            localStorage.setItem(
                `${props.cardProps.cardControl}`,
                inputValueValue
            );
        }
    };

    // Back button

    const backClick: ButtonClick = () => {
        navigate(`${props.cardProps.back}`);
    };

    // Finish button
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const finishClick: ButtonClick = async () => {
        try {
            const fetchedStory = await storyFetch();
            if (props.cardProps.setStoryState != null) {
                localStorage.setItem(
                    `${props.cardProps.cardControl}`,
                    inputValue.current?.value ?? ''
                );
                props.cardProps.setStoryState(fetchedStory);
                navigate(PAGE_ROUTES.finish);
            }
        } catch (err) {
            showErrorToast(TOAST_TEXT.genericError);
            console.log(err);
        }
    };

    function handleEnterKey(e: React.KeyboardEvent<HTMLInputElement>): void {
        if (
            e.key === 'Enter' &&
            props.cardProps.cardControl !== 'animalInput'
        ) {
            nextClick();
        }
        if (
            e.key === 'Enter' &&
            props.cardProps.cardControl === 'animalInput'
        ) {
            finishClick();
        }
    }

    useEffect(() => {
        if (inputValue.current != null) {
            inputValue.current.focus();
        }
    }, []);

    return (
        <Card className={style.cardContainer}>
            <Card.Body className={style.cardBody}>
                <Card.Title className={style.cardTitle}>
                    {props.cardProps.cardTitle}
                </Card.Title>
                <Form.Group controlId={props.cardProps.cardControl}>
                    <Form.Control
                        type="text"
                        defaultValue={savedInputValue}
                        placeholder={props.cardProps.placeholderText}
                        className={style.input}
                        ref={inputValue}
                        onKeyDown={handleEnterKey}
                    />
                </Form.Group>
                <div className={style.buttonContainer}>
                    <Button className={style.button} onClick={backClick}>
                        {BUTTON_TEXT.backButtonText}
                    </Button>
                    {props.cardProps.cardControl === 'animalInput' ? (
                        <Button className={style.button} onClick={finishClick}>
                            {BUTTON_TEXT.finishButtonText}
                        </Button>
                    ) : (
                        <Button className={style.button} onClick={nextClick}>
                            {BUTTON_TEXT.nextButtonText}
                        </Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}
