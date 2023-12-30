import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './user_login'; // adjust this import path to your file structure

describe('Login Component', () => {
  test('renders Login button', () => {
    render(<Login />);
    const loginButton = screen.getByRole('button', { name: /Login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test('renders email input', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/Email address:/i);
    expect(emailInput).toBeInTheDocument();
  });

  test('renders password input', () => {
    render(<Login />);
    const passwordInput = screen.getByLabelText(/Password:/i);
    expect(passwordInput).toBeInTheDocument();
  });

  test('allows the user to fill out the form', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/Email address:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);

    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, 'password');

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password');
  });
});