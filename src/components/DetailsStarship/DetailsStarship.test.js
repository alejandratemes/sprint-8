/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { screen, render } from '@testing-library/react';
import { Starship } from './DetailsStarship';
import { BrowserRouter } from 'react-router-dom';

test('should render the selected text', async () => {
    render(
        <BrowserRouter>
            <Starship />
        </BrowserRouter>
    );
    const text = await screen.findByText(/atmospheric speed/i);
    expect(text).toBeInTheDocument();
});

// <BrowserRouter>
//     <LogIn />
// </BrowserRouter>