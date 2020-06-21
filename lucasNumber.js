// the sequence begins: 2, 1, 3, 4, 7, 11, ...

function lucasNumberMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 2;
  else if (n === 1) return 1;
  memo[n] = lucasNumberMemo(n - 1, memo) + lucasNumberMemo(n - 2, memo);
  return memo[n];
}
