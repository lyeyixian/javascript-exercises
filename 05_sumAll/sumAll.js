const sumAll = function(from, to) {
    let sum = 0;

    if (from < 0 || to < 0 || typeof from !== 'number' || typeof to !== 'number') {
        return 'ERROR'
    }

    if (from < to) {
        for (let i = from; i <= to; i++) {
            sum += i;
        }
    } else {
        for (let i = from; i >= to; i--) {
            sum += i;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
