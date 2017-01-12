import Task from './task';

class Column {

  constructor(data) {
    this.title = data.title;
    this.id    = data.id;
    this.meansCompletion = data.meansCompletion;
    this.taskHistoryLength = data.taskHistoryLength || [data.tasks.length];
    this.tasks = data.tasks.map(task => {
      return new Task(task);
    });
  }

  _getTaskById(id) {

    const tasks = this.tasks;

    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      if (task.id === id) {
        task.index = i;
        return task;
      }
    }

    return null;

  }

  addTask(task) {
    task.column = this.id;
    this.tasks.push(new Task(task));
    this.taskHistoryLength.unshift(this.tasks.length);
  }

  deleteTask(task) {
    this.tasks.splice(this._getTaskById(task.id).index, 1);
    this.taskHistoryLength.unshift(this.tasks.length);
  }

}

export default Column;
