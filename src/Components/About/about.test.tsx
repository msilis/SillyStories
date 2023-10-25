import { expect, it, describe } from 'vitest';
import { render } from '@testing-library/react';
import About from './about';
import { BrowserRouter } from 'react-router-dom';
import { PAGE_TEXT } from '../../ui-text/ui-text';

describe('About component', () => {
    it('should render the about component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <About />
            </BrowserRouter>
        );
        expect(getByText(PAGE_TEXT.aboutText)).toBeTruthy();
    });
});
