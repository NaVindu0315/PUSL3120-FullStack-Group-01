import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignUp from './user_reg'; // adjust this import path to your file structure

describe('SignUp Component', () => {
  test('renders Sign Up button', () => {
    render(<SignUp />);
    const signUpButton = screen.getByRole('button', { name: /Sign Up/i });
    expect(signUpButton).toBeInTheDocument();
  });

  test('renders email input', () => {
    render(<SignUp />);
    const emailInput = screen.getByLabelText(/Email address:/i);
    expect(emailInput).toBeInTheDocument();
  });

  test('renders password input', () => {
    render(<SignUp />);
    const passwordInput = screen.getByLabelText(/Password:/i);
    expect(passwordInput).toBeInTheDocument();
  });

  test('allows the user to fill out the form', () => {
    render(<SignUp />);
    const emailInput = screen.getByLabelText(/Email address:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);

    userEvent.type(emailInput, 'test@example.com');
    userEvent.type(passwordInput, 'password');

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password');
  });
});