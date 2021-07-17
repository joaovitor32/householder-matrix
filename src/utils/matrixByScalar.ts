const norm = (escalar: number, col: Array<number>): Array<number> =>
  col.map(elem => escalar * elem);

export default norm;
