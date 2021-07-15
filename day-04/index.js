const LogicFunction = require("./LogicFunction");
const dataEmployees = require("./employees");

let employees = new LogicFunction();
// No. 1
employees.searchEmployee(dataEmployees, "R");
// No. 2
employees.salaryRange(dataEmployees, 10000, 50000);
// No. 3
employees.hireRangeDate(dataEmployees, "12-01-1993", "12-12-1995");
// No. 4
employees.showAges(dataEmployees, 30, 40);
// No. 5
employees.totalSalaryAllEmployee(dataEmployees);
// No. 6
employees.totalSalaryByDepartment(dataEmployees, 9);
// No. 7
employees.totalEmployeeByDepartment(dataEmployees);
// No. 8
employees.totalEmployeeByJobId(dataEmployees);
// No. 9
employees.salaryMinMax(dataEmployees);
