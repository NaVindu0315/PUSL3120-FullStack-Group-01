import React from 'react';
import { render, screen } from '@testing-library/react';
import Order from './Order';

jest.mock('./MyComponent', () => () => <div>MyComponent</div>);

describe('Order', () => {
  it('renders the Order component', () => {
    render(<Order />);

 
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('MyComponent')).toBeInTheDocument();
  });
});