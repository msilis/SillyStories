import { expect, it, describe } from 'vitest';
import { render } from '@testing-library/react';
import FriendName from './friendName';
import { BrowserRouter } from 'react-router-dom';
import { CARD_TEXT } from '../../ui-text/ui-text';

describe('FriendName component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <FriendName />
            </BrowserRouter>
        );
        expect(getByText(CARD_TEXT.friendCardTitle)).toBeTruthy();
    });
});

describe('FriendName component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <FriendName />
            </BrowserRouter>
        );
        expect(getByText('Next')).toBeTruthy();
    });
});

describe('FriendName component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <FriendName />
            </BrowserRouter>
        );
        expect(getByText('Back')).toBeTruthy();
    });
});
