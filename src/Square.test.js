import { render, fireEvent } from '@testing-library/react';

// Square is a "default" export from Square.js, so we don't need
// curly braces around it like we do for render
import Square from './Square';

test('should render an empty Square', () => {
    const square = render(<Square value={null} />); // Line 1
    const button = square.getByRole('button'); // Line 2
    expect(button.innerHTML).toBe(''); // Line 3
});
  
test('should render a Square with an \'X\'', () => {
    const square = render(<Square value='X' />);
    const button = square.getByRole('button');
    expect(button.innerHTML).toBe('X');
});
  
test('should call the specified onClick when square is clicked', () => {
    // Arrange test case
    const onClick = jest.fn();
    const square = render(<Square value='X' onClick={onClick} />);
    const button = square.getByRole('button');

    // Act on test case  
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
});