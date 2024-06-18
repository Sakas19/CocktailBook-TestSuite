import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Header from '../components/Header/index.jsx';

test("The title is rendered", () => {
    render(<Header />);
    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Cocktail founder");
  });

test('renders Header with title and subtitle', () => {
    render(<Header title="Cocktail Finder" subTitle="Margarita" />);
    expect(screen.getByText(/Cocktail Finder/i)).toBeInTheDocument();
    expect(screen.getByText(/Margarita/i)).toBeInTheDocument();
  });

