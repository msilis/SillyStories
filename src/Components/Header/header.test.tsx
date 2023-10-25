import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './header';
import { BrowserRouter } from 'react-router-dom';

describe('Header component', () => {
    it('should render the component', () => {
        const { getByAltText } = render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        expect(getByAltText('August logo')).toBeTruthy();
    });
});
