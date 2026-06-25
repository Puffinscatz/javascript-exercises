const sumAll = function(numOne, numTwo) {
    if (numOne < 0 || numTwo < 0) {
        return "ERROR";
    }

    let min = Math.min(numOne, numTwo);
    let max = Math.max(numOne, numTwo);

    let total = 0;

    for (let i = min; i <= max; i++) {
        total += i;
    }

    return total;

};

// Do not edit below this line
module.exports = sumAll;
