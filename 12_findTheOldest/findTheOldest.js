const findTheOldest = function (people) {
  let d = new Date();
  year = d.getFullYear();

  people.sort((a, b) => {
    let aPerson;
    let bPerson;
    if ("yearOfDeath" in a) {
      aPerson = a.yearOfDeath - a.yearOfBirth;
    } else {
      aPerson = year - a.yearOfBirth;
    }
    if ("yearOfDeath" in b) {
      bPerson = b.yearOfDeath - b.yearOfBirth;
    } else {
      bPerson = year - b.yearOfBirth;
      console.log(bPerson);
    }
    return aPerson > bPerson ? 1 : -1;
  });
  console.log(year);
  return people[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
