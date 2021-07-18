import norm from '@utils/norm';

const unitVector = (
  array: Array<number>,
  value: Array<number>,
): Array<number> => {
  const normValue = norm(value);
  return array.map((elem: number) => elem / normValue);
};

export default unitVector;
