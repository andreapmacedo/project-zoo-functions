const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// function getSpeciesByIds(...ids) {
// function getSpeciesByIds(ids) {
//   // console.log(species);
//   return species.filter((element) => (element.id === ids));
//   // return species.filter((element) => element.id === ids[1]);
// }

function getSpeciesByIds(...ids) {
  // console.log(species);
  // console.log(ids);
  // return species.filter((element) => element.id === ids[0].id);
  const specieFound = species.filter((element) => ids.includes(element.id));
  return specieFound;
}
// console.log(species[0].id);
// console.log(species[0].id);
console.log(getSpeciesByIds(species[0].id, species[1].id, species[2].id, species[3].id));
// console.log(getSpeciesByIds());
// console.log(getSpeciesByIds(species[0].id));
// console.log(getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d'));
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '01422318-ca2d-46b8-b66c-3e9e188244ed');
// console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
