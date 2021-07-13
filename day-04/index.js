const LoginFunction  = require("./LoginFunction");
const dataEmployees = require("./employees");

let employees = new LoginFunction()

// employees.searchEmployee(dataEmployees, "R")
// employees.salaryRange(dataEmployees, 10000, 50000)
// employees.totalSalaryAllEmployee(dataEmployees)
// employees.totalSalaryByDepartment(dataEmployees, 3)
employees.totalEmployeeByDepartment(dataEmployees, 2)
employees.totalEmployeeByJobId(dataEmployees, 3)