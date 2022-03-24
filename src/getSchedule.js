const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isAnimal = (scheduleTarget) => species.some(({ name }) => name === scheduleTarget);
const isDate = (scheduleTarget) => Object.keys(hours).some((item) => item === scheduleTarget);

const createObj = (scheduleTarget, exhibition) => ({
  [scheduleTarget]: {
    officeHour:
      `Open from ${data.hours[scheduleTarget].open}am until ${data.hours[scheduleTarget].close}pm`,
    exhibition,
  },
});

const createObj2 = (scheduleTarget, exhibition) => ({
  officeHour:
    `Open from ${data.hours[scheduleTarget].open}am until ${data.hours[scheduleTarget].close}pm`,
  exhibition,
});

function createClosedMessage(scheduleTarget) {
  return ({ [scheduleTarget]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } });
}

function createClosedMessage2(scheduleTarget) {
  return ({ officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' });
}

function getSpeciesByDay(scheduleTarget) {
  const spcFound = species.reduce((acc, curr) => {
    if (curr.availability.some((element) => element === scheduleTarget)) acc.push(curr.name);
    return acc;
  }, []);
  return spcFound;
}
// console.log(getSpeciesByDay('Tuesday'));

function getFullSchedule() {
  // console.log(Object.keys(hours));
  return Object.keys(hours).reduce((acc, curr) => {
    if (curr === 'Monday') {
      acc[curr] = createClosedMessage2(curr);
    } else {
      // acc[curr] = createObj2(curr, getSpeciesByDay(curr));
      acc[curr] = createObj2(curr, getSpeciesByDay(curr));
      // console.log(createObj(curr, getSpeciesByDay(curr)));
    }
    return acc;
  }, {});
}
// console.log(getFullSchedule());

function getSchedule(scheduleTarget) {
  // if (!scheduleTarget) return getFullSchedule();
  if (isAnimal(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  if (isDate(scheduleTarget)) {
    const animalsList = getSpeciesByDay(scheduleTarget);
    if (animalsList.length > 0) return createObj(scheduleTarget, animalsList);
    return createClosedMessage(scheduleTarget);
  }
  return getFullSchedule(); // qualquer coisa
}

console.log(getSchedule('qualquercoisa'));
// console.log(getSchedule('lions'));
// console.log(getSchedule('Monday'));
// console.log(getSchedule('Tuesday'));
// console.log(getSchedule());
module.exports = getSchedule;

// const getAnimalByDay = (day) => species
//   .filter(({ availability }) => availability.includes(day))
//   .map(({ name }) => name);

// const getFullAnimalSchedule = () => Object.entries(hours).reduce((acc, [day, { open, close }]) => {
//   if (day === 'Monday') {
//     acc[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
//     return acc;
//   }
//   acc[day] = {
//     officeHour: `Open from ${open}am until ${close}pm`,
//     exhibition: getAnimalByDay(day),
//   };
//   return acc;
// }, {});

// console.log(getFullAnimalSchedule());

// const getScheduleByDay = (day) => {
//   const schedule = getFullAnimalSchedule();
//   return { [day]: schedule[day] };
// };
// const getScheduleByAnimal = (animalSpecie) => {
//   const specie = species.find(({ name }) => name === animalSpecie);
//   return specie.availability;
// };

// const isDayParameter = (day) => Object.keys(hours).includes(day);
// const isAnimalParameter = (animalSpecie) => !!species.find(({ name }) => name === animalSpecie);
// function getSchedule(scheduleTarget) {
//   if (isDayParameter(scheduleTarget)) return getScheduleByDay(scheduleTarget);
//   if (isAnimalParameter(scheduleTarget)) return getScheduleByAnimal(scheduleTarget);
//   return getFullAnimalSchedule();
// }

// // console.log(getSchedule('lions'));
// module.exports = getSchedule;
