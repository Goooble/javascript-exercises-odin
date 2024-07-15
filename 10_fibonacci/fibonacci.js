const fibonacci = function(pos) {
    if(pos < 0) return 'OOPS';
    zero = 0;
    one = 1;
    let sequence = [zero, one];
    for(let i = 2; i <= +pos; i++){
        sequence[i] = sequence[i-1] + sequence[i-2];
    }
    return sequence[pos];
};  

// Do not edit below this line
module.exports = fibonacci;
