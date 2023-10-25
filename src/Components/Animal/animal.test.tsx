import { expect, it, describe } from 'vitest';
import { render } from '@testing-library/react';
import Animal from './animal';
import { BrowserRouter } from 'react-router-dom';
import { CARD_TEXT } from '../../ui-text/ui-text';

describe('Food component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Animal />
            </BrowserRouter>
        );
        expect(getByText(CARD_TEXT.animalCardTitle)).toBeTruthy();
    });
});

describe('Food component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Animal />
            </BrowserRouter>
        );
        expect(getByText('Finish')).toBeTruthy();
    });
});

describe('FriendName component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Animal />
            </BrowserRouter>
        );
        expect(getByText('Back')).toBeTruthy();
    });
});
