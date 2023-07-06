/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { screen, render } from '@testing-library/react';
import { LogIn } from '../LogIn';
import { BrowserRouter } from 'react-router-dom';

test('the login button must be functional', () => {
    render(
        <BrowserRouter>
            <LogIn />
        </BrowserRouter>
    );
    const btnLogIn = screen.getByRole('button', { name: /log in/i });
    expect(btnLogIn).toBeInTheDocument();
});