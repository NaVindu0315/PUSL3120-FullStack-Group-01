import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import InventoryTable from './InventoryTable';

describe('InventoryTable', () => {
  const mockSelectInv = jest.fn();
  const mockDeleteInventory = jest.fn();

  const rows = [
    {
      id: 1,
      invnt_item: 'Item 1',
      invnt_code: 'Code 1',
      qnty: 10,
      price: 100,
      date: '2022-01-01',
    },
    {
      id: 2,
      invnt_item: 'Item 2',
      invnt_code: 'Code 2',
      qnty: 20,
      price: 200,
      date: '2022-02-02',
    },
  ];

  it('renders the InventoryTable component', () => {
    render(<InventoryTable rows={rows} selectInv={mockSelectInv} deleteInventory={mockDeleteInventory} />);

    expect(screen.getByText('Inventory Details')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Code 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Code 2')).toBeInTheDocument();
  });

  it('calls selectInv and deleteInventory when the respective buttons are clicked', () => {
    render(<InventoryTable rows={rows} selectInv={mockSelectInv} deleteInventory={mockDeleteInventory} />);

    fireEvent.click(screen.getAllByText('Update')[0]);
    expect(mockSelectInv).toHaveBeenCalledWith(rows[0]);

    fireEvent.click(screen.getAllByText('Delete')[0]);
    expect(mockDeleteInventory).toHaveBeenCalledWith({ invnt_code: rows[0].invnt_code });
  });
});