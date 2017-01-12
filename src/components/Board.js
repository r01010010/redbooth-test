import React, { Component } from 'react';
import Column from './Column';

class Board extends Component {

  render() {
    const board = this.props.data;
    const columns = board.columns.map(column =>
      <Column
        key={column.id}
        id={column.id}
        title={column.title}
        meansCompletion={column.meansCompletion}
        taskHistoryLength={column.taskHistoryLength}
        tasks={column.tasks} />
    );

    return (
      <div className="board-container">
        <div className="board-title">
          { board.title }
        </div>
        <div className="board">
          { columns }
        </div>
      </div>
    );
  }
}

export default Board;
