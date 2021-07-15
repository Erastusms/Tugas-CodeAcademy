class View {
  static help() {
    console.log("node todo.js");
    console.log("node todo.js help");
    console.log("node todo.js list");
    console.log("node todo.js add <task>");
    console.log("node todo.js update <id> <task>");
    console.log("node todo.js delete <id>");
    console.log("node todo.js complete <id>");
    console.log("node todo.js uncomplete <id>");
  }

  static list(items) {
    console.log("TODO List :");
    items.forEach((item) => {
      let { id, task, status } = item;
      if (status) {
        console.log(`${id}. [X] ${task}`);
      } else {
        console.log(`${id}. [ ] ${task}`);
      }
    });
  }

  static message(msg){
    console.log(msg)
  }
}

module.exports = View;
