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
  A: number[][];
}

class Householder implements IHouseholderRepository {
  public householder_matrix(index: number, x: number[]): number[][] {
    /**
     * @param Q - Ortogonal matrix
     * @param R - Transformed matrix
     * @param normX - Norm of a vector
     *
     */

    const m = x.length;
    const identity = eye(m);

    const direction = matrixByScalar(norm(x), canonicalVector(index, m));
    const u = x.map((elem: number, index: number) => elem - direction[index]);
    const v = unitVector(u, u);
    v[0] = 1;

    const vv = multiply([v], transpose([v]));

    const h_matrix = identity.map((elem: number[], columnIndex) =>
      elem.map(
        (rowElem: number, rowIndex: number) =>
          rowElem - 2 * vv[columnIndex][rowIndex],
      ),
    );

    return h_matrix;
  }

  // QR decomposition
  public qr(matrix: number[][]): IResponse {
    const m = matrix.length;
    const n = matrix[0].length;

    const Q = eye(m);

    Array.from({ length: n - Number(m === n) }, (_, index) => {
      const H = eye(m);

      const h_matrix = this.householder_matrix(index, matrix[index]);
    });

    return { Q, A: matrix };
  }
}

console.log(
  new Householder().qr([
    [12, 6, -4],
    [-51, 167, 24],
    [4, -68, -41],
  ]),
);

export default Householder;
