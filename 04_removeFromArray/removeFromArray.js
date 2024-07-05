const removeFromArray = function(...args) {
    let indexToRemove = [];
    for(let i = 1; i < args.length;i++){
        indexToRemove.push(args[0].indexOf(args[i]));
        args[0].indexOf(args[i]);
    }
    for(let i = 0; i < indexToRemove.length;i++){
        args[0].splice(indexToRemove[i], 1);
    }
    console.log(args[0]);
    return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
