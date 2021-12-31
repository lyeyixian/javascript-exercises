const removeFromArray = function(arr, ...toRemove) {
    let res = arr;

    toRemove.forEach(element => res = res.filter(arrElement => arrElement !== element));

    return res;
};

// Do not edit below this line
module.exports = removeFromArray;
