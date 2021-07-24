import IHouseholderRepository from '@repositories/IHouseholderRepository';
import canonicalVector from '@utils/canonicalVector';
import eye from '@utils/eye';
import matrixByScalar from '@utils/matrixByScalar';
import multiply from '@utils/multiply';
import norm from '@utils/norm';
import transpose from '@utils/transpose';
import unitVector from '@utils/unitVector';

// https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec16.pdf
// https://stackoverflow.com/questions/509211/understanding-slice-notation
// https://rosettacode.org/wiki/QR_decomposition#Python
// https://www.tutorialspoint.com/multiplying-two-matrices-in-javascript-with-different-dimensions

interface IResponse {
  Q: number[][];
  R: number[][];
}

class Householder implements IHouseholderRepository {
  public householder_matrix(index: number, x: number[]): number[][] {
    /**
     * @param Q - Ortogonal matrix
     * @param R - Transformed matrix
     * @param normX - Norm of a vector
     *
     */
    const x0 = x[0];
    if (index !== 0) {
      x[0] = 0;
    }

    const m = x.length;
    const identity = eye(m);
    const direction = matrixByScalar(norm(x), canonicalVector(index, m));
    const u = x.map((elem: number, uindex: number) => elem - direction[uindex]);
    const v = unitVector(u, u);

    const vv = multiply([v], transpose([v]));

    x[0] = x0;

    return identity.map((elem: number[], columnIndex) =>
      elem.map(
        (rowElem: number, rowIndex: number) =>
          rowElem - 2 * vv[columnIndex][rowIndex],
      ),
    );
  }

  // QR decomposition
  public qr(matrix: number[][]): IResponse {
    const m = matrix.length;
    const n = matrix[0].length;

    let Q = eye(m);

    matrix = transpose(matrix);

    Array.from({ length: n - Number(m === n) }).forEach((_, index) => {
      const householder_matrix = this.householder_matrix(index, matrix[index]);

      const R = multiply(householder_matrix, matrix);
      Q = householder_matrix;

      console.log('Q', Q);
      console.log('R', R);

      matrix = R;
    });

    console.log('Final result - R', matrix);
    console.log('Final result - Q', Q);

    return { Q, R: matrix };
  }
}

/* new Householder().qr([
  [12, 6, -4],
  [-51, 167, 24],
  [4, -68, -41],
]); */

new Householder().qr([
  [-1, -1, 1],
  [1, 3, 3],
  [-1, -1, 5],
]);

export default Householder;
