class Task {

  constructor(data) {
    this.title    = data.title;
    this.id       = data.id;
    this.column   = data.column;
    this.state    = data.state;
  }

  complete() {
    this.state = 'complete';
  }

  reOpen() {
    this.state = 'open';
  }
}

export default Task;
