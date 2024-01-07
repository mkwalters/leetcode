const twoSum = (nums: number[], target: number): number[] => {
  const seeking: Object = {};
  nums.forEach((num, index) => {
    if (seeking.hasOwnProperty(num)) {
      return [num, target - num];
    } else {
      seeking[target - num] = true;
    }
  });
  return [-1, -1]; // the problem guarentees that there is a solution, so we should never get here. However, TS wants a return
};
