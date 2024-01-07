//converts string to numbers and letters and then lower cases everything
const sanitizeString = (input: string): string => {
  // Use a regular expression to replace any character that is not a letter or a number with an empty string
  const sanitizedString = input.replace(/[^a-zA-Z0-9]/g, "");

  return sanitizedString.toLowerCase();
};

const isPalindrome = (s: string) => {
  let current = sanitizeString(s);
  while (current.length > 1) {
    if (current[0] !== current[current.length - 1]) {
      return false;
    }
    current = current.slice(1, current.length - 1);
  }
  return true;
};
