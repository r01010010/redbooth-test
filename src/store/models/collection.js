class Collection {

  constructor(Class, plainList) {
    this.Class = Class;
    this.list = this._createObjectList(plainList);
    this.itemHistoryLength = plainList.itemHistoryLength || [Object.keys(this.list).length];
  }

  _createObjectList(plainObjectList) {

    const list = this.list || {};
    const Class = this.Class;

    for (const key in plainObjectList) {
      if (plainObjectList.hasOwnProperty(key)) {
        const element = plainObjectList[key];
        //console.log(element);
        list[key] = new Class(element);
      }
    }

    return list;
  }

  _getFromListById(id) {
    return this.list[id];
  }

  _addItem(item) {
    const Class = this.Class;
    this.list[item.id] = new Class(item);
    this.itemHistoryLength.unshift(Object.keys(this.list).length);
  }

  _deleteItem(item) {
    delete this.list[item.id];
    this.itemHistoryLength.unshift(Object.keys(this.list).length);
  }

}

export default Collection;
