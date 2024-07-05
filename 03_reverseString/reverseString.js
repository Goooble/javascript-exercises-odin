const reverseString = function(string) {
    //split into array
    let stringArray = [];
    let reversedArray = [];
    
    stringArray = string.split("");
    //read the array in the opposite direction
    for(let i = stringArray.length-1; i >=0; i--){
    //input the readings into a new array
    reversedArray.push(stringArray[i]);
    }
    //printout the string after removing commas
    let reversedString = '';
    for(let i = 0; i < reversedArray.toString().length; i+=2){
        reversedString += reversedArray.toString().slice(i,i+1);
    }
    return reversedString;
   // o,l,l,e,h,
   // 0123456789
    
};

// Do not edit below this line
module.exports = reverseString;
