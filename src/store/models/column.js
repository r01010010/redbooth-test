import Collection from './collection.js';
import Task from './task';

class Column extends Collection {

  constructor(data) {
    super(Task, data.tasks);
    this.title = data.title;
    this.id    = data.id;
    this.meansCompletion = data.meansCompletion;
  }

  get tasks() {
    return this.list;
  }

  get taskHistoryLength() {
    return this.itemHistoryLength;
  }

  getTaskById(id) {
    return this._getFromListById(id);
  }

  addTask(task) {
    if (this.meansCompletion) {
      task.complete();
    } else if (task.state === 'complete') {
      task.reOpen();
    }
    task.column = this.id;
    super._addItem(task);

  }

  deleteTask(task) {
    super._deleteItem(task);
  }

}

export default Column;
