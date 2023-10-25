import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './home';
import jest from 'jest-mock';

describe('Home component', () => {
    it('should render the component', () => {
        const { getByText } = render(<Home onClick={() => {}} />);
        expect(getByText("Let's get started!")).toBeTruthy();
    });

    it('should call the onClick function when the button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Home onClick={onClickMock} />);
        fireEvent.click(getByText('Go!'));
        expect(onClickMock).toHaveBeenCalled();
    });
});
