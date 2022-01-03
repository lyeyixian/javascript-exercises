const findTheOldest = function(people) {
    function getAge(birth, death) {
        if (!death) {
            death = new Date().getFullYear();
        }

        return death - birth;
    }

    return people.reduce((prev, current) => {
        const prevAge = getAge(prev.yearOfBirth, prev.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        return prevAge < currentAge ? current : prev;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
