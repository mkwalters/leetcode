const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const magazineLetterCount = letterFreq(magazine);
  const neededLettersCount = letterFreq(ransomNote);

  for (let letter of Object.keys(neededLettersCount)) {
    if (
      !magazineLetterCount.hasOwnProperty(letter) ||
      neededLettersCount[letter] > magazineLetterCount[letter]
    ) {
      return false;
    }
  }
  return true;
};

const letterFreq = (s: string): Object => {
  const frequency = {};
  for (let currentChar of s) {
    if (frequency.hasOwnProperty(currentChar)) {
      frequency[currentChar] = frequency[currentChar] + 1;
    } else {
      frequency[currentChar] = 1;
    }
  }
  return frequency;
};
