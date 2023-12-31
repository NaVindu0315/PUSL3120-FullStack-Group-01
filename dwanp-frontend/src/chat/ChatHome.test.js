import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatHome2 from './ChatHome2'; 
describe('ChatHome2 Component', () => {
  test('renders ChatPage component when condition is met', () => {
    // Mock the props
    const mockSocket = { on: jest.fn(), emit: jest.fn()}; 
    const mockUsername = 'testUser';
    const mockRoom = 'testRoom';

    render(<ChatHome2 socket={mockSocket} username={mockUsername} room={mockRoom} />);
    const chatPageElement = screen.getByText(/replace this with text unique to ChatPage/i);
    expect(chatPageElement).toBeInTheDocument();
  });
});