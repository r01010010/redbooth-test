import React, { Component, PropTypes } from 'react';

class Board extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  render() {

    const { title } = this.props;

    return (
      <div>
        {title}
      </div>
    );
  }
}

export default Board;
