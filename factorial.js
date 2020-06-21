let memo = {};

function factorial(n) {
  if (n in memo) return memo[n];
  if (n === 0) return 1;
  console.log(memo);
  memo[n] = n * factorial(n - 1);
  return memo[n];
}

console.log(factorial(6));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(11));
