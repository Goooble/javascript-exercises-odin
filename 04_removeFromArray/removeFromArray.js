const removeFromArray = function(...args) {
    let indexToRemove = [];
    for(let i = 1; i < args.length;i++){
        let j = -1;
        while(args[0].indexOf(args[i], j+1) !== -1){
            indexToRemove.push(args[0].indexOf(args[i], j+1));
            j=args[0].indexOf(args[i], j+1);
        }
    }
    let k = 0;
    for(let i = 0; i < indexToRemove.length;i++){
        
        args[0].splice(indexToRemove[i]-k, 1);
        k++;
    }
    console.log(args[0]);
    return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
