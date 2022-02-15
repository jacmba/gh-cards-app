import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App title="test cards app" />);
  const titleElement = screen.getByText(/test cards app/i);
  expect(titleElement).toBeInTheDocument();
});
