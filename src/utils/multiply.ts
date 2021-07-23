import dotProduct from '@utils/dotProduct';
import transpose from '@utils/transpose';

const multiply = (a, b) =>
  b.map((x, _) => transpose(a).map((y, _) => dotProduct(x, y)));

export default multiply;
