const palindromes = function (word) {
    const noSpecialCharactersWord = word.replace(/[^a-zA-Z0-9]/g, '');
    const backwardsWord = noSpecialCharactersWord.split('').reverse().join('');
    if (noSpecialCharactersWord.toLowerCase() == backwardsWord.toLowerCase()) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
