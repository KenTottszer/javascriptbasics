const getTheTitles = function(books) {
    const newArray = [];
    for (var i = 0; i < books.length; i++){
        newArray[i] = books[i].title;
    }
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
