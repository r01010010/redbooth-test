import React, { PropTypes, Component } from 'react';
import Board from './components/Board';

class App extends Component {

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    const state = this.context.store.getState();

    if (state.isFetching) {
      return <div>Loading</div>;

    } else if (state.err) {
      return <div>Oops, A problem ocurred when fetching the board info. Is server running?</div>;

    } else if (state.board) {
      return <Board data={state.board} />;

    } else {
      return <div>Oops</div>;
    }
  }

}

export default App;
