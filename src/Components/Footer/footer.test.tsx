import { expect, it, describe } from 'vitest';
import { render } from '@testing-library/react';
import Footer from './footer';
import { BrowserRouter } from 'react-router-dom';
import { PAGE_ROUTES } from '../../config/pageRoutes';

describe('Footer component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
        expect(getByText('Saved Stories')).toBeTruthy();
        expect(getByText('About')).toBeTruthy();
    });

    it('should have the correct links', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
        );
        expect(getByText('Saved Stories').getAttribute('href')).toBe(
            PAGE_ROUTES.saved
        );
        expect(getByText('About').getAttribute('href')).toBe(PAGE_ROUTES.about);
    });
});
