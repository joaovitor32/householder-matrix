import canonicalVector from '@utils/canonicalVector';
import eye from '@utils/eye';
import matrixByScalar from '@utils/matrixByScalar';
import multiply from '@utils/multiply';
import norm from '@utils/norm';
import transpose from '@utils/transpose';
import unitVector from '@utils/unitVector';

export interface IResponse {
  Q: number[][];
  R: number[][];
}

const householder_matrix = (index: number, x: number[]): number[][] => {
  /**
   * @identity -
   *
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
};

// QR decomposition
// A aplicação do transpose é só para facilitar a codificação
const qr_decomposition = (matrix: number[][]): IResponse => {
  /**
   * @param Q - Ortogonal matrix
   * @param R - Transformed matrix
   * @h_matrix - Householder matrix
   */

  const m = matrix.length;
  const n = matrix[0].length;

  let Q = eye(m);
  let R = matrix;

  matrix = transpose(matrix);

  Array.from({ length: n - Number(m === n) }).forEach((_, index) => {
    const h_matrix = householder_matrix(index, matrix[index]);

    Q = index === 0 ? h_matrix : multiply(Q, h_matrix);
    R = multiply(h_matrix, matrix);
    matrix = R;
  });

  return { Q: transpose(Q), R: transpose(matrix) };
};

export default qr_decomposition;
