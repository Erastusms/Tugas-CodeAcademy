const command = process.argv[2];
const params = process.argv.slice(3);
const Controllers = require("./Controllers/Controller");

switch (command) {
  case undefined:
    Controllers.help();
    break;
  case "help":
    Controllers.help();
    break;
  case "list":
    Controllers.list();
    break;
  case "add":
    Controllers.add(params);
    break;
  case "update":
    Controllers.update(params);
    break;
  case "delete":
    Controllers.delete(params);
    break;
  case "complete":
    break;
  case "uncomplete":
    break;
  default:
    break;
}
