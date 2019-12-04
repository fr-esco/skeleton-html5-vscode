function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const age = () => rnd(1, 120)

const numberOfPeople = 10
const people = []

for (let i = 0; i < numberOfPeople; i++) {
  // Generazione delle persone di età casuale
  people.push({
    name: 'Nome ' + (i + 1),
    surname: `Cognome ${i + 1}`,
    age: age(),
    // age: rnd(1, 120),
  })
}

// console.log('Generazione completata', people)

for (let i = 0; i < numberOfPeople; i++) {
  // Stampa della lista "nome e cognome ha # anni"
  console.log(printPerson(people[i]))
}

// hoisting
function printPerson(person) {
  return `${person.name} ${person['surname']} ha ${person['age']} anni.`
}

function getAdultAgesSum() {
  return people.filter(x => x.age >= 18)
    .map(x => x.age)
    .reduce((sum, val) => sum + val)
}

function getAdultAgesSumOld() {
  const adultAges = []
  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= 18)
      adultAges.push(people[i]['age'])
  }

  let sum = 0
  for (let i = 0; i < adultAges.length; i++) {
    sum += adultAges[i]
  }

  return sum
}

var pippo = 1
var pluto = 2
if (true) {
  let pippo = 7
  var pluto = pippo
  console.log(pippo, pluto)
} else {
  console.log(pippo)
}
console.log(pippo, pluto)
