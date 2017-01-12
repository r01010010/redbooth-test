import React, { Component, PropTypes } from 'react';
import Task from './Task';

class Column extends Component {

  /*static propTypes = {
    title: PropTypes.string.isRequired,
    tasks: PropTypes.array.isRequired
  }*/

  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  dragOver = e => {
    e.preventDefault();
  };

  dragEnter = e => {
    //const task = JSON.parse(e.dataTransfer.getData('text'));
    //if (task.column !== this.props.id) {
    //  this.column.style.border = 'dashed';
    //}
    e.preventDefault();
  };

  dragLeave = () => {
    //this.column.style.border = 'solid';
  }

  drop = e => {
    const task = JSON.parse(e.dataTransfer.getData('text'));
    this.context.store.dispatch({
      type: 'DROP',
      to: this.props.id,
      task: task
    });
  };

  render() {
    const { id, title, tasks, taskHistoryLength, meansCompletion } = this.props;

    const taskList = Object.keys(tasks).map(key => {
      const task = tasks[key];
      return <Task key={task.id} id={task.id} title={task.title} column={task.column} />
    });

    let completionEnfasis = '';

    if (meansCompletion && taskHistoryLength[1] && taskHistoryLength[1] < Object.keys(tasks).length) {
      completionEnfasis = <div><img width="300px" src="http://i3.kym-cdn.com/photos/images/original/000/972/132/24d.gif" role="presentation"/></div>;
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
            {title}
          </div>
          {completionEnfasis}
          <div>
           { taskList }
          </div>
      </div>
    );
  }
}

export default Column;
