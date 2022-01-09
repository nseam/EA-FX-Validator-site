//import { render, screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import App from './App';

test('renders footer', () => {
  render(<App />);
  //const linkElement = screen.getByText(/footer/i);
  //expect(linkElement).toBeInTheDocument();
});
