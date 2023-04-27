const getTheTitles = function(array) {
    let listOfTitles = [];
    for (let i = 0; i <= array.length - 1; i++) {
        listOfTitles.push(array[i].title);
    }
    return listOfTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
