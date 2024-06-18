import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar/index.jsx';

test("The title is rendered", () => {
    render (<SearchBar />)
    const heading = screen.getByRole("heading", {level:4});
    expect(heading).toBeInTheDocument();
})

test('should update input value when typed into', () => {
  render(<SearchBar />);
  const inputElement = screen.getByPlaceholderText('Search for a cocktail');
  fireEvent.change(inputElement, { target: { value: 'Margarita' } });
  expect(inputElement.value).toBe('Margarita');
});

test('should render search button', () => {
  render(<SearchBar />);
  const searchButton = screen.getByText('Search');
  expect(searchButton).toBeInTheDocument();
});

test('should render input field', () => {
  render(<SearchBar />);
  const inputElement = screen.getByPlaceholderText('Search for a cocktail');
  expect(inputElement).toBeInTheDocument();
});

test('should trigger search callback when search button is clicked', () => {
  const mockSearch = jest.fn();
  render(<SearchBar onSearch={mockSearch} />);
  const inputElement = screen.getByPlaceholderText('Search for a cocktail');
  fireEvent.change(inputElement, { target: { value: 'Margarita' } });
  const searchButton = screen.getByText('Search');
  fireEvent.click(searchButton);
  expect(mockSearch).toHaveBeenCalledWith('Margarita');
});