const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const createObj = (specieFound, specieList) => ({
  [specieFound]: specieList,
});

const getAnimals = (specieId) => {
  const specieFound = species.find(({ id }) => id === specieId);
  const specieList = specieFound.residents.map((specie) => (specie.name));
  return createObj(specieFound.name, specieList);
};

const getAnimalsSorted = (specieId) => {
  const specieFound = species.find(({ id }) => id === specieId);
  const specieList = specieFound.residents.map((specie) => (specie.name)).sort();
  return createObj(specieFound.name, specieList);
};

const getAnimalsBySex = (specieId) => {
  const specieFound = species.find(({ id }) => id === specieId);
  const specieList = specieFound.residents.filter((specie) => specie.sex === 'female')
    .map((animal) => animal.name);
  // console.log(specieList);
  return createObj(specieFound.name, specieList);
};

// const getAnimalsSexSorted = (specieId) => {
//   const specieFound = species.find(({ id }) => id === specieId);
//   const specieList = specieFound.residents.filter((specie) => specie.sex === 'female')
//     .map((animal) => animal.name).sort();
//   console.log(specieList);
//   return createObj(specieFound.name, specieList);
// };

const getAnimalsByNameAndSexSorted = (specieId) => {
  const specieFound = species.find(({ id }) => id === specieId);
  const specieList = specieFound.residents.filter((specie) => specie.sex === 'female')
    .map((animal) => animal.name).sort();
  // console.log(specieList);
  return createObj(specieFound.name, specieList);
};

const animalsNames = () => species.reduce((acc, curr) => {
  if (curr.location === 'NE') { acc.NE.push(getAnimals(curr.id)); }
  if (curr.location === 'NW') { acc.NW.push(getAnimals(curr.id)); }
  if (curr.location === 'SE') { acc.SE.push(getAnimals(curr.id)); }
  if (curr.location === 'SW') { acc.SW.push(getAnimals(curr.id)); }
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const animalsNamesBySex = () => species.reduce((acc, curr) => {
  if (curr.location === 'NE') { acc.NE.push(getAnimalsBySex(curr.id)); }
  if (curr.location === 'NW') { acc.NW.push(getAnimalsBySex(curr.id)); }
  if (curr.location === 'SE') { acc.SE.push(getAnimalsBySex(curr.id)); }
  if (curr.location === 'SW') { acc.SW.push(getAnimalsBySex(curr.id)); }
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

// const animalsSexSorted = () => species.reduce((acc, curr) => {
//   if (curr.location === 'NE') { acc.NE.push(getAnimalsSexSorted(curr.id)); }
//   if (curr.location === 'NW') { acc.NW.push(getAnimalsSexSorted(curr.id)); }
//   if (curr.location === 'SE') { acc.SE.push(getAnimalsSexSorted(curr.id)); }
//   if (curr.location === 'SW') { acc.SW.push(getAnimalsSexSorted(curr.id)); }
//   return acc;
// }, { NE: [], NW: [], SE: [], SW: [] });

const animalsNamesBySexSorted = () => species.reduce((acc, curr) => {
  if (curr.location === 'NE') { acc.NE.push(getAnimalsByNameAndSexSorted(curr.id)); }
  if (curr.location === 'NW') { acc.NW.push(getAnimalsByNameAndSexSorted(curr.id)); }
  if (curr.location === 'SE') { acc.SE.push(getAnimalsByNameAndSexSorted(curr.id)); }
  if (curr.location === 'SW') { acc.SW.push(getAnimalsByNameAndSexSorted(curr.id)); }
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const animalsNamesSorted = () => species.reduce((acc, curr) => {
  if (curr.location === 'NE') { acc.NE.push(getAnimalsSorted(curr.id)); }
  if (curr.location === 'NW') { acc.NW.push(getAnimalsSorted(curr.id)); }
  if (curr.location === 'SE') { acc.SE.push(getAnimalsSorted(curr.id)); }
  if (curr.location === 'SW') { acc.SW.push(getAnimalsSorted(curr.id)); }
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

const animalsLocation = () => species.reduce((acc, curr) => {
  if (curr.location === 'NE') { acc.NE.push(curr.name); }
  if (curr.location === 'NW') { acc.NW.push(curr.name); }
  if (curr.location === 'SE') { acc.SE.push(curr.name); }
  if (curr.location === 'SW') { acc.SW.push(curr.name); }
  return acc;
}, { NE: [], NW: [], SE: [], SW: [] });

function getSorted(options) {
  if (options.includeNames && options.sex === 'female') return animalsNamesBySexSorted();
  if (options.includeNames) return animalsNamesSorted();
  // if (options.sex === 'female') return animalsSexSorted();
  if (options.sex === 'female') return animalsLocation();
}
function getByNamed(options) {
  if (options.includeNames && options.sex === 'female') return animalsNamesBySex();
  return animalsNames();
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return animalsLocation();
  if (options.sorted) return getSorted(options);
  if (options.includeNames) return getByNamed(options);
}
// console.log(getAnimalMap());
// console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
console.log(getAnimalMap({ sex: 'female' }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
// console.log(getAnimalMap({ sex: 'female', sorted: true }));

module.exports = getAnimalMap;

// const filterSpeciesPerRegion = (region, sex) => {
//   const result = data.species.filter((element) => element.location === region);
//   return result;
// };

// const getAnimalFromRegion = (region) => {
//   const filteredSpecies = filterSpeciesPerRegion(region);
//   return filteredSpecies.map((specie) => `${ specie.name } `);
// };

// const createObj = () => ({
//   NE: getAnimalFromRegion('NE'),
//   NW: getAnimalFromRegion('NW'),
//   SE: getAnimalFromRegion('SE'),
//   SW: getAnimalFromRegion('SW'),
// });
