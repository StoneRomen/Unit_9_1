
// Дізнатись суму всіх зарплат користувачів:
let company = {
  sales:[{name: "John", salary: 1000},{name: "Alice", salary: 600}],
  development: {
    web: [{name: "Peter", salary: 2000},{name: "Alex", salary: 1800}],
    internals: [{name: "Jack", salary: 1300}]
  }
};
// Об'єкт може містити невідому кількість департаментів та співробітників


function allSalaries(department) {
  let total = 0;

  for (let key in department) {
    if (Array.isArray(department[key])) {
      total += department[key].reduce((sum, employee) => sum + employee.salary, 0);
    } else {
      total += allSalaries(department[key]);
    }
  }
  return total;
}


console.log(allSalaries(company));
