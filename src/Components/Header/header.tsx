import style from "./header.module.css";
import headerImage from "../../assets/hiAugust.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";

export default function Header() {
  return (
    <div className={style.headerContainer}>
      <Link to="/">
        <img src={headerImage} className={style.headerImage} />
      </Link>
      <Footer />
    </div>
  );
}
