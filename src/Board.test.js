import Board from './Board';
import { render, fireEvent } from '@testing-library/react';

test('Making sure the board gets re-rendered and places X\'s and O\'s alternating', () => {
    const board = render(<Board />);
    const buttons = board.queryAllByRole('button');
    for (var i = 0; i < buttons.length; i++) {
        fireEvent.click(buttons[i]);
        expect(buttons[i].innerHTML).toBe(i % 2 ? 'O' : 'X');
    }
});

test('Seeing whether message alternates between whose turn it is', () => {
    const board = render(<Board />);
    const buttons = board.queryAllByRole('button');
    const whoseTurn = board.getByText('Next player: ', { exact: false });
    for (var i = 0; i < buttons.length; i++) {
        fireEvent.click(buttons[i]);
        expect(whoseTurn.innerHTML).toBe('Next player: ' + (i % 2 ? 'X' : 'O'));
    }
});