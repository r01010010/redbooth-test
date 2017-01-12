import Collection from './collection';
import Column from './column';

class Board extends Collection {

  constructor(data) {
    super(Column, data.columns);
    this.title   = data.title;
    this.id      = data.id;
  }

  get columns() {
    return this.list;
  }

  getColumnById(id) {
    return this._getFromListById(id);
  }

  addColumn(column) {
    this._addItem(column);
  }

  deleteColumn(column) {
    this._deleteItem(column);
  }

  moveTask(task, idColumnTo) {
    const columnFrom = this.getColumnById(task.column);
    const columnTo = this.getColumnById(idColumnTo);
    task = columnFrom.getTaskById(task.id);
    columnTo.addTask(task);
    columnFrom.deleteTask(task);
  }
}

export default Board;
