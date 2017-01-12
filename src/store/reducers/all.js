import getDemoState from '../lib/getDemoState';

const demoState = getDemoState();

const reducer = (state = demoState, action = { type: null }) => {
  switch (action.type) {
  case 'DRAG':
    return state;
  case 'DROP':
    state.board.moveTask(action.task, action.to);
    return state;
  case 'COMPLETE':
    return state;
  default:
    return state;
  }
};

export default reducer;
