import style from './header.module.css'
import headerImage from '../../assets/hiAugust.png'
import { Link } from 'react-router-dom'
import Footer from '../Footer/footer'
import { PAGE_ROUTES } from '../../config/pageRoutes'

export default function Header() {
    return (
        <div className={style.headerContainer}>
            <Link to={PAGE_ROUTES.home}>
                <img src={headerImage} className={style.headerImage} />
            </Link>
            <Footer />
        </div>
    )
}
