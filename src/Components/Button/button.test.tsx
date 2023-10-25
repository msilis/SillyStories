import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';
import { describe, expect, it, vi } from 'vitest';

describe('Button component', () => {
    it('renders the button text', () => {
        const buttonText = 'Click me';
        render(<Button buttonText={buttonText} onClick={() => {}} />);
        const buttonElement = screen.getByText(buttonText);
        expect(buttonElement).toBeTruthy();
    });

    it('calls the onClick function when the button is clicked', () => {
        const onClickMock = vi.fn();
        render(<Button buttonText="Click me" onClick={onClickMock} />);
        const buttonElement = screen.getByText('Click me');
        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalled();
    });
});
