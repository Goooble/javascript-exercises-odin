const removeFromArray = function(...args) {
    let indexToRemove = [];
    let j =0;
    for(let i = 1; i < args.length;i++){

        while(args[0].indexOf(args[i]) !== -1){
        indexToRemove.push(args[0].indexOf(args[i]));
        args[0].splice(indexToRemove[j], 1);
        j++;
        }
    }
    console.log(args[0]);
    return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
