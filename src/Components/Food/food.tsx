import { CARD_TEXT } from '../../ui-text/ui-text';
import InfoCard from '../Card/card';
import { type CardProps } from '../Interfaces/cardProps';
import { PAGE_ROUTES } from '../../config/pageRoutes';

export default function Food(): JSX.Element {
    const infoCardProps: CardProps = {
        cardTitle: CARD_TEXT.foodCardTitle,
        placeholderText: CARD_TEXT.foodPlaceholderText,
        cardControl: 'foodInput',
        next: PAGE_ROUTES.city,
        back: PAGE_ROUTES.color,
    };

    return <InfoCard cardProps={infoCardProps} />;
}
