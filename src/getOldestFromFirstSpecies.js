const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(selectedId) {
  const specieId = employees.find(({ id }) => id === selectedId).responsibleFor[0];
  const selectedSpecie = species.find(({ id }) => id === specieId).residents;
  // console.log(selectedSpecie);
  const oldestAnimal = selectedSpecie.reduce((acc, curr) => Math.max(acc, curr.age), 0);
  // console.log(oldestAnimal);
  const selectedAnimal = selectedSpecie.find(({ age }) => age === oldestAnimal);
  // const selectedAnimal = selectedSpecie.find((element) => element.age === oldestAnimal);
  return [selectedAnimal.name, selectedAnimal.sex, selectedAnimal.age];
}
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
