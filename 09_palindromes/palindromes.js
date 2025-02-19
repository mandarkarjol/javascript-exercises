const palindromes = function (string) {
    const spaceAndPunctuation = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~ ';
    let newStringOne = "";
    // Make a newStringOne with the input string but without punctuations and blank spaces
    for (char of string){
        if (!spaceAndPunctuation.includes(char)){
            newStringOne += char.toLowerCase();
        };
    };
    // Split this new string into an array of chars
    let charArray = newStringOne.split("");

    // Make newStringTwo using array of chars but in reverse order
    let newStringTwo = "";

    while (charArray.length !== 0){
        newStringTwo += charArray.pop();
    };

    // Compare newStringOne and newStringTwo and return the boolean
    if (newStringOne === newStringTwo){
        return true;
    }
    else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
