/* eslint-disable no-return-assign */
// https://www.tutorialspoint.com/algorithm-for-matrix-multiplication-in-javascript

export interface IMatrix {
  matrix: number[][];
}

const multiply = (
  a: IMatrix['matrix'],
  b: IMatrix['matrix'],
): IMatrix['matrix'] => {
  const response: IMatrix['matrix'] = new Array(a.length)
    .fill(0)
    .map(() => new Array(b[0].length).fill(0));

  /* if (b.length !== a[0].length) {
    throw new Error('Number of columns and rows are incompatible');
  } */

  a.forEach((aCol, aIndex) =>
    b.forEach((bCol, bIndex) =>
      aCol.forEach(
        (_, colIndex) =>
          (response[aIndex][bIndex] += aCol[colIndex] * bCol[colIndex]),
      ),
    ),
  );

  return response;
};

export default multiply;
