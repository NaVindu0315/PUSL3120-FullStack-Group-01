import React from 'react';
import { render, screen } from '@testing-library/react';
import EmpLogin from './emp_login';

describe('EmpLogin Component', () => {
  test('renders Login button', () => {
    render(<EmpLogin />);
    const loginButton = screen.getByText(/Login/i);
    expect(loginButton).toBeInTheDocument();
  });
});