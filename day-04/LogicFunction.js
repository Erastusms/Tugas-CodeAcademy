const dataEmployees = require("./employees");
let id = 0;

class LogicFunction {
  constructor(employees) {
    this.employees = employees;
  }
  searchEmployee(employees, prefix) {
    console.log(`Nama pegawai yang diawali dengan huruf ${prefix} adalah:`);
    for (let i = 0; i < employees.length; i++) {
      let firstName = employees[i]["first_name"];
      let lastName = employees[i]["last_name"];

      for (let j = 0; j < firstName.length; j++) {
        if (prefix === firstName[j]) {
          id++;
          console.log(`${id}. ${firstName} ${lastName}`);
        }
      }
    }
  }

  salaryRange(employees, minSalary, maxSalary) {
    console.log(
      `Daftar Pegawai dengan minimum gaji sebesar Rp.${minSalary} dan maksimal gaji sebesar Rp.${maxSalary} adalah sebagai berikut:`
    );
    for (let i = 0; i < employees.length; i++) {
      let employeeName = employees[i]["first_name"];
      let salaryEmployee = +employees[i]["salary"];

      if (salaryEmployee >= minSalary && salaryEmployee <= maxSalary) {
        console.log(
          `Saudara ${employeeName} dengan gaji sebesar Rp.${salaryEmployee}`
        );
      }
    }
  }

  hireRangeDate(employees, startDate, endDate) {}
  showAges(employees, age1, age2) {}

  totalSalaryAllEmployee(employees) {
    let result = 0;

    for (let i = 0; i < employees.length; i++) {
      let salaryEmployee = +employees[i]["salary"];
      result += salaryEmployee;
    }
    console.log(
      `Total gaji keseluruhan pegawai di perusahaan ini sebesar Rp.${result}`
    );
  }

  totalSalaryByDepartment(employees, departmentId) {
    let result = 0;

    for (let i = 0; i < employees.length; i++) {
      let salaryEmployee = +employees[i]["salary"];
      let departmentEmployee = employees[i]["department_id"];
      if (departmentId === departmentEmployee) {
        result += salaryEmployee;
      }
    }
    console.log(
      `Total gaji pegawai pada department dengan id: ${departmentId} sebesar Rp.${result}`
    );
  }

  totalEmployeeByDepartment(employees, departmentId) {
    let jmlhPegawai = 0;

    for (let i = 0; i < employees.length; i++) {
      let employeesDepartment = employees[i]["department_id"];
      let firstName = employees[i]["first_name"];

      if (departmentId === employeesDepartment) {
        jmlhPegawai++;
      }
    }
    console.log(
      `Total pegawai pada departement ke-${departmentId} berjumlah ${jmlhPegawai} orang`
    );
  }

  totalEmployeeByJobId(employees, jobId) {
    let jmlhPegawai = 0;
    for (let i = 0; i < employees.length; i++) {
      let jobsId = employees[i]["job_id"];
      if (jobId === jobsId) {
        jmlhPegawai++;
      }
    }

    console.log(
      `Pegawai dengan jobs id: ${jobId} berjumlah ${jmlhPegawai} orang`
    );
  }

  salaryMinMax(employees) {
    let maxSalary = 0;
    let minSalary = 0;
    for (let i = 0; i < employees.length; i++) {
      let salaryEmployee = +employees[i]["salary"];
      if (salaryEmployee > maxSalary) {
        maxSalary = salaryEmployee;
        minSalary = maxSalary;
      }
      if (salaryEmployee < minSalary) {
        minSalary = salaryEmployee;
      }
    }
    console.log(`Gaji maksimal adalah Rp.${maxSalary}`);
    console.log(`Gaji minimal adalah Rp.${minSalary}`);
  }
}

module.exports = LogicFunction;