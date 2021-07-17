const unitVector = (array: Array<number>, value: number): Array<number> =>
  array.map((elem: number) => elem / value);

export default unitVector;
