function isAnagram(s: string, t: string): boolean {
  return objectsHaveSameKeyValuePairs(letterFrequency(s), letterFrequency(t));
}
const letterFrequency = (s: string): Object => {
  const frequency = {};
  for (let currentChar of s) {
    if (frequency.hasOwnProperty(currentChar)) {
      frequency[currentChar] += 1;
    } else {
      frequency[currentChar] = 1;
    }
  }
  return frequency;
};

function objectsHaveSameKeyValuePairs(
  obj1: Record<string, any>,
  obj2: Record<string, any>
): boolean {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the number of keys is the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check if the values for each key are the same
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  // If all checks passed, the objects have the same key-value pair relationships
  return true;
}
