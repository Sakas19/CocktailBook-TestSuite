import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('should render Footer in App component', () => {
    render(<App />);
    const footerElement = screen.getByText(/CopyRight/i);
    expect(footerElement).toBeInTheDocument();
  });

test('should render Header in App component', () => {
    render(<App />);
    const headerElement = screen.getByRole('heading', { name: /Cocktail Founder/i });
    expect(headerElement).toBeInTheDocument();
  });


