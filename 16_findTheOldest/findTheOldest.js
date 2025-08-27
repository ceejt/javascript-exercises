const findTheOldest = function(people) {
    return people.reduce((acc, person) => {
        const currentYear = new Date().getFullYear();
        const accAge = (acc.yearOfDeath || currentYear) - acc.yearOfBirth;
        const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;

        if (personAge > accAge) {
            return person;
        } else return acc;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
