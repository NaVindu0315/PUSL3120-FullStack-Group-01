import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EmpDashboard from './emp_dashboard'; 

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('EmpDashboard', () => {
  it('renders the Employee button and calls navigate on click', () => {
    const navigate = useNavigate();
    render(<EmpDashboard />);

    const button = screen.getByRole('button', { name: /Employee/i });
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(navigate).toHaveBeenCalledWith('/Emp');
  });

 
});