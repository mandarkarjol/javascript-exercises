const removeFromArray = function(array, ...removeElements) {
    let outputArray = [];
    let foundInRemoveElements = false;
    
    // Traverse through input array and check if element in input array matches removeElements array
    for (const el of array){
        for (const toRemoveEl of removeElements){
            if (el === toRemoveEl){
                foundInRemoveElements = true;
                break; // Stop searching in removeElements if a match is already found
            };
        };
         // If it is not found in the entire removeElements array, then push that element into the output array
         if(!foundInRemoveElements){
            outputArray.push(el);
         }
         foundInRemoveElements = false; // reset for next element
    };
    return outputArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
