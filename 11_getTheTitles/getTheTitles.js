const getTheTitles = function(booksArray) {
    let titleArray = [];
    for (book of booksArray){
        titleArray.push(book['title']);
    }
    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
