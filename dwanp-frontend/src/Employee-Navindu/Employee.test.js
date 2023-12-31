import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Employee from './Employee';
import Axios from 'axios';
import { BrowserRouter } from 'react-router-dom';

jest.mock('axios');

describe('Employee', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Employee component', async () => {
    Axios.get.mockResolvedValueOnce({ data: { response: [] } });

    render(
      <BrowserRouter>
        <Employee />
      </BrowserRouter>
    );

    await waitFor(() => expect(Axios.get).toHaveBeenCalledTimes(1));
    expect(Axios.get).toHaveBeenCalledWith('http://localhost:3001/api/getemployees');
  });

});