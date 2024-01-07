const majorityElement = (nums: number[]): number => {
  let currentHighest = [-1, -1];
  const elementFrequency: Object = {};
  nums.forEach((num) => {
    if (elementFrequency.hasOwnProperty(num)) {
      elementFrequency[num] = elementFrequency[num] + 1;
      if (elementFrequency[num] > currentHighest[1]) {
        currentHighest = [num, elementFrequency[num]];
      }
    } else {
      elementFrequency[num] = 1;
      if (elementFrequency[num] > currentHighest[1]) {
        currentHighest = [num, elementFrequency[num]];
      }
    }
  });
  return currentHighest[0];
};
