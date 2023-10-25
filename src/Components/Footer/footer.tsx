import { Link } from 'react-router-dom';
import style from './footer.module.css';
import { PAGE_ROUTES } from '../../config/pageRoutes';

export default function Footer(): JSX.Element {
    return (
        <div className={style.footerContainer}>
            <ul className={style.footerList}>
                <li className={style.footerListItem}>
                    <Link to={PAGE_ROUTES.saved} className={style.listLink}>
                        Saved Stories
                    </Link>
                </li>
                <li className={style.footerListItem}>
                    <Link to={PAGE_ROUTES.about} className={style.listLink}>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    );
}
