const reverseString = function(string) {
    let outputString = "";
    // Split input string into array of chars
    let arrayOfChars = string.split("");
    // Pop char out of the array and concatenate into a new string
    while (arrayOfChars.length !== 0){
        outputString += arrayOfChars.pop();
    };
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
