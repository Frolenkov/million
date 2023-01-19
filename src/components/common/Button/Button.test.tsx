import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should call the onClick handler', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click me</Button>);
    fireEvent.click(getByText('Click me'));
    expect(onClick).toHaveBeenCalled();
  });
});
