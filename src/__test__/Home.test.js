import { render, screen } from '@testing-library/react';
import Home from "../pages/Home";

test('renders Home', () => {
  render(<Home />);
  const linkElement = screen.getByText('Weather App');
  expect(linkElement).toBeInTheDocument();
});
