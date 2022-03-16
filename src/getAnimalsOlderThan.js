const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, minAge) {
  // return species.find((specie) => specie.name === animal).residents.every((animalAge) => animalAge.age >= age);
  return species.find(({ name }) => name === animal).residents.every(({ age }) => age >= minAge);
  // return species.find(({ name }) => name === animal).residents.every(({ age }) => age >= minAge);
}
// console.log(getAnimalsOlderThan('tigers', 2));

module.exports = getAnimalsOlderThan;
