import dotProduct from './dotProduct';
import transpose from './transpose';

const multiply = (a, b) =>
  b.map((x, _) => transpose(a).map((y, _) => dotProduct(x, y)));

export default multiply;
