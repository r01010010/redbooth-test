import React, { PropTypes, Component } from 'react';
import Board from './components/Board';

class App extends Component {

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  render() {
    return (
      <Board data={this.context.store.getState().board} />
    );
  }

}

export default App;
