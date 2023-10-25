import { expect, it, describe } from 'vitest';
import { render } from '@testing-library/react';
import Food from './food';
import { BrowserRouter } from 'react-router-dom';

describe('Food component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <Food />
            </BrowserRouter>
        );
        expect(getByText('Write the name of a food:')).toBeTruthy();
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
