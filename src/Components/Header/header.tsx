import style from "./header.module.css";
import headerImage from "../../assets/hiAugust.png";

export default function Header() {
  return (
    <div className={style.headerContainer}>
      <img src={headerImage} className={style.headerImage} />
    </div>
  );
}
