const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  return species.filter((element) => ids.includes(element.id));
}
// console.log((species[0].id, species[1].id, species[2].id, species[3].id));
module.exports = getSpeciesByIds;
