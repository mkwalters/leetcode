const maxProfit = (prices: number[]): number => {
  let currentLowest = prices[0];
  let currentMaxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    if (currentPrice <= currentLowest) {
      currentLowest = currentPrice;
    } else {
      if (currentPrice - currentLowest > currentMaxProfit) {
        currentMaxProfit = currentPrice - currentLowest;
      }
    }
  }
  return currentMaxProfit;
};
