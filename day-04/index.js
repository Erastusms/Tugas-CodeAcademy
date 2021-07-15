const LogicFunction  = require("./LogicFunction");
const dataEmployees = require("./employees");

let employees = new LogicFunction()

// employees.searchEmployee(dataEmployees, "R")
// employees.salaryRange(dataEmployees, 10000, 50000)
// employees.totalSalaryAllEmployee(dataEmployees)
// employees.totalSalaryByDepartment(dataEmployees, 9)
// employees.totalEmployeeByDepartment(dataEmployees)
// employees.totalEmployeeByJobId(dataEmployees)

// employees.salaryMinMax(dataEmployees)

// employees.showAges(dataEmployees, 30, 40)

employees.hireRangeDate(dataEmployees,'12-01-1993','12-12-1995')