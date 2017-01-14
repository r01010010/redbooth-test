import createStateModel from '../lib/createStateModel';
import RedBoothClient from '../data/RedBoothClient';
const client = new RedBoothClient();

const REQUEST_BOARD = 'REQUEST_BOARD';
function requestBoard() {
  return {
    type: REQUEST_BOARD
  };
}

const RECEIVE_BOARD = 'RECEIVE_BOARD';
function receiveBoard(err, board) {
  return {
    type: RECEIVE_BOARD,
    err,
    board
  };
}

export function fetchBoard() {
  return function (dispatch) {

    dispatch(requestBoard());

    return client.fetchBoard((err, data) => {
      const board = (!err) ? createStateModel(data).board : null;

      dispatch(receiveBoard(err, board));
    });
  };
}
