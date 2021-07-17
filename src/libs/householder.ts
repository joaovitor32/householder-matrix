/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint prefer-const: 0 */

import IHouseholderRepository, { IResponseHouseholder } from '@repositories/IHouseholderRepository';
import eye from '@utils/eye';
import innerProduct from '@utils/innerProduct';
import matrixByScalar from '@utils/matrixByScalar';
import norm from '@utils/norm';
import unitVector from '@utils/unitVector';

class Householder implements IHouseholderRepository {
  public execute(matrix: number[][]): IResponseHouseholder {
    /**
     * @param Q - Ortogonal matrix
     * @param R - Transformed matrix
     * @param normX - Norm of a vector
     *
     */

    const m = matrix.length;
    const n = matrix[0].length;

    const Q = eye(m);
    let R = matrix;

    let normx: number;
    let s: number;
    let u1: number;
    let w: Array<number>;
    let tau: number;

    let rSliced: Array<Array<number>> = [[]];
    let rResponse: Array<Array<number>> = [[]];

    let tauQ: Array<number> = [];
    let dotW: Array<number> = [];

    [...new Array(n - 1)].forEach((_, index: number) => {
      // normx = norm(R(j:end,j)); -> Erro detectado
      normx = norm(R[index]);
      s = -1 * Math.sign(R[index][index]);
      u1 = R[index][index] - s * normx;

      // w = R(j:end,j)/u1; -> Erro detectado
      w = unitVector(R[index], u1);
      w[0] = 1;
      tau = (-s * u1) / normx;

      rSliced = R.slice(index, R[0].length);

      rResponse = rSliced.map(rColumn => {
        tauQ = matrixByScalar(tau, w);
        dotW = matrixByScalar(innerProduct(w, w), rColumn);

        return rColumn.map((elem, rColumnIndex) => elem - tauQ[rColumnIndex] * dotW[rColumnIndex]);
      });
      Array.from(Array(R[0].length).keys())
        .slice(index)
        .map((_, rIndex) => (R[rIndex] = rResponse[rIndex]));
    });

    return { R, Q };
  }
}

console.log(
  new Householder().execute([
    [1, 2],
    [3, 4],
  ]),
);

export default Householder;
