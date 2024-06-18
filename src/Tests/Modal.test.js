import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal/index.jsx';

test('renders modal with provided message', () => {
  const message = "Cheers to good times, but remember to sip wisely and giggle responsibly!";
  render(<Modal message={message} />);
  const modalText = screen.getByText(message);
  expect(modalText).toBeInTheDocument();
});

test('modal is initially visible', () => {
  const message = "Cheers to good times, but remember to sip wisely and giggle responsibly!";
  render(<Modal message={message} onClose={() => {}} />);
  const modalElement = screen.getByText(message);
  expect(modalElement).toBeVisible();
});

test('modal is hidden after closing', () => {
  const message = "Test Message";
  const { getByText, queryByText } = render(<Modal message={message} onClose={() => {}} />);
  const closeButton = getByText("Close");
  fireEvent.click(closeButton);
  const modalElement = queryByText(message);
  expect(modalElement).toBeNull();
});
