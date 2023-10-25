import { expect, it, describe } from 'vitest';
import { render } from '@testing-library/react';
import Food from './food';
import { BrowserRouter } from 'react-router-dom';
import { CARD_TEXT } from '../../ui-text/ui-text';

describe('Food component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Food />
            </BrowserRouter>
        );
        expect(getByText(CARD_TEXT.foodCardTitle)).toBeTruthy();
    });
});

describe('Food component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Food />
            </BrowserRouter>
        );
        expect(getByText('Next')).toBeTruthy();
    });
});

describe('FriendName component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Food />
            </BrowserRouter>
        );
        expect(getByText('Back')).toBeTruthy();
    });
});
