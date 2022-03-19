const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) =>
    employeeName.includes(firstName) || employeeName.includes(lastName));
}
// console.log(getEmployeeByName('Ola'));
// console.log(getEmployeeByName('fdaadsf as'));
// console.log(getEmployeeByName('Orloff'));
// console.log(getEmployeeByName('Ola Orloff'));
module.exports = getEmployeeByName;
