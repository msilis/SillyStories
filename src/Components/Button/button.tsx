import style from "./button.module.css";

type buttonProps = {
  buttonText: string;
};

export default function Button(props: buttonProps): JSX.Element {
  return (
    <div className={style.buttonContainer}>
      <button className={style.button}>{props.buttonText}</button>
    </div>
  );
}
