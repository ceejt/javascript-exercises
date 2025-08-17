const sumAll = function(int1, int2) {
    if (typeof int1 !== 'number' || typeof int2 !== 'number')
        return 'ERROR';
    if (int1 < 0 || int2 < 0) {
        return 'ERROR';
    }
    if (int1 % 1 !== 0 || int2 % 1 !== 0) {
        return 'ERROR';
    }

    let start = int1
    let end = int2;
    int1 > int2 ? (start = int2, end = int1) : (start = int1, end = int2);

    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
