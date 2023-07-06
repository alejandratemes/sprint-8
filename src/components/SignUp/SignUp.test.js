/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { screen, render } from '@testing-library/react';
import { SignUp } from '../SignUp';

beforeEach(() => render(<SignUp />));
describe('SignUp component', () => {
    it('should renders a create account button', () => {
        // screen.debug();
        const button = screen.getByText(/create account/i);
        expect(button).toBeInTheDocument();
    });
    it('should renders the form element', () => {
        const input = screen.getByPlaceholderText(/first name/i);
        expect(input).toBeInTheDocument();
    });
});