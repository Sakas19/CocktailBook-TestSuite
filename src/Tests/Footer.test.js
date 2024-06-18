import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Footer from '../components/Footer/index.jsx'; 

test('renders Footer component with correct text content', () => {
    render(<Footer />);
    
    const copyRightElement = screen.getByText(/CopyRight 2023/i);
    const authorElement = screen.getByText(/BY Sarvnaz/i);
 
    expect(copyRightElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
});

test('renders h3 element with correct text', () => {
    render(<Footer />);
    
    const h3Element = screen.getByRole('heading', { level: 2 }); 
    expect(h3Element).toHaveTextContent('CopyRight 2023'); 
});


