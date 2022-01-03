const fibonacci = function(n) {
    let parse = parseInt(n);

    if (parse < 0) {
        return 'OOPS';
    }

    let a = 1;
    let b = 1;

    for (let i = 2; i < parse; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
