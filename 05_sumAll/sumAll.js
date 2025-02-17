const sumAll = function(num1, num2) {
    let sum = 0;
    // Validate input arguments
    if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR';
    };
    if (!(num1 > 0) || !(num2 > 0)){
        return 'ERROR';
    };

    // Order check and swap if needed
    if (!(num2 > num1)){
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }

    for (num1; num1 <= num2; num1++){
        sum += num1;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
