var moveZeroes = function (nums) {
  let ind = false,
    c = 0,
    z = 0;

  nums.forEach((num) => (num === 0 ? ++z : null));

  for (let i = 0; i < nums.length; i++) {
    if (nums.length - i === c || z === 0) break;

    ind ? (i -= 1) : null;
    ind ? (ind = !ind) : null;

    // console.log(i, nums);
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      ind = true;
      c++;
      --z;
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 1, 0, 0, 0]));
console.log(moveZeroes([0, 0, 1, 0, 5, 3, 0]));
