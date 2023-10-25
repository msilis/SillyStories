import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './home';

describe('Home component', () => {
    it('renders the title and button', () => {
        const onClickMock = jest.fn();
        render(<Home onClick={onClickMock} />);
        const titleElement = screen.getByText(/let's get started!/i);
        const buttonElement = screen.getByRole('button', { name: /go!/i });
        expect(titleElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    it('calls the onClick function when the button is clicked', () => {
        const onClickMock = jest.fn();
        render(<Home onClick={onClickMock} />);
        const buttonElement = screen.getByRole('button', { name: /go!/i });
        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalled();
    });
});
