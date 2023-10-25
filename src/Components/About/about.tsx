import style from './about.module.css';
import { PAGE_TEXT } from '../../ui-text/ui-text';

export default function About(): JSX.Element {
    return (
        <div className={style.aboutContainer}>
            <h2>{PAGE_TEXT.aboutText}</h2>
        </div>
    );
}
