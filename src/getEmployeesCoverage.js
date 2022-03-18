const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecies(responsibleFor) {
  // return species.filter((animal) => responsibleFor.includes(animal.id));
  // console.log(responsibleFor);
  const animals = species.filter((animal) => responsibleFor.includes(animal.id));
  // console.log(animals);
  return animals.map((element) => element.name);
  // return responsibleFor;
}
function getLocations(responsibleFor) {
  const employeesResp = employees.filter((employee) => responsibleFor.includes(employee.id));
  // console.log(employees);
  return employeesResp.map((element) => element.name);
  // return responsibleFor;
}

function getEmpById(empId) {
  // console.log(id);
  const result = employees.reduce((acc, curr) => {
    if (curr.id === empId.id) {
      // console.log(curr.id === empId.id);
      // acc = curr;
      const responsibleFor = getSpecies(acc.responsibleFor);
      const animalsLocations = getLocations(acc.managers);
      acc = {
        id: empId.id, fullName: `${curr.firstName} ${curr.lastName}`,
        species: responsibleFor, locations: animalsLocations,
        // species: acc.responsibleFor, locations: 1,
      };
    }
    return acc;
  });
  return result;
}

function getEmployeesCoverage(EmployeeAtr) {
  // const employeeAtrList = Object.keys(EmployeeAtr);
  let result;
  const employeeKey = Object.keys(EmployeeAtr);
  // console.log(employeeKey);
  if (employeeKey[0] === 'id') {
    // console.log('retornou um id');
    result = getEmpById(EmployeeAtr);
  } else {
    // console.log('retornou um nome');
    return 1;
  }
  return result;
}

// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
