import { expect, it, describe } from 'vitest';
import { render } from '@testing-library/react';
import City from './city';
import { BrowserRouter } from 'react-router-dom';

describe('Food component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <City />
            </BrowserRouter>
        );
        expect(getByText('Give me the name of a city!')).toBeTruthy();
    });
});

describe('Food component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <City />
            </BrowserRouter>
        );
        expect(getByText('Next')).toBeTruthy();
    });
});

describe('FriendName component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <City />
            </BrowserRouter>
        );
        expect(getByText('Back')).toBeTruthy();
    });
});
