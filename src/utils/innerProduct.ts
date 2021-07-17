const innerProduct = (col: Array<number>, col1: Array<number>): number =>
  col.map((_, index) => col[index] * col1[index]).reduce((val1, val2) => val1 + val2);

export default innerProduct;
