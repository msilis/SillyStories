import style from './button.module.css';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type buttonProps = {
    buttonText: string;
    onClick: () => void;
};

const Button = (props: buttonProps): JSX.Element => {
    return (
        <div className={style.buttonContainer} onClick={props.onClick}>
            <button className={style.button}>{props.buttonText}</button>
        </div>
    );
};

export default Button;
