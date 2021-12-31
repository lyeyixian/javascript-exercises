const ftoc = function(fahrenheit) {
    return parseFloat(((fahrenheit - 32) * 5 / 9).toFixed(1));
};

const ctof = function(celcius) {
    return parseFloat((celcius * 9 / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
