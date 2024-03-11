import { render, screen } from '@testing-library/react';
import Form from '../components/Form';

test('renders Form', () => {
  render(<Form />);
  const element = screen.getByTitle('Get Weather');
  expect(element).toBeInTheDocument();
});
