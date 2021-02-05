const toBeAdded = [1, 2, 3, 4, 5];

function sumFor(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

function sumWhile(nums) {
  let sumWh = 0;
  let i = 0;
  while (i < nums.length) {
    sumWh += nums[i];
    i++;
  }
  return sumWh;
}

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (memo, num) { return memo + num; }, 0);
}
console.log(sumFor(toBeAdded));
console.log(sumWhile(toBeAdded));
console.log(sumRecursion(toBeAdded));
console.log(sumTheSimpleWay(toBeAdded));
