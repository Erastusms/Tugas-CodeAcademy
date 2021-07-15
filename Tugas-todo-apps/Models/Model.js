const fs = require("fs");

class Model {
  constructor(id, task, status, created_at, completed_at) {
    this.id = id;
    this.task = task;
    this.status = status;
    this.created_at = created_at;
    this.completed_at = completed_at;
  }

  static getItem() {
    let data = fs.readFileSync("./data.json", "utf8");
    let dataObj = JSON.parse(data);
    let items = dataObj.map((item) => {
      let { id, task, status, created_at, completed_at } = item;
      return new Model(id, task, status, created_at, completed_at);
    });

    return items;
  }

  static addItem(params) {
    let data = this.getItem();
    let id = data[data.length - 1].id + 1;
    let created_at = new Date();
    let completed_at = null;
    let status = false;
    let [task] = params;

    data.push(new Model(+id, task, status, created_at, completed_at));
    this.save(data);
    return `${task} has been create!`;
  }

  static update(params) {
    let data = this.getItem();
    let [id, task] = params;
    let taskAwal = "";

    data = data.map((item) => {
      if (item.id === +id) {
        item.task = task;
        taskAwal += data[item.id];
        return item;
      } else {
        return item;
      }
    });
    this.save(data);
    return `${data.task} change to ${task}`;
  }

  static delete(params) {
    let data = this.getItem();
    let id = +params[0];

    let arrItems = [];
    let tempName;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id !== id) {
        arrItems.push(data[i]);
      } else {
        tempName = data[i].task;
      }
    }

    if (data.length === arrItems.length) {
      return `Id ${id} is not found!`;
    } else {
      this.save(arrItems);
      return `"${tempName}" has been remove!`;
    }
  }
  static complete(params) {
    let data = this.getItem();
    let id = +params[0];
    let task;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].status = true;
        data[i].completed_at = new Date();
        task = data[i].task;
      }
    }

    this.save(data);
    return `"${task}" has been completed!`;
  }

  static uncomplete(params) {
    let data = this.getItem();
    let id = +params[0];
    let task;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].status = false;
        data[i].completed_at = null;
        task = data[i].task;
      }
    }

    this.save(data);
    return `"${task}" has been uncompleted!`;
  }

  static save(data) {
    let itemString = JSON.stringify(data, null, 3);
    fs.writeFileSync("./data.json", itemString);
  }
}

module.exports = Model;
