const removeFromArray = function(...args) {
    let indexToRemove = [];
    for(let i = 1; i < args.length;i++){
        let j = -1;
        do{
            
        indexToRemove.push(args[0].indexOf(args[i], j+1));
        if(args[0].indexOf(args[i], j+1) === -1){
            break;
        }
        j=args[0].indexOf(args[i], j+1);
        }while(1);
    }
    for(let i = 0; i < indexToRemove.length;i++){
        args[0].splice(indexToRemove[i], 1);
    }
    
    return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
