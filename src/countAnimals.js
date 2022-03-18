const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  // const selectedAnimal = species.find(({ name }) => name === animal.specie.length);
  const selectedAnimal = species.find(({ name }) => name === animal.specie);
  console.log(selectedAnimal);
  // return selectedAnimal;
  if (animal.sex) {
    const animalSex = selectedAnimal.residents.filter((sexo) => sexo.sex === animal.sex);
    return animalSex.length;
  }
  return selectedAnimal.residents.length;
}

// console.log(countAnimals());
console.log(countAnimals({ specie: 'lions', sex: 'male' }));

module.exports = countAnimals;
