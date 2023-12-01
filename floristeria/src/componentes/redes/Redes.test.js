import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Redes from './redes/redes';

describe('Redes component', () => {
  test('renders social media icons', () => {
    render(<Redes />);
    
    const facebookLink = screen.getByRole('link', { name: 'Imagen enlazada' });
    expect(facebookLink).toBeInTheDocument();
    
    const instagramLink = screen.getByRole('link', { name: 'Imagen enlazada' });
    expect(instagramLink).toBeInTheDocument();
    
    const twitterLink = screen.getByRole('link', { name: 'Imagen enlazada' });
    expect(twitterLink).toBeInTheDocument();
  });

  test('redirects to the correct URLs when clicked', () => {
    render(<Redes />);
    
    const facebookLink = screen.getByRole('link', { name: 'Imagen enlazada' });
    userEvent.click(facebookLink);
    expect(window.location.href).toEqual('https://es-la.facebook.com/PLANTAS.FLORES/');

    const instagramLink = screen.getByRole('link', { name: 'Imagen enlazada' });
    userEvent.click(instagramLink);
    expect(window.location.href).toEqual('https://www.instagram.com/florescolombia.co/');

    const twitterLink = screen.getByRole('link', { name: 'Imagen enlazada' });
    userEvent.click(twitterLink);
    expect(window.location.href).toEqual('https://twitter.com/floresvirtual');
  });
});
