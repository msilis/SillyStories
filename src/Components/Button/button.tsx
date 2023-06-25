import style from "./button.module.css";

type buttonProps = {
  buttonText: string;
  onClick: () => void;
};

export default function Button(props: buttonProps): JSX.Element {
  return (
    <div className={style.buttonContainer} onClick={props.onClick}>
      <button className={style.button}>{props.buttonText}</button>
    </div>
  );
}
