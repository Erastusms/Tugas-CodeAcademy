const View = require("../Views/View");
const Model = require("../Models/Model");

class Controller {
  static help() {
    View.help();
  }

  static list() {
    let items = Model.getItem();
    View.list(items);
  }

  static add(params) {
    let msg = Model.addItem(params);
    View.message(msg);
  }

  static update(params) {
    let msg = Model.update(params);
    View.message(msg);
  }

  static delete(params) {
    let msg = Model.delete(params);
    View.message(msg)
  }

  static complete(params) {
    Model.complete(params);
  }

  static uncomplete(params) {
    Model.uncomplete(params);
  }
}

module.exports = Controller;
