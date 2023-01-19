import { render, screen } from '@testing-library/react';
import Container from './Container';

describe('Container', () => {
  it('should render children', () => {
    const text = 'Hello World';
    render(<Container>{text}</Container>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
