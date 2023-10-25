import { expect, it, describe } from 'vitest';
import { render } from '@testing-library/react';
import FriendName from './friendName';
import { BrowserRouter } from 'react-router-dom';

describe('FriendName component', () => {
    it('should render the component', () => {
        const { getByText } = render(
            <BrowserRouter>
                <FriendName />
            </BrowserRouter>
        );
        expect(getByText("Write a friend's name:")).toBeTruthy();
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
