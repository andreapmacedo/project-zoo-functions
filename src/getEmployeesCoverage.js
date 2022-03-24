const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getEmployeeByName = require('./getEmployeeByName');

function getSpecies(responsibleFor) {
  console.log(responsibleFor);
  const animals = species.filter((specie) => responsibleFor.includes(specie.id));
  return animals.map((specie) => specie.name);
}

function getLocations(responsibleFor) {
  const empLocation = species.filter((specie) => responsibleFor.includes(specie.id));
  return empLocation.map((specie) => specie.location);
}

const createObj = (value) => ({
  id: value.id,
  fullName: `${value.firstName} ${value.lastName}`,
  species: getSpecies(value.responsibleFor),
  locations: getLocations(value.responsibleFor),
});

function getAllEmp() {
  const empList = [];
  employees.forEach((item) => {
    empList.push(createObj(item));
  });
  return empList;
}

function getEmpById(empId) {
  const empFund = employees.filter((element) => element.id === empId.id);
  return empFund.map((item) => createObj(item))[0];
}

function getEmpByName(empName) {
  const empList = [];
  empList.push(getEmployeeByName(empName.name));
  return empList.map((item) => createObj(item))[0];
}

function getEmployeesCoverage(employeeAtr) {
  if (!employeeAtr) return getAllEmp();
  const mapEmployee = employees.find((elemento) => (elemento.firstName === employeeAtr.name
    || elemento.lastName === employeeAtr.name || elemento.id === employeeAtr.id));
  if (!mapEmployee) throw new Error('Informações inválidas');
  const employeeKey = Object.keys(employeeAtr);
  if (employeeKey[0] === 'id') return getEmpById(employeeAtr);
  return getEmpByName(employeeAtr);
}

// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ name: 'nome invalido' }));
console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835532' }));
// console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
// anterior
// funcionando (necessário para soluções com reduce/forEach)
// function getEmp() {
//   const empList = [];
//   const result = employees.reduce((acc, curr) => {
//     const responsibleFor = getSpecies(curr.responsibleFor);
//     const animalsLocations = getLocations(curr.responsibleFor);
//     empList.push({
//       id: curr.id,
//       fullName: `${curr.firstName} ${curr.lastName}`,
//       species: responsibleFor,
//       locations: animalsLocations,
//     });
//     return empList;
//     // return acc;
//   });
//   return result;
// }

// funcionando (solução com forEach para parametros com IDs)
// function getEmpById(empId) {
//   const empList = [];
//   const empFound = employees.filter((element) => element.id === empId.id);
//   empFound.forEach((item) => {
//     empList.push(createObj(item));
//   });
//   return empList;
// }

// funcionando (solução com o reduce)
// function getEmpById(empId) {
//   const result = employees.reduce((acc, curr) => {
//     if (curr.id === empId.id) {
//       const responsibleFor = getSpecies(curr.responsibleFor);
//       const animalsLocations = getLocations(curr.responsibleFor);
//       acc = {
//         id: empId.id,
//         fullName: `${curr.firstName} ${curr.lastName}`,
//         species: responsibleFor,
//         locations: animalsLocations,
//       };
//     }
//     return acc;
//   });
//   return result;
// }
// Funcionando (solução com o reduce)
// function getEmp() {
//   const empList = [];
//   const result = employees.reduce((acc, curr) => {
//     const responsibleFor = getSpecies(curr.responsibleFor);
//     const animalsLocations = getLocations(curr.responsibleFor);
//     empList.push({
//       id: curr.id,
//       fullName: `${curr.firstName} ${curr.lastName}`,
//       species: responsibleFor,
//       locations: animalsLocations,
//     });
//     return empList;
//     // return acc;
//   });
//   return result;
// }
// enxuta
// function getSpecies(respFor) {
//   return species.filter((element) =>
//     respFor.includes(element.id)).map((element) => element.name);
// }
// function getLocation(respFor) {
//   return species.filter((element) =>
//     respFor.includes(element.id)).map((element) => element.location);
// }
// function createEmployees(pessoa) {
//   return {
//     id: pessoa.id,
//     fullName: `${pessoa.firstName} ${pessoa.lastName}`,
//     species: getSpecies(pessoa.responsibleFor),
//     locations: getLocation(pessoa.responsibleFor),
//   };
// }
// function createAllEmployees() {
//   const listAll = [];
//   employees.forEach((element) => listAll.push(createEmployees(element)));
//   return listAll;
// }
// function getEmployeesCoverage(person) {
//   if (person === undefined) return createAllEmployees();
//   const pessoa = data.employees.find((element) => element.firstName === person
//     .name || element.lastName === person.name || element.id === person.id);
//   if (!pessoa) throw new Error('Informações inválidas');
//   return createEmployees(pessoa);
// }
