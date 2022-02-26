import { IResponse } from '../core/qr_decomposition';

export interface householder_matrix {
  householder_matrix(index: number, x: number[]): number[][];
}

export default interface qr_decomposition {
  qr_decomposition(matrix: number[][]): IResponse;
}
