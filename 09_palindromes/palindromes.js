const palindromes = function (string) {
  //filter for letters and numbers in teh string
  //use utf code
  let array = string.split("");
  let filteredArray = array.filter((char) => {
    let charCode = char.charCodeAt();
    if (
      Number(char) ||
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      return true;
    }
    return false;
  });
  console.log(filteredArray);
  //to lowercase
  let loweredArray = filteredArray.map((char) => {
    if (!Number(char)) {
      char = char.toLowerCase();
    }
    return char;
  });

  console.log(loweredArray);
  let reversedArray = loweredArray.slice();
  //reverse the string and equal it to the original
  return loweredArray.join("") === reversedArray.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
