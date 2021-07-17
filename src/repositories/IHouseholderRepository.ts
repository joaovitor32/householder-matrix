export interface IResponseHouseholder {
  R: number[][];
  Q: number[][];
}

export default interface IHouseholderRepository {
  execute(matrix: number[][]): IResponseHouseholder;
}
