const LogicFunction  = require("./LogicFunction");
const dataEmployees = require("./employees");

let employees = new LogicFunction()

employees.searchEmployee(dataEmployees, "R")
// employees.salaryRange(dataEmployees, 10000, 50000)
// employees.totalSalaryAllEmployee(dataEmployees)
// employees.totalSalaryByDepartment(dataEmployees, 9)
// employees.totalEmployeeByDepartment(dataEmployees)
// employees.totalEmployeeByJobId(dataEmployees)

// employees.salaryMinMax(dataEmployees)