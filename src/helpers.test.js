import { calculateWinner } from './helpers';

test('should return X as the winner if it has the top row', () => {
  // Arrange the test
  const squares = ['X', 'X', 'X', 'O', null, 'O', null, null, null];
  
  // Act
  const winner = calculateWinner(squares);

  // Assert
  expect(winner).toBe('X');
});

test('should return O as the winner if it has the diagonal', () => {
  // Arrange the test
  const squares = ['X', null, 'O', 'X', 'O', null, 'O', null, null];
  
  // Act
  const winner = calculateWinner(squares);

  // Assert
  expect(winner).toBe('O');
});


test('shouldnt return any winner because there is no valid winner', () => {
  // Arrange the test
  const squares = ['X', null, 'O', 'X', 'O', null, null, null, null];
  
  // Act
  const winner = calculateWinner(squares);

  // Assert
  expect(winner).toBe(null);
});