const validParantheses = (s: string): boolean => {
  const stack: string[] = [];

  for (let currentChar of s) {
    if (currentChar === "(" || currentChar === "[" || currentChar === "{") {
      stack.push(currentChar);
    } else if (currentChar === ")") {
      if (stack.pop() !== "(") {
        return false;
      }
    } else if (currentChar === "]") {
      if (stack.pop() !== "[") {
        return false;
      }
    } else if (currentChar === "}") {
      if (stack.pop() !== "{") {
        return false;
      }
    }
  }
  return stack.length === 0;
};
