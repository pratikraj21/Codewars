// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

// My Solution
multiplicationTable = function (size) {
  let res = [];
  for (let i = 1; i <= size; i++) {
    let arr = [];
    let j = 1;
    while (j <= size) {
      arr.push(i * j);
      j++;
    }
    res.push(arr);
  }

  return res;
};

// Other Solutions
multiplicationTable = function (size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for (var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }

  return result;
};
