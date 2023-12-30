import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MenuForm from './MenuForm';

describe('MenuForm', () => {
  it('renders the MenuForm component', () => {
    render(<MenuForm />);

    expect(screen.getByText('Form Title')).toBeInTheDocument();
  });

  it('submits the form when the Update button is clicked', () => {
    const mockSubmit = jest.fn();

    render(<MenuForm onSubmit={mockSubmit} />);

    fireEvent.change(screen.getByLabelText('field1'), { target: { value: 'value1' } });
    fireEvent.change(screen.getByLabelText('field2'), { target: { value: 'value2' } });

    fireEvent.click(screen.getByText('Update'));

    expect(mockSubmit).toHaveBeenCalledWith({ field1: 'value1', field2: 'value2' });
  });
});