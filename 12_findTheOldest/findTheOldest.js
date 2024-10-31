const findTheOldest = function(people) {
    people.forEach(person => {
        if (person.yearOfDeath == null) {
            const currentTime = new Date;
            person.yearOfDeath = currentTime.getFullYear();
        }
        person.years = person.yearOfDeath - person.yearOfBirth})
        const byEldest = people.sort((a, b) => b.years - a.years);
        return byEldest[0];               
};

// Do not edit below this line
module.exports = findTheOldest;
