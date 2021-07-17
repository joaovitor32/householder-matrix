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
      const s = -Math.sign(R[nIndex][nIndex]);
      const u1 = R[nIndex][nIndex] - s * normx;
      const w = unitVector(R[nIndex], u1);
      w[0] = 1;
      const tau = (-s * u1) / normx;

      return Array.from(
        { length: m },
        (_, mIndex) =>
          R[nIndex][mIndex] -
          matrixByScalar(tau, w)[mIndex] * multiply([w], R)[0][mIndex],
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
