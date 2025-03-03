import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import here
import App from './App';

test("Welcome to my testing setup", () => {
  render(<App />);
  expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
});
