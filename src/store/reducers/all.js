import getDemoState from '../lib/getDemoState';
import TYPES from '../actions/types';

const demoState = getDemoState();

const reducer = (state = demoState, action = { type: null }) => {
  switch (action.type) {
  case TYPES.MOVE_TASK:
    state.board.moveTask(action.task, action.to);
    return state;
  default:
    return state;
  }
};

export default reducer;
