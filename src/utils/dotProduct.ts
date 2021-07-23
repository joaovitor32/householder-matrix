const dotProduct = (a: number[], b: number[]): number =>
  a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);

export default dotProduct;
