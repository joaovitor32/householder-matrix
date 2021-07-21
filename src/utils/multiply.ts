import transpose from '@utils/transpose';

const dotproduct = (a, b) =>
  a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);

const multiply = (a, b) =>
  b.map((x, _) => transpose(a).map((y, _) => dotproduct(x, y)));

export default multiply;
