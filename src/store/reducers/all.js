import TYPES from '../actions/types';
//import { combineReducers } from 'redux';

function reduce(state = {}, action) {

  const { REQUEST_BOARD, RECEIVE_BOARD, MOVE_TASK } = TYPES;

  switch (action.type) {

  case REQUEST_BOARD:
    return Object.assign({}, state, {
      isFetching: true
    });

  case RECEIVE_BOARD:
    return Object.assign({}, state, {
      isFetching: false,
      board: action.board,
      err: action.err
    });

  case MOVE_TASK:
    state.board.moveTask(action.task, action.to);
    return Object.assign({}, state);

  default:
    return state;
  }

}

export default reduce;
