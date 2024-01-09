const evalRPN = (tokens: string[]): number => {
  const operands: number[] = [];

  tokens.forEach((token) => {
    if (token === "+") {
      operands.push((operands.pop() as number) + (operands.pop() as number));
    } else {
      // raw operand
      operands.push(parseInt(token));
    }
  });

  return operands[0];
};
