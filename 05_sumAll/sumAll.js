const sumAll = function (start, end) {
  if (
    typeof start !== "number" ||
    typeof end !== "number"||
    start < 0 ||
    end < 0 
  ) {
    return "ERROR";
  }
  let sum = 0;
  if (start < end) {
    for (; start <= end; start++) {
      sum += start;
    }
  } else {
    for (; end <= start; end++) {
      sum += end;
    }
  }
  console.log(sum);
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
