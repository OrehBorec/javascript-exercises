const findTheOldest = (people) => {
    const currentYear = new Date().getFullYear();

    return people.reduce((oldest, person) => {
        const deathYear = person.yearOfDeath || currentYear;
        const age = deathYear - person.yearOfBirth;

        const oldestDeathYear = oldest.yearOfDeath || currentYear;
        const oldestAge = oldestDeathYear - oldest.yearOfBirth;

        return age > oldestAge ? person : oldest;
    });
};

// теперь можно и поспать
module.exports = findTheOldest;
