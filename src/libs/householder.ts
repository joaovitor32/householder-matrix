import IHouseholderRepository, {
  IResponseHouseholder,
} from '@repositories/IHouseholderRepository';
import eye from '@utils/eye';
import matrixByScalar from '@utils/matrixByScalar';
import multiply from '@utils/multiply';
import norm from '@utils/norm';
import transpose from '@utils/transpose';
import unitVector from '@utils/unitVector';

// https://www.cs.cornell.edu/~bindel/class/cs6210-f12/notes/lec16.pdf
// https://stackoverflow.com/questions/509211/understanding-slice-notation

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
    const R = matrix;

    const response = Array.from({ length: n }, (_, nIndex) => {
      const normx = norm(R[nIndex]);
      const s = R[nIndex].map((elem: number) => -Math.sign(elem));
      const u1 = R[nIndex].map(
        (elem: number, index: number) => elem - s[index] * normx,
      );
      const w = unitVector(R[nIndex], u1);

      w[0] = 1;
      const tau = u1.map(
        (elem: number, index: number) => (-1 * s[index] * elem) / normx,
      );

      // Da seguint maneira os valores de R não estão sendo reatribuidos
      return Array.from(
        { length: m },
        (_, mIndex) =>
          R[nIndex][mIndex] -
          multiply(multiply([tau], [w]), multiply(transpose([w]), R))[0][
            mIndex
          ],
      );
    });

    console.log(response);

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
