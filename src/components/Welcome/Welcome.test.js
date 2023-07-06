/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { Home } from './Welcome';
import { BrowserRouter } from 'react-router-dom';

test('starships link must be exists and be functional', () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
    const btnLogIn = screen.getByRole('link', { name: /starships/i });
    expect(btnLogIn).toBeInTheDocument();
    fireEvent.click(btnLogIn);
});