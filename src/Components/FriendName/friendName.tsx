import { PAGE_ROUTES } from '../../config/pageRoutes';
import { CARD_TEXT } from '../../ui-text/ui-text';
import InfoCard from '../Card/card';
import { type CardProps } from '../Interfaces/cardProps';

export default function FriendName(): JSX.Element {
    const infoCardProps: CardProps = {
        cardTitle: CARD_TEXT.friendCardTitle,
        placeholderText: CARD_TEXT.friendPlaceholderText,
        cardControl: 'friendNameInput',
        next: PAGE_ROUTES.color,
        back: PAGE_ROUTES.home,
    };

    return <InfoCard cardProps={infoCardProps} />;
}
