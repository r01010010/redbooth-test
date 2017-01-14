import Board from '../models/board';
import State from '../models/state';

function createStateModel(data) {
  const board = new Board(data.board);
  return new State({
    board
  });
}

export default createStateModel;
