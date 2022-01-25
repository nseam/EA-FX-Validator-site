//import { render, screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import Index from './index';

test('renders footer', () => {
  render(<Index />);
  //const linkElement = screen.getByText(/footer/i);
  //expect(linkElement).toBeInTheDocument();
});
