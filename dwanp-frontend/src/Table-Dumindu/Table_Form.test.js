import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TableForm from './TableForm';

describe('TableForm', () => {
  it('renders the form fields and the button', () => {
    const mockAddTable = jest.fn();
    const mockUpdateTable = jest.fn();

    render(<TableForm addTable={mockAddTable} updateTable={mockUpdateTable} submitted={false} data={{}} isUpdate={false} />);

    expect(screen.getByLabelText('Table No')).toBeInTheDocument();
    expect(screen.getByLabelText('Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Person Count')).toBeInTheDocument();
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  it('calls addTable with the correct data when the Add button is clicked', () => {
    const mockAddTable = jest.fn();
    const mockUpdateTable = jest.fn();

    render(<TableForm addTable={mockAddTable} updateTable={mockUpdateTable} submitted={false} data={{}} isUpdate={false} />);

    fireEvent.change(screen.getByLabelText('Table No'), { target: { value: '1' } });
    fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByLabelText('Time'), { target: { value: '12:00' } });
    fireEvent.change(screen.getByLabelText('Person Count'), { target: { value: '2' } });

    fireEvent.click(screen.getByText('Add'));

    expect(mockAddTable).toHaveBeenCalledWith({ table_no: '1', used_date: '2022-01-01', used_time: '12:00', person_count: '2' });
  });
});