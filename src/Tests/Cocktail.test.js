import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Cocktail from '../components/Cocktail/index.jsx';

test('should render search bar in Cocktail component', async () => {
    render(<Cocktail />);
    await waitFor(() => {
      const searchBar = screen.getByPlaceholderText('Search for a cocktail');
      expect(searchBar).toBeInTheDocument();
    });
  });

test('should show modal initially', async () => {
    render(<Cocktail />);
    await waitFor(() => {
      const modalText = screen.getByText(/Cheers to good times/i);
      expect(modalText).toBeInTheDocument();
    });
  });

test('should close modal when close button is clicked', async () => {
    render(<Cocktail />);
    await waitFor(() => {
      const closeButton = screen.getByText('Close');
      expect(closeButton).toBeInTheDocument();
      fireEvent.click(closeButton);
      const modalText = screen.queryByText(/Cheers to good times/i);
      expect(modalText).not.toBeInTheDocument();
    });
  });

test('renders loading message before loading', async () => {
    render(<Cocktail />);
    await waitFor(() => screen.getByText(/Loading/i));
  });
  
  describe('Cocktail component', () => {
    test('renders Cocktail component with previous and next drink buttons', async () => {
      render(<Cocktail />);
      await screen.findByText(/Next Drink/i);
      expect(screen.getByText(/Previous Drink/i)).toBeInTheDocument();
      expect(screen.getByText(/Next Drink/i)).toBeInTheDocument();
    });

test('should display ingredients list from cocktail data', async () => {
      render(<Cocktail />);
      await screen.findByText(/Next Drink/i); 
      const ingredientsList = await screen.findAllByRole('listitem');
      expect(ingredientsList.length).toBeGreaterThan(0); 
  });

test('should display searched cocktail when searched', async () => {
    render(<Cocktail />);
    await screen.findByText(/Next Drink/i); 
    fireEvent.change(screen.getByPlaceholderText('Search for a cocktail'), { target: { value: 'Mojito' } });
    fireEvent.click(screen.getByRole('button', { name: /Search/i }));
    await waitFor(() => {
        const searchedCocktailName = screen.getByRole('heading', { level: 2 });
        expect(searchedCocktailName.textContent).toContain('Mojito');
    });
  });
});
    
