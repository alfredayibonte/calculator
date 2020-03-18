const sum = (a, b, ...others) => [a, b, ...others]
  .map((n) => parseInt(n, 10))
  .filter((n) => !Number.isNaN(n))
  .reduce((total, number) => total + number, 0);

export default sum;
