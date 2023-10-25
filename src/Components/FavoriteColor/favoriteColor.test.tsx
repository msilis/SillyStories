import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import FavoriteColor from './favoriteColor';
import { BrowserRouter } from 'react-router-dom';
import { CARD_TEXT } from '../../ui-text/ui-text';

describe('FavoriteColor component', () => {
    it('should render favorite color card', () => {
        const { getByText } = render(
            <BrowserRouter>
                <FavoriteColor />
            </BrowserRouter>
        );
        expect(getByText(CARD_TEXT.colorCardTitle)).toBeTruthy();
    });
});
