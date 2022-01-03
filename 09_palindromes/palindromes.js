const palindromes = function (str) {
    processed = str.toLowerCase().replace(/[^A-Za-z]/g, '');

    return processed.split("").reverse().join("") === processed;
};

// Do not edit below this line
module.exports = palindromes;
