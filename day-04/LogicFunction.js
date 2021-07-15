let id = 0;
class LogicFunction {
  constructor(employees) {
    this.employees = employees;
  }

  searchEmployee(employees, prefix) {
    console.log(`Pegawai yang terdapat huruf ${prefix} pada namanya adalah:`);

    for (let i = 0; i < employees.length; i++) {
      let firstName = employees[i].first_name;
      let lastName = employees[i].last_name;
      let fullName = `${firstName} ${lastName}`;
      for (let j = 0; j < fullName.length; j++) {
        if (prefix === fullName[j]) {
          id++;
          console.log(`${id}. ${fullName}`);
        }
      }
    }

    console.log("");
  }

  salaryRange(employees, minSalary, maxSalary) {
    console.log(
      `Daftar Pegawai dengan minimum gaji sebesar Rp.${minSalary} dan maksimal gaji sebesar Rp.${maxSalary} adalah sebagai berikut:`
    );
    for (let i = 0; i < employees.length; i++) {
      let employeeName = employees[i].first_name;
      let salaryEmployee = +employees[i].salary;

      if (salaryEmployee >= minSalary && salaryEmployee <= maxSalary) {
        console.log(
          `Saudara ${employeeName} dengan gaji sebesar Rp.${salaryEmployee}`
        );
      }
    }

    console.log("");
  }

  hireRangeDate(employees, startDate, endDate) {
    id = 0;
    let start = new Date(startDate);
    let end = new Date(endDate);
    let startYear = start.getFullYear();
    let endYear = end.getFullYear();

    console.log(
      `Daftar pegawai yang direkrut sejak awal tahun ${startYear} hingga akhir tahun ${endYear} :`
    );
    for (let i = 0; i < employees.length; i++) {
      let firstName = employees[i].first_name;
      let lastName = employees[i].last_name;
      let fullName = `${firstName} ${lastName}`;

      let hireDate = employees[i].hire_date;
      let newHire = new Date(hireDate);
      let newDate = newHire.toLocaleDateString();

      if (newHire >= start && newHire <= end) {
        id++;
        console.log(`${id}. ${fullName} direkrut pada ${newDate}`);
      }
    }

    console.log("");
  }

  showAges(employees, age1, age2) {
    id = 0;
    console.log(`Daftar pegawai yang memiliki umur ${age1}-${age2} tahun :`);
    for (let i = 0; i < employees.length; i++) {
      let employeeAge = employees[i].age;
      let firstName = employees[i].first_name;
      let lastName = employees[i].last_name;
      let fullName = `${firstName} ${lastName}`;

      if (employeeAge >= age1 && employeeAge <= age2) {
        id++;
        console.log(`${id}. ${fullName} berumur ${employeeAge} tahun`);
      }
    }

    console.log("");
  }

  totalSalaryAllEmployee(employees) {
    let result = 0;

    for (let i = 0; i < employees.length; i++) {
      let salaryEmployee = +employees[i].salary;
      result += salaryEmployee;
    }
    console.log(
      `Total gaji keseluruhan pegawai di perusahaan ini sebesar Rp.${result}`
    );

    console.log("");
  }

  totalSalaryByDepartment(employees, departmentId) {
    let result = 0;
    for (let i = 0; i < employees.length; i++) {
      let salaryEmployee = +employees[i].salary;
      let departmentEmployee = employees[i].department_id;
      if (departmentId === departmentEmployee) {
        result += salaryEmployee;
      }
    }
    console.log(
      `Total gaji pegawai pada department dengan id: ${departmentId} sebesar Rp.${result}`
    );

    console.log("");
  }

  totalEmployeeByDepartment(employees) {
    let jmlhPegawai = 0;
    let departmentId = 9;
    for (let i = 0; i < employees.length; i++) {
      let departmentEmployee = employees[i].department_id;

      if (departmentId === departmentEmployee) {
        jmlhPegawai++;
      }
    }
    console.log(
      `Total pegawai pada departement ke-${departmentId} berjumlah ${jmlhPegawai} orang`
    );

    console.log("");
  }

  totalEmployeeByJobId(employees) {
    let jmlhPegawai = 0;
    let jobId = 4;
    for (let i = 0; i < employees.length; i++) {
      let jobsId = employees[i].job_id;
      if (jobId === jobsId) {
        jmlhPegawai++;
      }
    }

    console.log(
      `Pegawai dengan jobs id: ${jobId} berjumlah ${jmlhPegawai} orang`
    );

    console.log("");
  }

  salaryMinMax(employees) {
    let maxSalary = 0;
    let minSalary = 0;
    for (let i = 0; i < employees.length; i++) {
      let salaryEmployee = +employees[i].salary;
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
