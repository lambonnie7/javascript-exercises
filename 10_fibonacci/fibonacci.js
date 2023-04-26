const fibonacci = function(nth) {
    if (nth < 0) return 'OOPS';
    let secondPrecedingNumber = 0;
    let precedingNumber = 1;  
    for (let i = 1; i < nth; i++) {
        const newNumber = secondPrecedingNumber + precedingNumber;
        secondPrecedingNumber = precedingNumber;
        precedingNumber = newNumber;
    }
    return precedingNumber;
};

// Do not edit below this line
module.exports = fibonacci;
