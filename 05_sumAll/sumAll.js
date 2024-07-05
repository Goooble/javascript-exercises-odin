const sumAll = function(start, end) {
    let sum = 0;
    for(;start <= end; start++){
        sum +=start;
    }
    console.log(sum);
    return sum
};

// Do not edit below this line
module.exports = sumAll;
