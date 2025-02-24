const findTheOldest = function(peopleArray) {
    // Initialize varaibles to track age and oldest person
    let oldestAgeSoFar = 0;
    let oldestPerson;
    let curAge = 0;

    // Get current year
    let curTime = new Date();
    let curYear = curTime.getFullYear();

    // Iterate through the input array to find and return the oldest person
    for (person of peopleArray){
        if (person.yearOfDeath){
            curAge = person.yearOfDeath - person.yearOfBirth;
        }
        else {
            curAge = curYear - person.yearOfBirth;
        }
        if (curAge > oldestAgeSoFar){
            oldestPerson = person;
            oldestAgeSoFar = curAge;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
