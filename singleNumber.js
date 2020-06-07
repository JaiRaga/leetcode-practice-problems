var singleNumber = function (nums) {
  //   nums.sort();
  let a = [],
    temp = null;
  for (let i = 0; i < nums.length; i++) {
    temp = a.indexOf(nums[i]);
    temp === -1 ? a.push(nums[i]) : a.splice(temp, 1);
    // console.log(temp, a, nums[i]);
  }
  return a[0];
};

console.log(singleNumber([4, 1, 2, 1, 2]));
