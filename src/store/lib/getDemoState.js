const data = require('../data.json');
import User from '../models/user';
import Board from '../models/board';
import State from '../models/state';

const user = new User(data.user);
const board = new Board(data.board);

console.log(board);
function getDemoState() {
  return new State({
    user,
    board
  });
}


export default getDemoState;
