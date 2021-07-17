const norm = (col: Array<number>): number =>
  Math.sqrt(
    col.map((curr: number) => curr * curr).reduce((accum: number, curr: number) => accum + curr),
  );

export default norm;
