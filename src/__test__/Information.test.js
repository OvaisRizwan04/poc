import { render, screen } from '@testing-library/react';
import Information from '../components/Information';


test('renders Information', () => {
  render(<Information />);
  const linkElement = screen.getByText(/Please choose a place to look at the weather conditions/i);
  expect(linkElement).toBeInTheDocument();
});
