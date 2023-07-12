import { Link } from "react-router-dom";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <div className={style.footerContainer}>
      <ul className={style.footerList}>
        <li className={style.footerListItem}>
          <Link to="/saved" className={style.listLink}>
            Saved Stories
          </Link>
        </li>
        <li className={style.footerListItem}>
          <Link to="/about" className={style.listLink}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
