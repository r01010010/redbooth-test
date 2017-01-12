import React, { Component } from 'react';

class Task extends Component {

/*  static propTypes = {
    title: PropTypes.string.isRequired,
    isBeingDragged: PropTypes.bool.isRequired,
    onDrop: PropTypes.function.isRequired,
    onDrag: PropTypes.function.isRequired
  }
*/

  dragStart = e => {
    e.currentTarget.style.opacity = '0.5';
    e.dataTransfer.effectAllowed = 'move';
    const task = {
      id: this.props.id,
      column: this.props.column
    };
    e.dataTransfer.setData('text', JSON.stringify(task));
  };

  dragEnd = e => {
    e.currentTarget.style.opacity = '1';
  };

  render() {

    const { id, title, state } = this.props;

    return (
      <div
        key={id}
        className="task"
        draggable='true'
        data-id={id}
        onDragStart={this.dragStart}
        onDragEnd={this.dragEnd}
        >
        <div className={'task-title ' + state}>
          {title}
        </div>
      </div>
    );
  }
}

export default Task;
