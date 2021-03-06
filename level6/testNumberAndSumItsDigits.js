// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2
// The next number in having this property is 135.
// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// My Solution
function eureka(num) {
  let power = 1;
  let res = 0;
  num
    .toString()
    .split("")
    .forEach((digit) => (res += Math.pow(+digit, power++)));
  return num === res;
}

function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr.filter((num) => eureka(num));
}

// Other Solutions
function sumDigPow(a, b) {
  var ans = [];
  while (a <= b) {
    if (
      a
        .toString()
        .split("")
        .reduce((x, y, i) => x + (+y) ** (i + 1), 0) == a
    )
      ans.push(a);
    a++;
  }
  return ans;
}
