const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const animalsLocation = () => species.reduce((acc, curr) => {
  if (curr.location === 'NE') { acc.NE.push(curr.name); }
  if (curr.location === 'NW') { acc.NW.push(curr.name); }
  if (curr.location === 'SE') { acc.SE.push(curr.name); }
  if (curr.location === 'SW') { acc.SW.push(curr.name); }
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

function getAnimalMap(options) {
  return animalsLocation();
  // return createObj();
}
console.log(getAnimalMap());

module.exports = getAnimalMap;

// const filterSpeciesPerRegion = (region, sex) => {
//   const result = data.species.filter((element) => element.location === region);
//   return result;
// };

// const getAnimalFromRegion = (region) => {
//   const filteredSpecies = filterSpeciesPerRegion(region);
//   return filteredSpecies.map((specie) => `${specie.name}`);
// };

// const createObj = () => ({
//   NE: getAnimalFromRegion('NE'),
//   NW: getAnimalFromRegion('NW'),
//   SE: getAnimalFromRegion('SE'),
//   SW: getAnimalFromRegion('SW'),
// });