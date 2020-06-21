// Solve for nth fibonacci number using recursion
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(41));
console.log(fibonacci(45));
console.log(fibonacci(20));
