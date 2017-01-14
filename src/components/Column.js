import React, { Component, PropTypes } from 'react';
import Task from './Task';
const config = require('../config.json');

class Column extends Component {

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  dragOver = e => {
    e.preventDefault();
  };

  dragEnter = e => {
    e.preventDefault();
  };

  drop = e => {
    const task = JSON.parse(e.dataTransfer.getData('text'));
    this.context.store.dispatch({
      type: 'MOVE_TASK',
      to: this.props.id,
      task: task
    });
  };

  hasNewTask(meansCompletion, taskHistoryLength) {
    return (meansCompletion
            && (taskHistoryLength[1] !== undefined)
            && taskHistoryLength[1] < taskHistoryLength[0]);
  }

  render() {
    const { id, title, tasks, taskHistoryLength, meansCompletion } = this.props;

    const taskList = Object.keys(tasks).map(key => {
      const task = tasks[key];
      return <Task
                key={task.id}
                id={task.id}
                title={task.title}
                column={task.column}
                state={task.state} />;
    });

    let completionEnfasis = '';

    if (this.hasNewTask(meansCompletion, taskHistoryLength)) {
      completionEnfasis = <div>
        <img src={config.emphasis_img} role="presentation"/>
      </div>;
    }

    return (
      <div
        className="column"
        key={id}
        id={id}
        onDrop={this.drop}
        onDragOver={this.dragOver}
        onDragEnter={this.dragEnter}
        onDragLeave={this.dragLeave}
        >
          <div className="column-title">
            { title } ({taskHistoryLength[0]})
          </div>
          { completionEnfasis }
          <div>
           { taskList }
          </div>
      </div>
    );
  }
}

export default Column;
