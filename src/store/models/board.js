import Column from './column';

class Board {

  constructor(data) {
    this.title   = data.title;
    this.id      = data.id;
    this.columns = data.columns.map(column => {
      return new Column(column);
    });
  }

  _getColumnById(id) {

    const columns = this.columns;
    for (let i = 0; i < columns.length; i++) {
      const column = columns[i];
      if (column.id === id) {
        column.index = i;
        return column;
      }
    }

    return null;

  }

  moveTask(task, idColumnTo) {
    const columnFrom = this._getColumnById(task.column);
    const columnTo = this._getColumnById(idColumnTo);
    task = columnFrom._getTaskById(task.id);
    columnTo.addTask(task);
    columnFrom.deleteTask(task);
  }
}

export default Board;
