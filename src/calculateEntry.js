const data = require('../data/zoo_data');

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrantsList) {
  const result = entrantsList.reduce((acc, curr) => {
    if (curr.age < 18) {
      acc.child += 1;
    } else if (curr.age >= 18 && curr.age < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
  return result;
}
// console.log(countEntrants(entrantsList));
// console.log(Object.keys(entrants));
// if (!entrants || Object.keys(entrants) === {}) return 0;

function calculateEntry(entrantsList) {
  // if (!entrantsList || Object.keys(entrantsList).length === 0) return 0;
  // const entrantsAges = countEntrants(entrantsList);
  // let total = entrantsAges.child * data.prices.child;
  // total += entrantsAges.adult * data.prices.adult;
  // total += entrantsAges.senior * data.prices.senior;
  // return total;

  const persons = countEntrants(entrantsList);
  return Object.keys(persons).reduce((acc, curr) => acc + (persons[curr] * data.prices[curr]), 0);

  // const result = Object.keys(persons).reduce((acc, curr) => {
  // console.log(`cuur -> ${curr}, persons[curr] -> ${persons[curr]} * data.prices[curr] -> ${data.prices[curr]} `);
  // console.log(`cuur -> ${curr}, persons[${curr}] -> ${persons[curr]} * data.prices[${curr}] -> ${data.prices[curr]} `);
  // return acc + (persons[curr] * data.prices[curr]);
  // }, 0);
  // return result;
}
// console.log(calculateEntry({}));
console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
