import React, { Component, PropTypes } from 'react';

class Task extends Component {

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

export default Task;
